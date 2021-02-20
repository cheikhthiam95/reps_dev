<template lang="">
  <div>

 <div class="col-6 offset-3 mt-5">
    <form @submit.prevent="register(partenaire)">
        <h2 class="text-center">Devenire partenaire</h2>       
        <div class="form-group">
            <input type="text" v-model="partenaire.firstName" class="form-control" placeholder="fistName" required="required">
        </div>
        <div class="form-group">
            <input type="text" class="form-control" v-model="partenaire.lastName" placeholder="lastName" required="required">
        </div>
         <div class="form-group">
            <input type="email" class="form-control" v-model="partenaire.email" placeholder="email" required="required">
        </div>
         <div class="form-group">
            <input type="telephone" class="form-control" v-model="partenaire.telephone" placeholder="telephone" required="required">
        </div>
           <div class="form-group">
            <input type="text" class="form-control" v-model="partenaire.address" placeholder="address" required="required">
        </div>
            <div class="form-group">
            <input type="text" class="form-control" v-model="partenaire.city" placeholder="ville" required="required">
        </div>
            <div class="form-group">
            <input type="text" class="form-control" v-model="partenaire.pays" placeholder="pays" required="required">
        </div>
            <div class="form-group">
            <input type="password" class="form-control" v-model="partenaire.password" placeholder="password" required="required">
        </div>
           <div class="form-group">
            <input type="password" class="form-control" v-model="partenaire.password_confirm" placeholder="password_confirm" required="required">
        </div>
        
        <div class="form-group">
            <button type="submit" class="btn btn-primary btn-block">Register</button>
        </div>

    </form> 
</div>
  </div>
</template>
<script>
import axios from "axios";

// Then, on the setup method

export default {
  layout: "login",
  data() {
    return {
      partenaire: {},
      alert: {
        type: null,
        message: "",
      },
    };
  },
  mounted() {
    if (this.$store.state.session == {}) this.$toast.error("Allô");
    // Get current partenaire value
    this.$warehouse.get("partenaire");
    // this.$axios.onError(e => Promise.reject(e.response.data))
  },

  methods: {
    async register(partenaire) {
      console.log(partenaire, "voici les données reçu du formulaire");

      try {
        const response = await this.$axios.$post("/users/newUser", {
          ...partenaire,
          role: "hote",
          username: partenaire.email,
        });
        console.log(response);
        if (response && response.id) {
          this.$store.commit("setCurrentHote", response);
          console.log("Voici le current hote", this.$store.state.currentHote);

          this.$router.push("/hotes/" + response.id);
        }
      } catch (error) {
        console.log("ici", error);
      }

      // const response = await axios.post(
      //   "http://localhost:5000/api/locataire/login", partenaire

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
<style lang="">
</style>
