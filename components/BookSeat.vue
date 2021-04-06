<template>
  <div class="book-seat">
    <h1>Забронировать столик</h1>
    <div class="book-seat-container">
      <div class="name-input">
        <h2>Введите ваше имя</h2>
        <input v-model="bookingInfo.name" type="text" />
      </div>
      <div class="time-select">
        <h2>Выберите время</h2>
        <div v-if="timeList.morning.length > 0" class="morning">
          <h3>🌅 Утро</h3>
          <div class="time-container">
            <div
              v-for="time in timeList.morning"
              :key="time"
              class="time"
              :class="{ selected: time == bookingInfo.selectedTime }"
              @click="bookingInfo.selectedTime = time"
            >
              {{ time }}
            </div>
          </div>
        </div>
        <div v-if="timeList.day.length > 0" class="day">
          <h3>🏞 День</h3>
          <div class="time-container">
            <div
              v-for="time in timeList.day"
              :key="time"
              class="time"
              :class="{ selected: time == bookingInfo.selectedTime }"
              @click="bookingInfo.selectedTime = time"
            >
              {{ time }}
            </div>
          </div>
        </div>
        <div v-if="timeList.evening.length > 0" class="evening">
          <h3>🌃 Вечер</h3>
          <div class="time-container">
            <div
              v-for="time in timeList.evening"
              :key="time"
              class="time"
              :class="{ selected: time == bookingInfo.selectedTime }"
              @click="bookingInfo.selectedTime = time"
            >
              {{ time }}
            </div>
          </div>
        </div>
      </div>
      <div class="persons-select">
        <h2>Введите количество персон</h2>
        <div class="persons-input">
          <input
            v-model="bookingInfo.persons"
            type="text"
            @input="checkPersons"
          />
          <div v-if="parseInt(bookingInfo.persons) > 0" class="persons-icons">
            <img
              v-for="person in parseInt(bookingInfo.persons)"
              :key="person"
              src="~assets/icn_person.svg"
              alt=""
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
        selectedTime: '',
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
        this.bookingInfo.selectedTime.split(':')[0],
        this.bookingInfo.selectedTime.split(':')[1],
        0
      )
      this.bookingInfo.selectedTime = date.toString()
      this.$store.commit('createBooking', this.bookingInfo)
    },
  },
}
</script>

<style lang="scss" scoped>
.book-seat .book-seat-container {
  @apply bg-gray-700 w-full flex flex-col p-12 rounded-2xl mt-4;

  h3 {
    @apply mt-6;
  }

  .name-input {
    @apply mb-8;

    input {
      @apply mt-4;
    }
  }

  .time-select .time-container {
    @apply flex flex-wrap mt-1;

    .time {
      @apply flex items-center justify-center bg-gray-600 text-gray-400 rounded-full text-sm py-1 px-2 mt-2 mr-2 cursor-pointer transition duration-200 ease-in-out;

      &:hover {
        @apply transform scale-110;
      }

      &.selected {
        @apply bg-green-500 text-white;
      }
    }
  }

  .persons-select {
    @apply mt-8 mb-12;

    .persons-input {
      @apply flex mt-4;

      input {
        @apply mr-4 w-16;
      }

      .persons-icons {
        @apply flex flex-wrap w-28;

        img {
          @apply mr-2 w-3 mr-2;
        }
      }
    }
  }
}
</style>
