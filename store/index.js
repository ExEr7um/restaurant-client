export const state = () => ({
  menu: null,
  // {
  //   id: 1,
  //   title: 'Биг Мак',
  //   category: 'Бургеры',
  //   image:
  //     'https://mcdonalds.ru/resize/500x500//upload/iblock/dfa/0000_BigMac_BB_1500x1500-_4_-_1_.png',
  //   price: 135,
  //   ccal: 522,
  //   ingredients: [
  //     'Говядина',
  //     'Специальный соус',
  //     'Сыр',
  //     'Огурцы',
  //     'Салат',
  //     'Лук',
  //     'Булочка',
  //     'Кунжут',
  //   ],
  // },
  // {
  //   id: 2,
  //   title: 'Биг Тейсти',
  //   category: 'Бургеры',
  //   image:
  //     'https://mcdonalds.ru/resize/-x1020/upload/iblock/e28/2004_BigTasty_1500x1500-_3_-_1_.png',
  //   price: 249,
  //   ccal: 812,
  //   ingredients: [
  //     'Говядина',
  //     'Соус с "Дымком"',
  //     'Сыр',
  //     'Помидоры',
  //     'Салат',
  //     'Лук',
  //     'Булочка',
  //     'Кунжут',
  //   ],
  // },
  // {
  //   id: 3,
  //   title: 'Двойной роял',
  //   category: 'Бургеры',
  //   image:
  //     'https://mcdonalds.ru/resize/500x500//upload/iblock/bf7/0000_DblRoyal_BB_1500x1500-_3_-_1_.png',
  //   price: 219,
  //   ccal: 732,
  //   ingredients: [
  //     'Говядина',
  //     'Соус с "Дымком"',
  //     'Сыр',
  //     'Помидоры',
  //     'Салат',
  //     'Лук',
  //     'Булочка',
  //     'Кунжут',
  //   ],
  // },
  // {
  //   id: 4,
  //   title: 'Куриные крылышки',
  //   category: 'Стартеры',
  //   image:
  //     'https://mcdonalds.ru/resize/500x500//upload/iblock/480/0000_Chicken_wings_new_7_1500x1500_min.png',
  //   price: 309,
  //   ccal: 973,
  //   ingredients: ['Курица'],
  // },
  // {
  //   id: 5,
  //   title: 'Яблочный сок',
  //   category: 'Холодные напитки',
  //   image:
  //     'https://mcdonalds.ru/resize/500x500//upload/iblock/50b/YAblochnyy-sok-0.4.png',
  //   price: 80,
  //   ccal: 158,
  //   ingredients: ['Яблоки'],
  // },
  // {
  //   id: 6,
  //   title: 'Айриш Капучино',
  //   category: 'Горячие напитки',
  //   image:
  //     'https://mcdonalds.ru/resize/500x500//upload/iblock/985/0000_Irish_Cappucino_03_1500x1500_min.png',
  //   price: 128,
  //   ccal: 175,
  //   ingredients: ['Кофе', 'Сироп со вкусом ликёра'],
  // },
  // {
  //   id: 7,
  //   title: 'Пирожок лесные ягоды крем-чиз',
  //   category: 'Десерты',
  //   image:
  //     'https://mcdonalds.ru/resize/500x500//upload/iblock/59e/0000_Pie_berry_cheese_1500x1500_min.png',
  //   price: 59,
  //   ccal: 285,
  //   ingredients: ['Лесные ягоды', 'Сливочный сыр'],
  // },
  // {
  //   id: 8,
  //   title: 'Додо Микс',
  //   category: 'Пицца',
  //   image:
  //     'https://mcdonalds.ru/resize/500x500//upload/iblock/480/0000_Chicken_wings_new_7_1500x1500_min.png',
  //   price: 695,
  //   ccal: 1755,
  //   ingredients: [
  //     'Бекон',
  //     'Цыпленок',
  //     'Ветчина',
  //     'Сыр блю чиз',
  //     'Сыры чеддер и пармезан',
  //     'Соус Песто',
  //   ],
  // },
  categories: null,
  your_booking_id: null,
  bookings: [
    {
      id: 1,
      name: 'Чертила',
      date: '123',
      persons: 1,
    },
  ],
})

export const getters = {
  getYourBooking: (state) => {
    return state.bookings.find(
      (booking) => booking.id === state.your_booking_id
    )
  },
}

export const actions = {
  async getMenu({ commit }) {
    const menu = await this.$axios.$get(
      `${this.$axios.defaults.baseURL}/menuItems?projection=withCategory`
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
  SET_MENU(state, menu) {
    state.menu = menu
  },
  SET_CATEGORIES(state, categories) {
    state.categories = categories
  },
  CREATE_BOOKING(state, bookingInfo) {
    state.bookings.push({ ...bookingInfo })
    state.your_booking_id = bookingInfo.id
  },
  CANCEL_BOOKING(state, bookingID) {
    state.bookings.splice(
      state.bookings.findIndex((booking) => booking.id === bookingID),
      1
    )
  },
  REMOVE_YOUR_BOOKING(state) {
    state.your_booking_id = null
  },
}
