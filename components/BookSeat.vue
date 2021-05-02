<template>
  <div>
    <h1>Забронировать столик</h1>
    <div class="bg-gray-700 w-full flex flex-col p-12 rounded-2xl mt-4">
      <div class="mb-8">
        <h2>Введите ваше имя</h2>
        <input v-model="bookingInfo.name" type="text" class="mt-4" />
      </div>
      <div>
        <h2>Выберите время</h2>
        <div v-if="timeList.morning.length > 0" class="morning">
          <h3>🌅 Утро</h3>
          <div class="flex flex-wrap mt-1">
            <div
              v-for="time in timeList.morning"
              :key="time"
              class="time flex items-center justify-center bg-gray-600 text-gray-400 rounded-full text-sm py-1 px-2 mt-2 mr-2 cursor-pointer transition duration-200 ease-in-out transform hover:scale-110"
              :class="{ selected: time == bookingInfo.date }"
              @click="bookingInfo.date = time"
            >
              {{ time }}
            </div>
          </div>
        </div>
        <div v-if="timeList.day.length > 0" class="day">
          <h3>🏞 День</h3>
          <div class="flex flex-wrap mt-1">
            <div
              v-for="time in timeList.day"
              :key="time"
              class="time flex items-center justify-center bg-gray-600 text-gray-400 rounded-full text-sm py-1 px-2 mt-2 mr-2 cursor-pointer transition duration-200 ease-in-out transform hover:scale-110"
              :class="{ selected: time == bookingInfo.date }"
              @click="bookingInfo.date = time"
            >
              {{ time }}
            </div>
          </div>
        </div>
        <div v-if="timeList.evening.length > 0" class="evening">
          <h3>🌃 Вечер</h3>
          <div class="flex flex-wrap mt-1">
            <div
              v-for="time in timeList.evening"
              :key="time"
              class="time flex items-center justify-center bg-gray-600 text-gray-400 rounded-full text-sm py-1 px-2 mt-2 mr-2 cursor-pointer transition duration-200 ease-in-out transform hover:scale-110"
              :class="{ selected: time == bookingInfo.date }"
              @click="bookingInfo.date = time"
            >
              {{ time }}
            </div>
          </div>
        </div>
      </div>
      <div class="mt-8 mb-12">
        <h2>Введите количество персон</h2>
        <div class="flex mt-4">
          <input
            v-model="bookingInfo.persons"
            class="mr-4 w-16"
            type="text"
            @input="checkPersons"
          />
          <div
            v-if="parseInt(bookingInfo.persons) > 0"
            class="flex flex-wrap items-center w-28"
          >
            <img
              v-for="person in parseInt(bookingInfo.persons)"
              :key="person"
              src="~assets/icn_person.svg"
              alt=""
              class="person-icon mr-2 w-3 mr-2"
            />
          </div>
        </div>
      </div>
      <button class="default" @click="createBooking">Забронировать</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      bookingInfo: {
        name: '',
        date: '',
        persons: '',
      },
    }
  },
  computed: {
    timeList: () => {
      let morning = ['9:00', '9:30', '10:00', '10:30', '11:00', '11:30']
      for (const time of morning) {
        if (new Date().getHours() >= time.split(':')[0]) {
          morning = morning.filter((value) => value !== time)
        }
      }
      let day = [
        '12:00',
        '12:30',
        '13:00',
        '13:30',
        '14:00',
        '14:30',
        '15:00',
        '15:30',
        '16:00',
        '16:30',
        '17:00',
        '17:30',
        '18:00',
        '18:30',
        '19:00',
        '19:30',
      ]
      for (const time of day) {
        if (new Date().getHours() >= time.split(':')[0]) {
          day = day.filter((value) => value !== time)
        }
      }
      let evening = [
        '20:00',
        '20:30',
        '21:00',
        '21:30',
        '22:00',
        '22:30',
        '23:00',
        '23:30',
      ]
      for (const time of evening) {
        if (new Date().getHours() >= time.split(':')[0]) {
          evening = evening.filter((value) => value !== time)
        }
      }
      const list = { morning, day, evening }

      return list
    },
  },
  methods: {
    checkPersons() {
      if (this.bookingInfo.persons > 10) {
        this.bookingInfo.persons = 10
      }
      if (isNaN(Number(this.bookingInfo.persons))) {
        this.bookingInfo.persons = ''
      }
    },
    createBooking() {
      const date = new Date()
      date.setHours(
        this.bookingInfo.date.split(':')[0],
        this.bookingInfo.date.split(':')[1],
        0
      )
      this.bookingInfo.date = date.toString()
      this.$store.dispatch('bookings/createBooking', this.bookingInfo)
    },
  },
}
</script>

<style lang="scss" scoped>
h3 {
  @apply mt-6;
}

.time.selected {
  @apply bg-green-500 text-white cursor-default scale-100;
}

.person-icon {
  height: fit-content;
}
</style>
