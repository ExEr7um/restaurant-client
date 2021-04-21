<template>
  <div class="recent-additions">
    <h1>Новинки</h1>
    <div
      class="items-list grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
    >
      <ItemCard
        v-for="item in menu.slice(-4).reverse()"
        :key="item.id"
        :item="item"
      />
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

<style lang="scss" scoped></style>
