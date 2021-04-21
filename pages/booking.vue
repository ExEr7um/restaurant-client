<template>
  <div class="booking">
    <YourBooking
      v-if="bookings.your_booking != null"
      :your-booking="bookings.your_booking"
    />
    <BookSeat v-else />
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  head() {
    return {
      title: 'Бронирование | Мой ресторан',
    }
  },
  computed: {
    ...mapState(['bookings']),
  },
  mounted() {
    this.$store.dispatch('bookings/getYourBooking')
  },
}
</script>

<style lang="scss" scoped></style>
