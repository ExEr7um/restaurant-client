<template>
  <div>
    <h2 class="mt-8 mb-4">Меню</h2>
    <div class="background-container">
      <table class="table-auto">
        <thead>
          <tr>
            <th>Фото</th>
            <th class="w-1/3">Название</th>
            <th class="w-1/3">Категория</th>
            <th class="w-1/6">Цена</th>
            <th class="w-1/6">Калории</th>
            <th>Действия</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in menu" :key="item.id">
            <td>
              <img :src="item.image" />
            </td>
            <td class="w-1/3">
              {{ item.title }}
            </td>
            <td class="w-1/3">
              {{ item.category }}
            </td>
            <td class="w-1/8">
              {{ item.price }}
            </td>
            <td class="w-1/8">
              {{ item.ccal }}
            </td>
            <td>
              <div class="flex justify-between w-full">
                <button
                  class="squared"
                  @click="
                    $emit('open-menu-popup', {
                      info: item,
                      popup: {
                        title: 'Изменение товара',
                        vuexCommand: 'menu/editMenu',
                        fields,
                      },
                    })
                  "
                >
                  <img src="~assets/icn_pencil.svg" alt="Изменить" />
                </button>
                <button
                  class="squared"
                  @click="$store.dispatch('menu/removeMenuItem', item.id)"
                >
                  <img src="~assets/icn_trash.svg" alt="Отменить" />
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <button
        class="default mt-6"
        @click="
          $emit('open-menu-popup', {
            popup: {
              title: 'Создание товара',
              vuexCommand: 'menu/editMenu',
              fields,
            },
          })
        "
      >
        Добавить
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    menu: {
      type: Array,
      default: null,
    },
  },
  data() {
    return {
      fields: [
        {
          id: 'title',
          title: 'Название',
          placeholder: 'Введите название',
        },
        {
          id: 'category',
          title: 'Категория',
          placeholder: 'Введите категорию',
        },
        {
          id: 'image',
          title: 'Изображение',
          placeholder: 'Ссылка на изображение',
        },
        {
          id: 'ingredients',
          title: 'Ингридиенты',
          placeholder: 'Вводите через запятую',
        },
        {
          id: 'price',
          title: 'Цена',
          placeholder: 'Цена',
        },
        {
          id: 'ccal',
          title: 'Калории',
          placeholder: 'Калории',
        },
      ],
    }
  },
}
</script>
