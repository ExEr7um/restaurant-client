<template>
  <header class="flex items-center justify-between h-24 mb-2">
    <Navigation
      :navigation-items="[
        { title: 'Главная', class: 'home', to: '/' },
        { title: 'Меню', to: '/menu' },
        { title: 'Бронирование', to: '/booking' },
        { title: 'Об авторе', to: '/about' },
        { title: 'Панель управления', to: '/admin' },
      ]"
    />
    <nuxt-link to="/booking">
      <button class="default">Забронировать столик</button>
    </nuxt-link>
  </header>
</template>

<script>
export default {}
</script>
