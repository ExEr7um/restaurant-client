<template>
  <div class="about">
    <div class="about-container">
      <div class="info">
        <h1>Василий Кузин</h1>
        <h3>ПИ19-3</h3>
        <div class="code">
          <h2>Исходный код</h2>
          <div class="code-buttons">
            <a
              href="https://github.com/ExEr7um/restaurant-client"
              target="_blank"
            >
              <button class="icon">
                <img src="~assets/icn_github.svg" alt="" />
                Клиент
              </button>
            </a>
            <a href="https://github.com/ExEr7um/restaurant-api" target="_blank">
              <button class="icon">
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
export default {}
</script>

<style lang="scss" scoped>
.about {
  @apply flex items-center justify-center mt-32;

  .about-container {
    @apply flex items-center;

    .info {
      h3 {
        @apply text-gray-400 mt-2;
      }

      .code {
        @apply mt-8;

        .code-buttons {
          @apply flex mt-2;

          button {
            @apply mr-4;
          }
        }
      }
    }
  }
}
</style>
