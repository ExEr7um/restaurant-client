<template>
  <div class="menu">
    <h1>Меню</h1>
    <nav>
      <a
        v-for="category in getCategories"
        :key="category.id"
        v-scroll-to="`#${category.id}`"
        href="#"
      >
        {{ category.title }}
      </a>
    </nav>
    <CategoryItems
      v-for="category in getCategories"
      :key="category.id"
      :items="getMenu.filter((item) => item.category == category.title)"
      :category="category"
    />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  head() {
    return {
      title: 'Меню | Мой ресторан',
    }
  },
  computed: {
    ...mapGetters(['getMenu', 'getCategories']),
  },
}
</script>

<style lang="scss" scoped>
.menu {
  h1 {
    @apply mb-3;
  }

  nav {
    @apply flex items-center mb-8;

    a {
      @apply text-gray-500 mr-4 transition duration-200 ease-in-out;

      &:hover {
        @apply text-gray-400;
      }
    }
  }
}
</style>
