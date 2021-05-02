<template>
  <div class="mt-12">
    <h1 class="mb-4">Категории</h1>
    <div
      class="categories-list grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4"
    >
      <CategoryCard
        v-for="category in categories"
        :key="category.id"
        :category="category"
      />
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
}
</script>
