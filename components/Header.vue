<template>
  <header>
    <nav>
      <nuxt-link to="/">
        Главная
        <div class="indicator"></div>
      </nuxt-link>
      <nuxt-link to="/menu">
        Меню
        <div class="indicator"></div>
      </nuxt-link>
      <nuxt-link to="/booking">
        Бронирование
        <div class="indicator"></div>
      </nuxt-link>
      <nuxt-link to="/about">
        Об авторе
        <div class="indicator"></div>
      </nuxt-link>
      <nuxt-link to="/admin">
        Панель управления
        <div class="indicator"></div>
      </nuxt-link>
    </nav>
    <nuxt-link to="/booking">
      <button class="default">Забронировать столик</button>
    </nuxt-link>
  </header>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
header {
  @apply flex items-center justify-between h-24 mb-2;

  nav {
    @apply flex;

    a {
      @apply text-gray-500 mr-6 flex flex-col items-center relative transition duration-200 ease-in-out;

      &.nuxt-link-exact-active {
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
}
</style>
