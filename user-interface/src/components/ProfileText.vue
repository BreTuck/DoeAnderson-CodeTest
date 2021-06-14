<template>
  <div>
    <h3>{{ heading }}</h3>
    <p>{{ body }}</p>
  </div>
</template>

<script>
export default {
  name: 'ProfileText',
  props: {
    heading: String,
    body: String
  }
}
</script>

<style scoped>
  div {
    display: flex;
    flex-direction: column;
  }
</style>