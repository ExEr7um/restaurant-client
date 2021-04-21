<template>
  <div class="bookings-container">
    <h2>Текущие бронирования</h2>
    <div class="bookings background-container">
      <table class="table-auto">
        <thead>
          <tr>
            <th class="w-1/2">Имя</th>
            <th class="w-1/4">Время</th>
            <th class="w-1/4">Кол-во персон</th>
            <th>Действия</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="booking in bookings" :key="booking.id">
            <td class="w-1/2">
              {{ booking.name }}
            </td>
            <td class="w-1/4">
              {{
                `${new Date(booking.date).toLocaleDateString()} в ${new Date(
                  booking.date
                ).toLocaleTimeString('ru-RU', {
                  hour: '2-digit',
                  minute: '2-digit',
                })}`
              }}
            </td>
            <td class="w-1/4">
              {{ booking.persons }}
            </td>
            <td class="actions">
              <div class="buttons">
                <button
                  class="squared"
                  @click="
                    $store.dispatch(
                      'bookings/removeBooking',
                      booking._links.self.href
                    )
                  "
                >
                  <img src="~assets/icn_trash.svg" alt="Отменить" />
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    bookings: {
      type: Array,
      default: null,
    },
  },
}
</script>

<style lang="scss" scoped>
.bookings-container h2 {
  @apply mt-8 mb-4;
}
</style>
