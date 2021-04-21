export const state = () => ({
  your_booking: null,
  your_booking_id: null,
  bookings: null,
})

export const actions = {
  async getBookings({ commit }) {
    const bookings = await this.$axios.$get(
      `${this.$axios.defaults.baseURL}/bookings`
    )
    commit(
      'SET_BOOKINGS',
      bookings._embedded.bookings.sort(
        (a, b) => new Date(a.date) - new Date(b.date)
      )
    )
  },
  async getYourBooking({ state, commit }) {
    if (state.your_booking_id) {
      let yourBooking = null
      try {
        yourBooking = await this.$axios.$get(state.your_booking_id)
        commit('SET_YOUR_BOOKING', yourBooking)
      } catch (err) {
        if (err.response.status === 404) {
          commit('REMOVE_YOUR_BOOKING')
        }
      }
    }
  },
  async createBooking({ commit, dispatch }, payload) {
    const res = await this.$axios.$post(
      `${this.$axios.defaults.baseURL}/bookings`,
      payload
    )
    if (res) {
      commit('SET_YOUR_BOOKING_ID', res._links.self.href)
      dispatch('getYourBooking')
    }
  },
  async removeBooking({ dispatch }, payload) {
    const res = await this.$axios.$delete(payload)
    if (res !== null) {
      dispatch('getBookings')
      dispatch('getYourBooking')
    }
  },
}

export const mutations = {
  SET_BOOKINGS(state, bookings) {
    state.bookings = bookings
  },
  SET_YOUR_BOOKING_ID(state, yourBookingLink) {
    state.your_booking_id = yourBookingLink
  },
  SET_YOUR_BOOKING(state, yourBooking) {
    state.your_booking = yourBooking
  },
  REMOVE_YOUR_BOOKING(state) {
    state.your_booking = state.your_booking_id = null
  },
}
