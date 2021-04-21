<template>
  <div class="menu">
    <h1>Меню</h1>
    <nav>
      <a
        v-for="category in categories"
        :key="category.id"
        v-scroll-to="`#${category.title.replace(/\s/g, '')}`"
        href="#"
      >
        {{ category.title }}
      </a>
    </nav>
    <CategoryItems
      v-for="category in categories"
      :key="category.id"
      :items="menu.filter((item) => item.category == category.title)"
      :category="category"
    />
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  head() {
    return {
      title: 'Меню | Мой ресторан',
    }
  },
  computed: {
    ...mapState(['menu', 'categories']),
  },
  mounted() {
    this.$store.dispatch('getMenu')
    this.$store.dispatch('getCategories')
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
