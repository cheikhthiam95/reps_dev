<template>
  <div class="main-div">
    <!-- header section starts  -->

    <header>
      <div id="menu-bar" class="fas fa-bars"></div>

      <!-- <a href="#" class="logo"><span>A</span>typik<span>H</span>ouse</a> -->
      <nuxt-link to="/">
        <a href="#" class="logo">
          <img class="img-logo" src="~/assets/images/logo1_V1.png" alt=""
        /></a>
      </nuxt-link>

      <nav class="navbar">
        <a href="#home">Accueil</a>
        <a href="#book">Réserver</a>
        <a href="#packages">Habitats</a>
        <a href="#services">services</a>
        <a href="#gallery">gallery</a> 
        <a href="#contact">contact</a>
      </nav>

      <div class="icons">
        <i class="fas fa-search" id="search-btn"></i>
        <nuxt-link to="/account" v-if="logged">
          <span>  {{session.firstName + "  " +session.lastName +  " " + session.role}} </span>
          <i class="fas fa-user" id="login-btn"></i>
        </nuxt-link>
      </div>
      <div>
        <a v-if="logged" class="btn-dark" @click.prevent="tryLogout">
          Se déconecter</a
        >

        <nuxt-link v-else class="btn-dark" to="/login">
          Se connecter
        </nuxt-link>
      </div>

      <form action="" class="search-bar-container">
        <input type="search" id="search-bar" placeholder="search here..." />
      </form>
    </header>

    <!-- header section ends -->

    <main class="main-section">
      <Nuxt />
    </main>

    <!-- footer section  -->

    <section class="footer">
      <div class="box-container">
        <div class="box">
          <h3>A propos</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
            quas magni pariatur est accusantium voluptas enim nemo facilis sit
            debitis.
          </p>
        </div>
        <div class="box">
          <h3>Zonne de locations</h3> 
          <a href="#">France</a>
        </div>
        <div class="box">
          <h3>quick links</h3>
          <a href="#">Accueil</a>
          <a href="#">Reserver</a>
          <a href="#">Habitats</a>
          <a href="#">Services</a>
          <a href="#">gallery</a> 
          <a href="#">contact</a>
        </div>
        <div class="box">
          <h3>follow us</h3>
          <a href="#">facebook</a>
          <a href="#">instagram</a>
          <a href="#">twitter</a>
          <a href="#">linkedin</a>
        </div>
      </div>

      <h1 class="credit">
        created by <span> mr. web designer </span> | all rights reserved!
      </h1>
    </section>

    <!-- end of footer section  -->
  </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";

const { mapGetters, mapActions, mapState } = createNamespacedHelpers("auth");

export default {
  mounted() {


let searchBtn = document.querySelector('#search-btn');
let searchBar = document.querySelector('.search-bar-container');
// let formBtn = document.querySelector('#login-btn');
// let loginForm = document.querySelector('.login-form-container');
// let formClose = document.querySelector('#form-close');
let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');
let videoBtn = document.querySelectorAll('.vid-btn');

window.onscroll = () =>{
    searchBtn.classList.remove('fa-times');
    searchBar.classList.remove('active');
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
    // loginForm.classList.remove('active');
}

menu.addEventListener('click', () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
});

searchBtn.addEventListener('click', () =>{
    searchBtn.classList.toggle('fa-times');
    searchBar.classList.toggle('active');
});

// formBtn.addEventListener('click', () =>{
//     loginForm.classList.add('active');
// });

// formClose.addEventListener('click', () =>{
//     loginForm.classList.remove('active');
// });

videoBtn.forEach(btn =>{
    btn.addEventListener('click', ()=>{
        document.querySelector('.controls .active').classList.remove('active');
        btn.classList.add('active');
        let src = btn.getAttribute('data-src');
        document.querySelector('#video-slider').src = src;
    });
});

// var swiper = new Swiper(".review-slider", {
//     spaceBetween: 20,
//     loop:true,
//     autoplay: {
//         delay: 2500,
//         disableOnInteraction: false,
//     },
//     breakpoints: {
//         640: {
//           slidesPerView: 1,
//         },
//         768: {
//           slidesPerView: 2,
//         },
//         1024: {
//           slidesPerView: 3,
//         },
//     },
// });

// var swiper = new Swiper(".brand-slider", {
//     spaceBetween: 20,
//     loop:true,
//     autoplay: {
//         delay: 2500,
//         disableOnInteraction: false,
//     },
//     breakpoints: {
//         450: {
//           slidesPerView: 2,
//         },
//         768: {
//           slidesPerView: 3,
//         },
//         991: {
//           slidesPerView: 4,
//         },
//         1200: {
//           slidesPerView: 5,
//         },
//       },
// });
  },
  computed: {
    ...mapGetters(["logged"]),
    ...mapState(["session"]),

  },
  methods: {
    ...mapActions(["logout"]),
    tryLogout() {
      this.logout();
      this.$toast.success("Au revoir !");
      this.$router.replace({ name: "index" });
    },
  },
};
</script>

<style lang="css" scoped>
.img-logo {
  width: 85px;
  height: 60px;
}

.main-div {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
}

.main-section {
  margin-top: 74px;
}
</style>
