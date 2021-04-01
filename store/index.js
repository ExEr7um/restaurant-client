export const state = () => ({
  menu: [
    {
      id: 1,
      title: 'Биг Мак',
      category: 'Бургеры',
      image: 'http://assets.stickpng.com/images/5882482de81acb96424ffaac.png',
      price: 135,
      ccal: 522,
      ingredients: [
        'Говядина',
        'Специальный соус',
        'Сыр',
        'Огурцы',
        'Салат',
        'Лук',
        'Булочка',
        'Кунжут',
      ],
    },
    {
      id: 2,
      title: 'Биг Тейсти',
      category: 'Бургеры',
      image:
        'https://mcdonalds.ru/resize/-x1020/upload/iblock/e28/2004_BigTasty_1500x1500-_3_-_1_.png',
      price: 249,
      ccal: 812,
      ingredients: [
        'Говядина',
        'Соус с "Дымком"',
        'Сыр',
        'Помидоры',
        'Салат',
        'Лук',
        'Булочка',
        'Кунжут',
      ],
    },
    {
      id: 3,
      title: 'Двойной роял',
      category: 'Бургеры',
      image:
        'https://mcdonalds.ru/resize/500x500//upload/iblock/bf7/0000_DblRoyal_BB_1500x1500-_3_-_1_.png',
      price: 219,
      ccal: 732,
      ingredients: [
        'Говядина',
        'Соус с "Дымком"',
        'Сыр',
        'Помидоры',
        'Салат',
        'Лук',
        'Булочка',
        'Кунжут',
      ],
    },
    {
      id: 4,
      title: 'Куриные крылышки',
      category: 'Стартеры',
      image:
        'https://mcdonalds.ru/resize/500x500//upload/iblock/480/0000_Chicken_wings_new_7_1500x1500_min.png',
      price: 309,
      ccal: 973,
      ingredients: ['Курица'],
    },
  ],
  categories: ['Бургеры', 'Стартеры'],
})

export const mutations = {
  addMenuItem(state, item) {
    state.menu.push(item)
  },
}

export const getters = {
  getMenu: (state) => {
    return state.menu
  },
  getCategories: (state) => {
    return state.categories
  },
}
