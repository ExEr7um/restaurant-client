<template>
  <div class="categories">
    <h1>Категории</h1>
    <div
      class="categories-list grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4"
    >
      <CategoryCard
        v-for="category in categories"
        :key="category"
        :category="category"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    categories: {
      type: String,
      default: null,
    },
  },
}
</script>

<style lang="scss" scoped>
.categories {
  @apply mt-12;
}
</style>
