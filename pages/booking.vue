<template>
  <div class="booking">
    <YourBooking v-if="getYourBooking != null" :your-booking="getYourBooking" />
    <BookSeat v-else />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  head() {
    return {
      title: 'Бронирование | Мой ресторан',
    }
  },
  computed: {
    ...mapGetters(['getYourBooking']),
  },
}
</script>

<style lang="scss" scoped></style>
