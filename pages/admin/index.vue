<template>
  <div class="admin">
    <h1>Панель управления</h1>
    <AdminBookings :bookings="bookings" />
    <AdminMenu :menu="menu" />
    <AdminCategories :categories="categories" />
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  head() {
    return {
      title: 'Панель управления | Мой ресторан',
    }
  },
  computed: {
    ...mapState(['bookings', 'menu', 'categories']),
  },
}
</script>

<style lang="scss" scoped></style>
