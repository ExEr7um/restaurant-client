<template>
  <div>
    <h2 class="mt-8 mb-4">Категории</h2>
    <div class="background-container">
      <table class="table-auto">
        <thead>
          <tr>
            <th>Фото</th>
            <th class="w-full">Название</th>
            <th>Действия</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="category in categories" :key="category.id">
            <td>
              <img :src="category.image" />
            </td>
            <td class="w-full">
              {{ category.title }}
            </td>
            <td>
              <div class="flex justify-between w-full">
                <button
                  class="squared"
                  @click="
                    $emit('open-category-popup', {
                      info: category,
                      popup: {
                        title: 'Изменение категории',
                        vuexCommand: 'categories/editCategory',
                        fields,
                      },
                    })
                  "
                >
                  <img src="~assets/icn_pencil.svg" alt="Изменить" />
                </button>
                <button
                  class="squared"
                  @click="
                    $store.dispatch('categories/removeCategory', category.id)
                  "
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
          $emit('open-category-popup', {
            popup: {
              title: 'Создание категории',
              vuexCommand: 'categories/editCategory',
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
    categories: {
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
          id: 'image',
          title: 'Изображение',
          placeholder: 'Ссылка на изображение',
        },
      ],
    }
  },
}
</script>
