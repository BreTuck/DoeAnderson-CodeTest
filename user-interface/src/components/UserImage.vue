<template>
  <div class="hello">
    <img :src="imageSrc" :alt="imageAlt">
  </div>
</template>

<script>
export default {
  name: 'UserImage',
  props: {
    imageAlt: String,
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
