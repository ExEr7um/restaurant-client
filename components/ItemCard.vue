<template>
  <div class="item">
    <div class="image">
      <img :src="item.image" class="image-shadow" />
      <img :src="item.image" :alt="item.title" class="image-original" />
    </div>
    <div class="info">
      <h3>{{ item.title }}</h3>
      <div class="price">
        <h2>{{ item.price | currency }}</h2>
        <span>{{ item.ccal }} ккал</span>
      </div>
      <div class="ingredients">
        <div
          v-for="ingredient in item.ingredients.split(', ')"
          :key="ingredient"
          class="ingredient"
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
.item {
  @apply flex flex-col items-center;

  .image {
    @apply relative max-w-max;

    img {
      @apply max-h-64;

      &.image-shadow {
        z-index: 1;
        filter: blur(10px);
        opacity: 0.5;
      }

      &.image-original {
        @apply absolute -top-2;
      }
    }
  }

  .info {
    @apply bg-gray-700 w-full p-5 pt-16 rounded-2xl -mt-20 shadow-xl;

    .price {
      @apply flex items-end;

      span {
        @apply text-gray-500 text-sm ml-2;
      }
    }

    .ingredients {
      @apply flex flex-wrap mt-2;

      .ingredient {
        @apply flex items-center justify-center bg-gray-600 text-gray-400 rounded-full text-sm py-1 px-2 mt-2 mr-2;
      }
    }
  }
}
</style>
