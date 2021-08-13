<template>
  <div>
   

<section class="contact" id="contact">
  
    <div class="row">
       <div class="col-md-6 col-md-offset-3 col-sm-8  col-sm-offset-2 col-lg-4 col-lg-offset-4 col-xs-12 ">


       
        <form @submit.prevent="submitLogin">
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
          <button type="submit" class="btn btn-primary btn-block">Log in</button> 
        </div>
        <div class="clearfix">
        <input type="checkbox" id="remember">
        <label for="remember">remember me</label> 
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
import {  createNamespacedHelpers } from 'vuex';
const { mapActions } = createNamespacedHelpers('auth');
export default {
  layout: "login",
  data: () => ({
    user: {
      username: undefined,
      password: undefined,
    },
  }),
  methods: {
    ...mapActions(['login']),
    async submitLogin() {
      try {
        const response = await this.login(this.user);
        const { userId, role } = response || {};
        
        if (userId && role && ["admin", "hote", "locataire"].includes(role)) {
          return this.$router.push({name: 'index'});
        }
        
        this.$toast.error("Some informations are missing. We couldn't proceed to the login.");
        console.error('missies userId, role or the role sent is not handled');
      } catch (error) {
        if(error.response?.status == 401) {
          return this.$toast.error("Nom d'utilisateur ou mot de passe invalide");
        }
        this.$toast.error("An unexpected error has occurred. Please contact the support");
        console.error("Error while loggin : ", error);
      }
    }
  }
};
</script>
