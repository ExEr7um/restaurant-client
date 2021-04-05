<template>
  <div class="your-booking">
    <h1>Ваше бронирование</h1>
    <div class="your-booking-container">
      <img src="~assets/icn_clock.svg" alt="" />
      <h2>
        {{
          `${yourBooking.date.toLocaleDateString()} в ${yourBooking.date.toLocaleTimeString(
            'ru-RU',
            { hour: '2-digit', minute: '2-digit' }
          )}`
        }}
      </h2>
      <h5>Количество гостей: {{ yourBooking.persons }}</h5>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    yourBooking: {
      type: Object,
      default: null,
    },
  },
}
</script>

<style lang="scss" scoped>
.your-booking .your-booking-container {
  @apply bg-gray-700 w-full flex flex-col items-center p-12 rounded-2xl mt-4;

  img {
    @apply w-32 mb-4;
  }

  h2 {
    @apply mb-2;
  }
}
</style>
