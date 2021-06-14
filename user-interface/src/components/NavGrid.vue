<template>
    <div>
        <!-- <i class="fa fa-address-book fa-2x"></i>
        <i class="fa fa-map fa-2x"></i>
        <i class="fa fa-envelope fa-2x"></i>
        <i class="fa fa-phone-alt fa-2x"></i>
        <i class="fa fa-birthday-cake fa-2x"></i>
        <i class="fa fa-key fa-2x"></i> -->
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
