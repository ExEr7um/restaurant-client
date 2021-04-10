<template>
  <div class="booking">
    <YourBooking v-if="getYourBooking != null" :your-booking="getYourBooking" />
    <BookSeat v-else />
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'

export default {
  head() {
    return {
      title: 'Бронирование | Мой ресторан',
    }
  },
  computed: {
    ...mapState(['bookings']),
    ...mapGetters(['getYourBooking']),
  },
  mounted() {
    if (this.getYourBooking === null) {
      this.$store.commit('REMOVE_YOUR_BOOKING')
    }
  },
}
</script>

<style lang="scss" scoped></style>
