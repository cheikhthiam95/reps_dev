<template lang="">
    <div>
    
      <div class="card-columns">
        <div  v-for="user in users" :key="user.id" class="card" style="width:300px">
  <img class="card-img-top" src="img_avatar1.png" alt="Card image">
  <div class="card-body">
    <h4 class="card-title">{{user.lastName}}</h4>
    <p class="card-text">Some example text.</p>
    <a href="#" class="btn btn-yellow" @click="reserver(user)">Reserver</a>
  </div>
</div>
    </div>
      </div>

    </div>
</template>
<script>
export default {
  data() {
    return {
      users: {},
    };
  },
  
  mounted() {
    this.getUsers();
  },
  methods: {
    async getUsers() {
      try {
        this.users = await this.$axios.$get("http://localhost:5000/api/users/");
        console.log(this.users);
      } catch (error) {
        console.log(error);
      }
    },
        async reserver(user) {
        console.log('Réservercalled',user)
        const response = await this.$axios.$get("/users/"+user.id);
        console.log(response);
        if(response && response.id){
          this.$router.push('/users/'+response.id)
        }
     
    }
  },
};
</script>
<style lang="">
</style>