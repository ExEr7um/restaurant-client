<template>
  <div>
    <RecentAdditions :menu="getMenu.slice(4)" />
    <Categories :categories="getCategories" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  head() {
    return {
      title: 'Главная | Мой ресторан',
    }
  },
  computed: {
    ...mapGetters(['getMenu', 'getCategories']),
  },
}
</script>

<style lang="scss">
body {
  @apply bg-gray-800;
}

button {
  @apply transition duration-200 ease-in-out flex items-center;

  &.default {
    @apply bg-green-800 text-green-400 px-6 py-3 rounded-2xl;

    width: max-content;
  }

  &:hover {
    @apply transform scale-110;
  }
}

// Текстовые стили
h1 {
  @apply text-white text-3xl font-bold;
}

h2 {
  @apply text-white text-2xl font-bold;
}

h3 {
  @apply text-white text-xl font-bold;
}

h4 {
  @apply text-white text-lg font-bold;
}

h5 {
  @apply text-white font-bold text-gray-400;
}
</style>
