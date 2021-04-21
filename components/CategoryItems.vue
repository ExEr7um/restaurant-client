<template>
  <div :id="category.title.replace(/\s/g, '')" class="category-items">
    <h2>{{ category.title }}</h2>
    <div
      class="items-list grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
    >
      <ItemCard v-for="item in items" :key="item.id" :item="item" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      default: null,
    },
    category: {
      type: Object,
      default: null,
    },
  },
}
</script>

<style lang="scss" scoped>
.category-items {
  @apply mb-12;
}
</style>
