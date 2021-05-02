<template>
  <nav>
    <nuxt-link
      v-for="item in navigationItems"
      :key="item.title"
      :to="item.to"
      :class="item.class"
    >
      {{ item.title }}
      <div class="indicator"></div>
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
  @apply flex;

  a {
    @apply text-gray-500 mr-6 flex flex-col items-center relative transition duration-200 ease-in-out;

    &.nuxt-link-active:not(.home) {
      @apply text-gray-300 cursor-default;

      .indicator {
        @apply block;
      }

      &:hover {
        @apply text-gray-300;
      }
    }

    &.home.nuxt-link-exact-active {
      @apply text-gray-300 cursor-default;

      .indicator {
        @apply block;
      }

      &:hover {
        @apply text-gray-300;
      }
    }

    .indicator {
      @apply w-4 rounded-full bg-green-500 hidden absolute;

      height: 0.125rem;
      top: 1.75rem;
    }

    &:hover {
      @apply text-gray-400;
    }
  }
}
</style>
