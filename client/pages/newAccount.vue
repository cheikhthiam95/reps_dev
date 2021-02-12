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
      <form @submit.prevent="newAccount(user)">
            <h2 class="text-center">New account</h2>       
            <div class="form-group">
                <input type="text" v-model="user.firstName" class="form-control" placeholder="first_name" required="required">
            </div>
             <div class="form-group">
                <input type="text" v-model="user.lastName" class="form-control" placeholder="last_name" required="required">
            </div>
            <div class="form-group">
                <input type="text" v-model="user.email" class="form-control" placeholder="email" required="required">
            </div>
          <div class="form-group">
                <input type="text" v-model="user.phone" class="form-control" placeholder="phone" required="required">
            </div> 
            <div class="form-group">
                <input type="text" v-model="user.country" class="form-control" placeholder="country" required="required">
            </div>
            <div class="form-group">
                <input type="text" v-model="user.city" class="form-control" placeholder="city" required="required">
            </div>
            <!-- <div class="form-group">
                <input type="file" class="form-control-file" placeholder="avatar" required="required">
            </div> -->
            <div class="form-group">
                <input type="password" class="form-control" v-model="user.password" placeholder="Password" required="required">
            </div>
            <div class="form-group">
                <input type="password" class="form-control" v-model="user.password_confim" placeholder="Confirmation de mot de passe" required="required">
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
    // console.log("Allô chiekh", process.env.BaseUrl);
    // axios.get("http://localhost:5000/api/locataire/getAllLocataire");
  },

  methods: {
       async newAccount(user) {
         console.log(user,'voici les données reçu du formulaire');
         
        // const response = await $axios.$get(
        //       "http://localhost:5000/api/locataire/login",
        //       {
        //         username: "m.thiam@gmail.com",
        //         password: "123456",
        //       }
        //     );
      try { const response = await axios.post(
        "http://localhost:5000/api/users/newUser", {...user,role:'admin',username:user.email}
         
      );console.log("La réponse du server",response)
        
      } catch (error) {
        console.log("La réponse du server",error)
        
      }
     

      

    //   this.alert = response.data
    //   if(response && response.data.message && response.data.message.type == 0)
    //   {
    //     this.$store.commit("setSession",response.data.session)
    //   }
    //   console.log(response, 'Et le alert est', this.$store.state.session);
    // //   this.$router.push("/login")
    },
  },
};
</script>
<style lang=""> 
</style>
