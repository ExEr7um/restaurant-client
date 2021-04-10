<template>
  <div class="your-booking">
    <h1>Ваше бронирование</h1>
    <div class="your-booking-container background-container">
      <img src="~assets/icn_clock.svg" alt="" />
      <h2>
        {{
          `${new Date(yourBooking.date).toLocaleDateString()} в ${new Date(
            yourBooking.date
          ).toLocaleTimeString('ru-RU', {
            hour: '2-digit',
            minute: '2-digit',
          })}`
        }}
      </h2>
      <h5>Количество гостей: {{ yourBooking.persons }}</h5>
      <button
        class="destructive"
        @click="$store.commit('CANCEL_BOOKING', yourBooking.id)"
      >
        Отменить бронирование
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    yourBooking: {
      type: String,
      default: null,
    },
  },
}
</script>

<style lang="scss" scoped>
.your-booking {
  @apply mb-8;

  .your-booking-container {
    @apply items-center mt-4;

    img {
      @apply w-32 mb-4;
    }

    h5 {
      @apply mt-2 mb-4;
    }
  }
}
</style>
