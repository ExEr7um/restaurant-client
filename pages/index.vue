<template>
  <div>
    <RecentAdditions :menu="menu.menu" />
    <Categories :categories="categories.categories" />
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  head() {
    return {
      title: 'Главная | Мой ресторан',
    }
  },
  computed: {
    ...mapState(['menu', 'categories']),
  },
  mounted() {
    this.$store.dispatch('menu/getMenu')
    this.$store.dispatch('categories/getCategories')
  },
}
</script>

<style lang="scss">
body {
  @apply bg-gray-800;
}

// СТИЛИ БЛОКОВ
button {
  @apply transition duration-200 ease-in-out flex items-center justify-center;

  &.default {
    @apply bg-green-800 text-green-400 px-6 py-3 rounded-2xl;

    width: max-content;
  }

  &.destructive {
    @apply bg-gray-600 text-red-400 px-6 py-3 rounded-2xl;
  }

  &.squared {
    @apply w-8 h-8 rounded-xl;
  }

  &:hover {
    @apply transform scale-110;
  }
}

input {
  @apply bg-gray-600 text-white px-4 py-2 rounded-lg outline-none border transition duration-200 ease-in-out border-green-500 border-opacity-0;

  &:focus {
    @apply border-opacity-100;
  }
}

.background-container {
  @apply bg-gray-700 w-full flex flex-col p-12 rounded-2xl;
}

table {
  th,
  td {
    @apply border border-gray-600 py-2 px-4 text-white;
  }

  .actions .buttons {
    @apply flex justify-between w-full;

    button.squared {
      @apply bg-gray-600 text-red-400;
    }
  }
}

// ТЕКСТОВЫЕ СТИЛИ
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
