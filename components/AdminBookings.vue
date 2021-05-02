<template>
  <div>
    <h2 class="mt-8 mb-4">Текущие бронирования</h2>
    <div class="background-container">
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
            <td>
              <div class="flex justify-between w-full">
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
