<template>
  <div class="flex flex-col items-center">
    <div class="relative max-w-max">
      <img :src="item.image" class="w-64 h-64 image-shadow" />
      <img
        :src="item.image"
        :alt="item.title"
        class="w-64 h-64 absolute -top-2"
      />
    </div>
    <div class="bg-gray-700 w-full p-5 pt-16 rounded-2xl -mt-20 shadow-xl">
      <h3>{{ item.title }}</h3>
      <div class="flex items-end">
        <h2>{{ item.price | currency }}</h2>
        <span class="text-gray-500 text-sm ml-2">{{ item.ccal }} ккал</span>
      </div>
      <div class="flex flex-wrap mt-2">
        <div
          v-for="ingredient in item.ingredients.split(', ')"
          :key="ingredient"
          class="flex items-center justify-center bg-gray-600 text-gray-400 rounded-full text-sm py-1 px-2 mt-2 mr-2"
        >
          {{ ingredient }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      default: null,
    },
  },
}
</script>

<style lang="scss" scoped>
.image-shadow {
  z-index: 1;
  filter: blur(10px);
  opacity: 0.5;
}
</style>
