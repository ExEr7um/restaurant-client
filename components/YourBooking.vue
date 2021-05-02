<template>
  <div class="mb-8">
    <h1>Ваше бронирование</h1>
    <div class="items-center mt-4 background-container">
      <img src="~assets/icn_clock.svg" alt="" class="w-32 mb-4" />
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
      <h5 class="mt-2 mb-4">Количество гостей: {{ yourBooking.persons }}</h5>
      <button
        class="destructive"
        @click="
          $store.dispatch(
            'bookings/removeBooking',
            yourBooking._links.self.href
          )
        "
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
      type: Object,
      default: null,
    },
  },
}
</script>
