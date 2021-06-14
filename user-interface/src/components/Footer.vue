<template>
    <div>
        <a href="https://www.facebook.com" target="_blank"><i class="fab fa-facebook-f fa-lg"></i></a>
        <a href="https://www.twitter.com" target="_blank"><i class="fab fa-twitter fa-lg"></i></a>
        <a href="https://www.instagram.com" target="_blank"><i class="fab fa-instagram fa-lg"></i></a>
    </div>
</template>

<script>
export default {
    name: 'Footer'
}
</script>

<style scoped>
    div {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        border-top: solid black 5px;
        padding: 2.5% 0 2.5% 0;
    }
    div a { 
        text-decoration: none;
        color: black;
    }
</style>