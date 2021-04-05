<template>
  <div class="booking">
    <YourBooking :your-booking="getYourBooking" />
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
