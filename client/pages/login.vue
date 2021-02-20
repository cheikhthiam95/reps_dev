<template lang="">
  <div>
      <div class="col-4 offset-4 mt-5">
   <div v-if="alert.type == 0" class="alert alert-success" role="alert">
     {{alert.message}}
  </div>
  <div v-if="alert.type == 1" class="alert alert-danger" role="alert">
      {{alert.message}}
  </div>
</div>
 <div class="col-4 offset-4 mt-5">
    <form @submit.prevent="login(user)">
        <h2 class="text-center">Log in</h2>       
        <div class="form-group">
            <input type="text" v-model="user.username" class="form-control" placeholder="Username" required="required">
        </div>
        <div class="form-group">
            <input type="password" class="form-control" v-model="user.password" placeholder="Password" required="required">
        </div>
        <div class="form-group">
            <button type="submit" class="btn btn-primary btn-block">Log in</button>
        </div>
        <div class="clearfix">
            <label class="float-left form-check-label"><input type="checkbox"> Remember me</label>
            <a href="#" class="float-right">Forgot Password?</a>
        </div>        
    </form>
    <p class="text-center"><a @click="newAccount">Create an Account</a></p>
</div>
  </div>
</template>
<script>
import axios from "axios"; 

// Then, on the setup method
 
export default {
  layout: 'login',
  data() {
    return {
      user : {},
      alert :{
        type :null,
        message:""
      }
    };
  },
  mounted() { 

   
    if(this.$store.state.session == {})
    this.$toast.error("Allô")                                                                                                                               
// Get current user value
this.$warehouse.get('user')
// this.$axios.onError(e => Promise.reject(e.response.data))
  },

  methods: {
    newAccount(){
      this.$router.push('/newAccount')
    },
       async login(user) {
         console.log(user,'voici les données reçu du formulaire');

         try {  
             const response = await this.$axios.$post(
              "/users/login",
             user
            );
            console.log(response)
            this.$store.commit('setSession',response)
             this.$warehouse.set('session', response, 1000) 
            console.log(this.$store.state.session,'le session en cours session');
            this.$router.push('/users')

         } catch (error) {
           console.log('ici',error)
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
<style lang=""> 
</style>
