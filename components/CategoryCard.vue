<template>
  <div class="category-card">
    <img :src="category.image" :alt="category.title" />
    <h4>{{ category.title }}</h4>
  </div>
</template>

<script>
export default {
  props: {
    category: {
      type: String,
      default: null,
    },
  },
}
</script>

<style lang="scss" scoped>
.category-card {
  @apply flex flex-col items-center bg-gray-700 rounded-2xl py-8 shadow-xl text-center;

  img {
    @apply max-w-sm max-h-24 mb-4;
  }
}
</style>
