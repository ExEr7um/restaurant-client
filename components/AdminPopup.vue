<template>
  <div
    class="popup-background fixed w-full h-full bg-opacity-60 bg-gray-900 z-10 flex items-center justify-center top-0 left-0"
  >
    <div class="bg-gray-700 p-12 rounded-3xl">
      <div class="mb-5 flex items-center justify-between">
        <h2>{{ popup.popup.title }}</h2>
        <button class="squared" @click="$emit('close-popup')">
          <img src="~assets/icn_cross.svg" alt="Отменить" />
        </button>
      </div>
      <div
        v-for="field in popup.popup.fields"
        :id="field.id"
        :key="field.id"
        class="popup-field my-3"
      >
        <h4 class="mb-1">{{ field.title }}</h4>
        <input
          v-model="popupData[field.id]"
          type="text"
          :placeholder="field.placeholder"
          class="w-72"
        />
      </div>
      <button class="default mt-8" @click="save">Сохранить</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    popup: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      popupData: Object.assign({}, this.popup.info),
    }
  },
  methods: {
    save() {
      if (
        Object.values(this.popupData).includes(null) ||
        Object.keys(this.popupData).length === 0
      ) {
        alert('Заполните все поля!')
      } else {
        this.$store.dispatch(this.popup.popup.vuexCommand, this.popupData)
        this.$emit('close-popup')
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.popup-background {
  backdrop-filter: blur(10px);

  .popup-field {
    &#price,
    &#ccal {
      input {
        @apply w-1/2;
      }
    }
  }
}
</style>
