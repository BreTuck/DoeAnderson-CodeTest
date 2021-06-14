<template>
  <div class="hello">
    <img v-bind:src="imageSrc" :alt="`${imageAlt.first} ${imageAlt.last}`">
  </div>
</template>

<script>
export default {
  name: 'UserImage',
  props: {
    imageAlt: Object,
    imageSrc: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
img {
  border-radius: 50%;
  border: 5px #333 solid;
  margin-bottom: 1rem;
}
</style>
