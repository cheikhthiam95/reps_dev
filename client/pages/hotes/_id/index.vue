<template lang="">
    <div>
        <h1><b-button v-b-modal.modal-1 class="btn btn-dark"> Ajouter un habitat</b-button>     </h1>
 
  

  <b-modal id="modal-1" title="Ajouter un nouvel habitat">
    <div class="my-4">


        <form @submit.prevent="newHabitat(habitat)">
        <!-- <h2 class="text-center">Devenire habitat</h2>        -->
        <div class="form-group">
            <b-form-input type="text" v-model="habitat.name" class="form-control" placeholder="name" required="required"> </b-form-input>
        </div>
        <div class="form-group">
            <b-form-textarea type="text" class="form-control" v-model="habitat.description" placeholder="description" required="required"> </b-form-textarea>
        </div>
         <div class="form-group">
            <b-form-input type="number" class="form-control" v-model="habitat.superficie" placeholder="superficie" required="required"> </b-form-input>
        </div>
         <div class="form-group">
            <b-form-input type="number" class="form-control" v-model="habitat.nombrePiece" placeholder="Nombre de piéce" required="required"> </b-form-input>
        </div>
           <div class="form-group">
            <b-form-input type="text" class="form-control" v-model="habitat.address" placeholder="address" required="required"> </b-form-input>
        </div>
            <div class="form-group">
            <b-form-input type="text" class="form-control" v-model="habitat.city" placeholder="city" required="required"> </b-form-input>
        </div>
            <div class="form-group">
            <b-form-input type="text" class="form-control" v-model="habitat.pays" placeholder="pays" required="required"> </b-form-input>
        </div>
         
        
        <div class="form-group">
            <button type="submit" class="btn btn-primary btn-block">Ajouter</button>
        </div>

    </form> 

        
    </div>
  </b-modal>    
    </div>
</template>
<script>
export default {
  data() {
    return {
      habitat: {},
    };
  },

  methods: {
async getAllhabitatsForHote() {
      try {
        const response = await this.$axios.$get("/habitats/findAllBy",this.$store.state.currentHote.id);
        console.log(response,'La réponse');
      } catch (error) {
        console.log(error);
      }
    },
    async newHabitat(habitat) {
      console.log(habitat, "voici les données reçu du formulaire");

      try {
        const response = await this.$axios.$post(
          "/habitats/newHabitat",
          {...habitat,id_hote:this.$store.state.currentHote.id}
        );
        console.log(response);
        if (response && response.id) {
            this.$store.commit('setCurrentHabitat',response)
            console.log('Voici le current hote',this.$store.state.currentHote)
            console.log('Voici le current habitat',this.$store.state.currentHabitat)
            this.getAllhabitatsForHote();

            // this.$router.push('/hotes/'+this.$store.state.currentHote.id+'/'+response.id)
        }
      } catch (error) {
        console.log("ici", error);
      }
    },
  },
};
</script>
<style lang="">
</style>