<template>
  <div class="flex items-center justify-center mt-32">
    <div class="flex items-center">
      <div class="info">
        <h1>Василий Кузин</h1>
        <h3 class="text-gray-400 mt-2">ПИ19-3</h3>
        <div class="mt-8">
          <h2>Исходный код</h2>
          <div class="flex mt-2">
            <a
              href="https://github.com/ExEr7um/restaurant-client"
              target="_blank"
            >
              <button class="icon mr-4">
                <img src="~assets/icn_github.svg" alt="" />
                Клиент
              </button>
            </a>
            <a href="https://github.com/ExEr7um/restaurant-api" target="_blank">
              <button class="icon mr-4">
                <img src="~assets/icn_github.svg" alt="" />
                Сервер
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: 'Об авторе | Мой ресторан',
    }
  },
}
</script>
