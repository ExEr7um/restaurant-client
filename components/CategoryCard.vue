<template>
  <div>{{ category }}</div>
</template>

<script>
export default {
  props: {
    category: {
      type: String,
      default: null,
    },
  },
}
</script>

<style lang="scss" scoped></style>
