<template>
  <div class="menu-container">
    <h2>Меню</h2>
    <div class="menu background-container">
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
            <td class="actions">
              <div class="buttons">
                <button class="squared">
                  <img src="~assets/icn_pencil.svg" alt="Изменить" />
                </button>
                <button
                  class="squared"
                  @click="$store.commit('REMOVE_MENU_ITEM', item.id)"
                >
                  <img src="~assets/icn_trash.svg" alt="Отменить" />
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <button class="default">Добавить</button>
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
}
</script>

<style lang="scss" scoped>
.menu-container {
  h2 {
    @apply mt-8 mb-4;
  }

  button.default {
    @apply mt-6;
  }
}
</style>
