<template lang="">
    <div>
    <new-habitat>
    </new-habitat> 
      <div class="card-columns">
        <div  v-for="habitat in habitats" :key="habitat.id" class="card" style="width:300px">
  <img class="card-img-top" src="img_avatar1.png" alt="Card image">
  <div class="card-body">
    <h4 class="card-title">{{habitat.name}}</h4>
    <p class="card-text">{{habitat.description}}</p>
    <a href="#" class="btn btn-yellow" @click="reserver(habitat)">Reserver</a>
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
      habitats: {},
    };
  },
  
  mounted() {
    this.gethabitats();
  },
  methods: {
    async gethabitats() {
      try {
        this.habitats = await this.$axios.$get("/habitats/");
        console.log(this.habitats);
      } catch (error) {
        console.log(error);
      }
    },
        async reserver(habitat) {
        console.log('Réservercalled',habitat)
        const response = await this.$axios.$get("/habitats/"+habitat.id);
        console.log(response);
        if(response && response.id){
          this.$router.push('/habitats/'+response.id)
        }
     
    }
  },
};
</script>
<style lang="">
</style>