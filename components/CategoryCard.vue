<template>
  <nuxt-link
    class="category-card"
    :to="`/menu?scroll=${category.title.replace(/\s/g, '')}`"
  >
    <img :src="category.image" :alt="category.title" />
    <h4>{{ category.title }}</h4>
  </nuxt-link>
</template>

<script>
export default {
  props: {
    category: {
      type: Object,
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
