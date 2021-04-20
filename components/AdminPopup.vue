<template>
  <div class="popup-background">
    <div class="popup">
      <div class="head">
        <h2>{{ popup.popup.title }}</h2>
        <button class="squared" @click="$emit('close-popup')">
          <img src="~assets/icn_cross.svg" alt="Отменить" />
        </button>
      </div>
      <div
        v-for="field in popup.popup.fields"
        :id="field.id"
        :key="field.id"
        class="popup-field"
      >
        <h4>{{ field.title }}</h4>
        <input
          v-model="popupData[field.id]"
          type="text"
          :placeholder="field.placeholder"
        />
      </div>
      <button class="default" @click="save">Сохранить</button>
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
      if (Object.values(this.popupData).includes(null)) {
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
  @apply fixed w-full h-full bg-opacity-60 bg-gray-900 z-10 flex items-center justify-center top-0 left-0;

  backdrop-filter: blur(10px);

  .popup {
    @apply bg-gray-700 p-12 rounded-3xl;

    .head {
      @apply mb-5 flex items-center justify-between;

      button.squared {
        @apply bg-gray-600;
      }
    }

    .popup-field {
      @apply my-3;

      h4 {
        @apply mb-1;
      }

      input {
        @apply w-72;
      }

      &#price,
      &#ccal {
        input {
          @apply w-1/2;
        }
      }
    }

    button.default {
      @apply mt-8;
    }
  }
}
</style>
