<template>
  <div class="container">
    <UserImage imageSrc='https://randomuser.me/api/portraits/men/11.jpg'/>
    <ProfileToggle />
    <ProfileText heading='User Contact' body='Lots, Lots \n and more loads/n of text' />
    <ContactForm />
    <Footer />
  </div>
</template>

<script>
import UserImage from './components/UserImage.vue'
import ProfileToggle from './components/ProfileToggle.vue'
import ProfileText from './components/ProfileText.vue'
import ContactForm from './components/ContactForm.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    UserImage,
    ProfileToggle,
    ProfileText,
    ContactForm,
    Footer
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400&display=swap');

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.container {
  display: flex;
  flex-direction: row;
}
</style>
