<template>
  <div>
    <div class="col-4 offset-4 mt-5 card">
      <form @submit.prevent="submitLogin">
        <h2 class="text-center mb-3 mt-4 text-dark">Connexion</h2>
        <div class="form-group">
          <input
            type="text"
            name="username"
            v-model="user.username"
            class="form-control"
            placeholder="Nom d'utilisateur"
            required="required"
          />
        </div>
        <div class="form-group">
          <input
            type="password"
            class="form-control"
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
          <label class="float-left form-check-label"><input type="checkbox" /> Se souvenir de moi</label>
          <nuxt-link to="/forget_password">
            <p class="text-right">Mot de passe oublié ?</p>
          </nuxt-link>
        </div>
      </form>

      <nuxt-link to="/beLocataire">
        <p class="text-left">Créer un nouveau compte</p>
      </nuxt-link>
    </div>
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
