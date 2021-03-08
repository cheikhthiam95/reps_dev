<template>
  <div>
    <div
      class="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-yellow border-bottom box-shadow"
    >
      <h5 class="my-0 mr-md-auto font-weight-normal">
        <img
          style="height: 72px; width: 162px"
          src="~/assets/images/logo1_V1.png"
        />
      </h5>
      <nav class="my-2 my-md-0 mr-md-3">
        <!-- <a class="p-2 text-dark" href="#">Features</a>
        <a class="p-2 text-dark" href="#">Enterprise</a>
        <a class="p-2 text-dark" href="#">Support</a>
        <a class="p-2 text-dark" href="#">Pricing</a> -->
        <a class="p-2 text-dark" href="">Hébergement</a>
      </nav>
      <!-- <a class="btn btn-outline-primary" href="#">Sign up</a> -->
      <b
        >{{ this.$store.state.session.fistName }}
        {{ this.$store.state.session.lastName }}</b
      >
    </div>
    <div
      class="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-dark border-bottom box-shadow"
    >
      <div class="rows">
        <div class="col-12 offset-2">
          <b-form inline>
            <b-form-datepicker
              v-model="value"
              :min="min"
              :max="max"
              locale="en"
            ></b-form-datepicker>
            <b-form-datepicker
              v-model="value"
              :min="min"
              :max="max"
              locale="en"
            ></b-form-datepicker>

            <b-button variant="yellow">Rechercher</b-button>
          </b-form>
        </div>
      </div>
    </div>

    <div class="container">
      <Nuxt />
    </div>

    <footer class="pt-4 pt-md-5 border-top footer">
      <div class="row">
        <div class="col-12 col-md">
          <!-- <img class="mb-2" src="https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-solid.svg" alt="" width="24" height="24"> -->
          <small class="d-block mb-3 text-dark">© 2020-2021</small>
        </div>
        <div class="col-6 col-md">
          <h5 class="text-yellow">A propos</h5>
          <ul class="list-unstyled text-small">
            <li><a class="text-dark" href="#">Cool stuff</a></li>
            <li><a class="text-dark" href="#">Random feature</a></li>
            <li><a class="text-dark" href="#">Team feature</a></li>
            <li><a class="text-dark" href="#">Stuff for developers</a></li>
            <li><a class="text-dark" href="#">Another one</a></li>
            <li><a class="text-dark" href="#">Last time</a></li>
          </ul>
        </div>
        <div class="col-6 col-md">
          <h5 class="text-yellow">Découvrir</h5>
          <ul class="list-unstyled text-small">
            <li><a class="text-dark" href="#">Resource</a></li>
            <li><a class="text-dark" href="#">Resource name</a></li>
            <li><a class="text-dark" href="#">Another resource</a></li>
            <li><a class="text-dark" href="#">Final resource</a></li>
          </ul>
        </div>
        <div class="col-6 col-md">
          <h5 class="text-yellow">Notre adresse</h5>
          <ul class="list-unstyled text-small">
            <li><a class="text-dark" href="#">Team</a></li>
            <li><a class="text-dark" href="#">Locations</a></li>
            <li><a class="text-dark" href="#">Privacy</a></li>
            <li><a class="text-dark" href="#">Terms</a></li>
          </ul>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
    // middleware: ['auth', 'stats']
}
</script>
<style>
html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
.footer {
  position: fixed;
  bottom: 0;
  width: 100%;
  background-color: #f5f5f5;
}
</style>
