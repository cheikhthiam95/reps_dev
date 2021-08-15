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
        <a href="#home">home</a>
        <a href="#book">book</a>
        <a href="#packages">packages</a>
        <a href="#services">services</a>
        <a href="#gallery">gallery</a>
        <a href="#review">review</a>
        <a href="#contact">contact</a>
      </nav>

      <div class="icons">
        <i class="fas fa-search" id="search-btn"></i>
        <nuxt-link to="/account" v-if="logged">
          <span>  {{session.firstName + "  " +session.lastName}} </span>
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
          <h3>about us</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
            quas magni pariatur est accusantium voluptas enim nemo facilis sit
            debitis.
          </p>
        </div>
        <div class="box">
          <h3>branch locations</h3>
          <a href="#">india</a>
          <a href="#">USA</a>
          <a href="#">japan</a>
          <a href="#">france</a>
        </div>
        <div class="box">
          <h3>quick links</h3>
          <a href="#">home</a>
          <a href="#">book</a>
          <a href="#">packages</a>
          <a href="#">services</a>
          <a href="#">gallery</a>
          <a href="#">review</a>
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
