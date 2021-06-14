<template>
    <div>
        <i :key="icon.id" v-for="icon in icons" :class="icon.name" @click="$emit('profile-toggle', icon)" ></i>
    </div>
</template>

<script>
export default {
  name: 'NavGrid',
  props: {
    icons: Array
  }
}
</script>

<style scoped>
  div {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 25px;
    grid-template-rows: 1fr 1fr 1fr;
  }
</style>
