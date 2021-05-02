<template>
  <nav class="flex">
    <nuxt-link
      v-for="item in navigationItems"
      :key="item.title"
      :to="item.to"
      :class="item.class"
      class="text-gray-500 mr-6 flex flex-col items-center relative transition duration-200 ease-in-out hover:text-gray-400"
    >
      {{ item.title }}
      <div
        class="indicator w-4 rounded-full bg-green-500 hidden absolute"
      ></div>
    </nuxt-link>
  </nav>
</template>

<script>
export default {
  props: {
    navigationItems: {
      type: Array,
      default: null,
    },
  },
}
</script>

<style lang="scss" scoped>
nav {
  .nuxt-link-active:not(.home) {
    @apply text-gray-300 cursor-default;

    .indicator {
      @apply block;
    }

    &:hover {
      @apply text-gray-300;
    }
  }

  .home.nuxt-link-exact-active {
    @apply text-gray-300 cursor-default;

    .indicator {
      @apply block;
    }

    &:hover {
      @apply text-gray-300;
    }
  }

  .indicator {
    height: 0.125rem;
    top: 1.75rem;
  }
}
</style>
