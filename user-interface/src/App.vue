<template>
  <div class="container">
      <div class="main">
        <UserImage :imageSrc="user.image" :imageAlt="user.name"/>
        <NavGrid @profile-toggle="profileToggle" :icons="icons"/>
      </div>
      <ProfileText :heading="textHeading" :body="textBody"/>
      <ContactForm />
    <Footer />
  </div>
</template>

<script>
import UserImage from './components/UserImage.vue'
import NavGrid from './components/NavGrid.vue'
import ProfileText from './components/ProfileText.vue'
import ContactForm from './components/ContactForm.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    UserImage,
    NavGrid,
    ProfileText,
    ContactForm,
    Footer
  },
  methods: {
    async getUser() {
      const res = await fetch('https://randomuser.me/api');
      const { results } = await res.json();
      console.log(results[0]);
      this.user = {
        name: results[0].name,
        birth_date: results[0].dob,
        location: results[0].location,
        phone: results[0].phone,
        email: results[0].email,
        image: results[0].picture.large,
        account: {
          credentials: results[0].login,
          info: results[0].registered
        }
      };
      console.log(this.user);
    },
    profileToggle(toggle) {
      this.textHeading = toggle.heading;
      this.textBody = toggle.body(this.user);
    }
  },
  data() { 
    return {
     user: {},
      icons: [
        { 
          id: 0,
          name: "fa fa-address-book fa-2x",
          heading: 'About Me',
          body: function(user) { return `I am ${user.name.title} ${user.name.first} ${user.name.last}. I am ${ user.birth_date.age } years old.`; }
        },
        { 
          id: 1,
          name: "fa fa-map fa-2x",
          heading: 'Where I Live',
          body: function(user) { return `I live at ${user.location.street.number} ${user.location.street.name} ${user.location.city}, ${user.location.state} ${user.location.postcode} ${user.location.country}`; }
        },
        { 
          id: 2,
          name: "fa fa-envelope fa-2x",
         heading: 'Contact Information - Email',
          body: function(user) { return `${user.email}`;}
        }
        ,{ 
          id: 3,
          name: "fa fa-phone-alt fa-2x",
          heading: 'Contact Information - Phone',
          body: function(user) { return `${user.phone}`}
        },
        { 
          id: 4,
          name: "fa fa-birthday-cake fa-2x",
          heading: 'Happy Birthday to Me',
          body: function(user) { return `${user.birth_date.date}`; }
        },
        { 
          id: 5,
          name: "fa fa-key fa-2x",
          heading: 'Account Information',
          body: function(user) { return `Username: ${user.account.credentials.username}\nPassword: ${user.account.credentials.password}\nMember of ${user.account.info.age} years`; }
        }
      ],
      textHeading: '', 
      textBody: ''
    } 
  },
  async created() { 
    await this.getUser(); 
    this.textHeading = this.icons[0].heading;
    this.textBody = this.icons[0].body(this.user);

  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400&display=swap');
/* html, body { height: 100%; } */
#app {
  font-family: 'Poppins', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 5%;
  display: flex;
  flex-direction: column;
  height: 100%;
}
.container {
  /* min-height: 100%; */
  display: grid;
  grid-template-rows: 1fr auto;
}
.main {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}
UserImage {
  grid-area: image;
}
NavGrid {
  grid: nav;
}
ProfileText {
  grid-area: description;
}
ContactForm {
  grid-area: form;
}
Footer {
  grid-area: footer;
  flex-shrink: 0;
}
</style>
