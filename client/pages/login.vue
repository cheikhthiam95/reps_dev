<template lang="">
  <div>
   

<section class="contact" id="contact">
  
    <div class="row">
    <div class="col-md-4 col-md-offset-4">

       
        <form @submit.prevent="login(user)">
               <h2 class="text-center mb-3 mt-4 text-dark">Connexion</h2>
            <div class="inputBox">


              <input
            type="text" 
            name="username"
            v-model="user.username"
            class="input-full-line"
            placeholder="Nom d'utilisateur"
            required="required"
          />
                
            </div>
            <div class="inputBox">
               
          <input
            type="password"
            class=" input-full-line"
            name="password"
            v-model="user.password"
            placeholder="Mot de passe "
            required="required"
          />
            </div>

            <div class="form-group">
          <button type="submit" class="btn btn-primary btn-block">Log in</button></br>
        </div>
        <div class="clearfix">
        <input type="checkbox" id="remember">
        <label for="remember">remember me</label> </br>
          <nuxt-link to="/forget_password">
            <p class="text-right">Mot de passe oublié ?</p>
          </nuxt-link>
        </div>
           
        </form>

    </div>
    </div>
    
</section>
    
  </div>
</template>

<script>
import axios from "axios";

// Then, on the setup method

export default {
  layout: "login",
  data() {
    return {
      user: {},
      alert: {
        type: null,
        message: "",
      },
    };
  },
  mounted() {
    if (this.$store.state.session == {}) this.$toast.error("Allô");
    // Get current user value
    this.$warehouse.get("user");
    // this.$axios.onError(e => Promise.reject(e.response.data))
  },

  methods: {
    async login(user) {
      console.log(user, "voici les données reçu du formulaire");
      try {
        const response = await this.$axios.$post("/users/login", user);
        console.log(response);
        this.$store.commit("setSession", response);
        this.$store.commit("logged", true);
        this.$warehouse.set("session", response, 10000);
        this.$warehouse.set("isConnected", true, 10000);
        console.log(this.$store.state.session, "le session en cours ");
        const { userId, role } = response || {};
        if (userId && role && ['admin', 'hote', 'locataire'].includes(role)) {
          return this.$router.push(`/${role}/${userId}`);
        }
        this.$nuxt.sendError({ statusCode: 404, message: 'Post not found' });
      } catch (error) {
        console.log("ici", error);
      }

      // const response = await axios.post(
      //   "http://localhost:5000/api/locataire/login", user

      // );
      // this.alert = response.data
      // if(response && response.data.message && response.data.message.type == 0)
      // {
      //   this.$store.commit("setSession",response.data.session)
      // }
      // console.log(response, 'Et le alert est', this.$store.state.session);
      // this.$router.push("/locataire")
    },
  },
};
</script> 