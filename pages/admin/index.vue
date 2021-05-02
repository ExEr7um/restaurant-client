<template>
  <div>
    <h1>Панель управления</h1>
    <AdminBookings :bookings="bookings.bookings" />
    <AdminMenu :menu="menu.menu" @open-menu-popup="popup = $event" />
    <AdminCategories
      :categories="categories.categories"
      @open-category-popup="popup = $event"
    />
    <AdminPopup
      v-if="Object.keys(popup).length !== 0"
      :popup="popup"
      @close-popup="popup = {}"
    />
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data() {
    return {
      popup: {},
    }
  },
  head() {
    return {
      title: 'Панель управления | Мой ресторан',
    }
  },
  computed: {
    ...mapState(['bookings', 'menu', 'categories']),
  },
  mounted() {
    this.$store.dispatch('bookings/getBookings')
    this.$store.dispatch('menu/getMenu')
    this.$store.dispatch('categories/getCategories')
  },
}
</script>
