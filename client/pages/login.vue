<template>
  <div>
<<<<<<< HEAD
   

<section class="contact" id="contact">
  
    <div class="row">
    <div class="col-md-4 col-md-offset-4">

       
        <form @submit.prevent="login(user)">
               <h2 class="text-center mb-3 mt-4 text-dark">Connexion</h2>
            <div class="inputBox">


              <input
            type="text" 
=======
    <div class="col-4 offset-4 mt-5 card">
      <form @submit.prevent="login">
        <h2 class="text-center mb-3 mt-4 text-dark">Connexion</h2>
        <div class="form-group">
          <input
            type="text"
>>>>>>> e31122f69c1f0602c11ff2537dd18affe86b8af1
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
export default {
  layout: "login",
  data: () => ({
    user: {
      username: undefined,
      password: undefined,
    },
  }),
  created() {
    if (this.$store.state.session == {}) this.$toast.error("Allô");
    // Get current user value
    this.$warehouse.get("user");
    // this.$axios.onError(e => Promise.reject(e.response.data))
  },

  methods: {
    persistSession(datas) {
      this.$store.commit("setSession", datas);
      this.$store.commit("logged", true);
      this.$warehouse.set("session", datas, 10000);
      this.$warehouse.set("isConnected", true, 10000);
    },
    async login() {
      try {
        const response = await this.$axios.$post("/users/login", this.user);
        const { userId, role } = response || {};
        
        if (userId && role && ["admin", "hote", "locataire"].includes(role)) {
          this.persistSession(response);
          return this.$router.push(`/${role}/${userId}`);
        }
        
        this.$toast.error("Some informations are missing. We couldn't proceed to the login.");
        console.error('missies userId, role or the role sent is not handled');
      } catch (error) {
        if(error.response.status == 401) {
          return this.$toast.error("Nom d'utilisateur ou mot de passe invalide");
        }
        this.$toast.error("An unexpected error has occurred. Please contact the support");
        console.error("Error while loggin : ", error);
      }
    }
  }
};
</script>
