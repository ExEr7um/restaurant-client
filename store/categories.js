export const state = () => ({
  categories: null,
})

export const actions = {
  async getCategories({ commit }) {
    const categories = await this.$axios.$get(
      `${this.$axios.defaults.baseURL}/categories?projection=withId`
    )
    commit(
      'SET_CATEGORIES',
      categories._embedded.categories.sort((a, b) =>
        a.title.toLowerCase().localeCompare(b.title.toLowerCase())
      )
    )
  },
  async editCategory({ state, dispatch }, payload) {
    const selectedCategory = state.categories.findIndex(
      (category) => category.id === payload.id
    )
    let res = null
    if (selectedCategory !== -1) {
      res = await this.$axios.$patch(
        `${this.$axios.defaults.baseURL}/categories/${payload.id}`,
        payload
      )
    } else {
      res = await this.$axios.$post(
        `${this.$axios.defaults.baseURL}/categories`,
        payload
      )
    }
    if (res) {
      dispatch('getCategories')
      dispatch('getMenu')
    }
  },
  async removeCategory({ dispatch }, payload) {
    const res = await this.$axios.$delete(
      `${this.$axios.defaults.baseURL}/categories/${payload}`
    )
    if (res !== null) {
      dispatch('getCategories')
    }
  },
}

export const mutations = {
  SET_CATEGORIES(state, categories) {
    state.categories = categories
  },
}
