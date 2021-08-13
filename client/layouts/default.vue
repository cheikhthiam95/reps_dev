<template>
  <div>
    <!-- header section starts  -->

    <header>
      <div id="menu-bar" class="fas fa-bars"></div>

      <a href="#" class="logo"><span>T</span>ravel</a>

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
        <i class="fas fa-user" id="login-btn"></i>
      </div>

      <form action="" class="search-bar-container">
        <input type="search" id="search-bar" placeholder="search here..." />
        <label for="search-bar" class="fas fa-search"></label>
      </form>
    </header>

    <!-- header section ends -->
    <Nuxt />
  </div>
</template>

<script>
export default {
  mounted() {},
  methods: {},
};
</script>
