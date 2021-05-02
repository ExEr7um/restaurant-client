export const state = () => ({
  menu: null,
})

export const actions = {
  async getMenu({ commit }) {
    const menu = await this.$axios.$get(
      `${this.$axios.defaults.baseURL}/menuItems?size=100&projection=withCategory`
    )
    commit(
      'SET_MENU',
      menu._embedded.menuItems.sort(
        (a, b) => new Date(a.creationDate) - new Date(b.creationDate)
      )
    )
  },
  async editMenu({ state, dispatch }, payload) {
    const category = await this.$axios.$get(
      `${this.$axios.defaults.baseURL}/categories/search/title?title=${payload.category}`
    )
    const selectedItem = state.menu.findIndex((item) => item.id === payload.id)
    payload.category = category._links.self.href
    let res = null
    if (selectedItem !== -1) {
      res = await this.$axios.$patch(
        `${this.$axios.defaults.baseURL}/menuItems/${payload.id}`,
        payload
      )
    } else {
      res = await this.$axios.$post(
        `${this.$axios.defaults.baseURL}/menuItems`,
        payload
      )
    }
    if (res) {
      dispatch('getMenu')
    }
  },
  async removeMenuItem({ dispatch }, payload) {
    const res = await this.$axios.$delete(
      `${this.$axios.defaults.baseURL}/menuItems/${payload}`
    )
    if (res !== null) {
      dispatch('getMenu')
    }
  },
}

export const mutations = {
  SET_MENU(state, menu) {
    state.menu = menu
  },
}
