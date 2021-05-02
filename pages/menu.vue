<template>
  <div>
    <h1 class="mb-3">Меню</h1>
    <nav class="flex items-center mb-8">
      <a
        v-for="category in categories.categories"
        :id="`${category.title.replace(/\s/g, '')}-link`"
        :key="category.id"
        v-scroll-to="`#${category.title.replace(/\s/g, '')}`"
        href="#"
        class="text-gray-500 mr-4 transition duration-200 ease-in-out hover:text-gray-400"
      >
        {{ category.title }}
      </a>
    </nav>
    <CategoryItems
      v-for="category in categories.categories"
      :key="category.id"
      :items="menu.menu.filter((item) => item.category == category.title)"
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
    this.$store.dispatch('menu/getMenu')
    this.$store.dispatch('categories/getCategories')
    if (Object.keys(this.$route.query).length) {
      document.getElementById(`${this.$route.query.scroll}-link`).click()
    }
  },
}
</script>
