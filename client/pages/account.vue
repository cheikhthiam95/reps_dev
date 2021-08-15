<template>
  <section>
    welcome profile {{ session.firstName }} {{ session.lastName }}
    <button @click="editInformations">Edit</button>
    Je suis un {{ session.role }}

    <template v-if="isHote">
        <new-habitat></new-habitat>
      <div>
        <h2>Mes réservations en cours</h2>
      </div>

      <div>
        <h2>Mes Logements</h2>

          <table class="responstable">

            <thead>
              <tr>
                <th> Catégorie</th>
                <th> Name</th>
                <th> Description</th>
                <th> statut</th>
                <th> Prix</th>
                <th> Ville</th>
                <th> Address</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="habitat in habitats" v-bind:key="habitat._id">
                <td>{{ getCategorieNameById(habitat.categorieId) }}</td>
                <td>{{ habitat.name }}</td>
                <td>{{ habitat.description }}</td>
                <td> <span v-if="habitat.status" class="fas fa-check"></span> <span v-else class="fas fa- "></span></td>
                <td>{{ habitat.price }}</td>
                <td>{{ habitat.addresse.fullAddesse.locality }}</td>
                <td>{{ habitat.addresse.formatted_address }}</td>
                <td>
                  <div style="display: flex;justify-content: space-evenly;">
                    <span ><edite-habitat :habitat="habitat" /></span>
                    <span ><delete-habitat :habitat="habitat" /></span>

                  </div>
                </td>
                
              </tr>
            </tbody>

          </table>
            

      </div>

      <div>
        <h2>Mes demandes de réservations en cours</h2>
      </div>
    </template>

    <template v-if="isTenant">
      <div>
        <h2>Mes réservations en cours</h2>
      </div>
    </template>
  </section>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
import EditeHabitat from '../components/EditeHabitat.vue';
const { mapState } = createNamespacedHelpers("auth"); 
export default {
  components: { EditeHabitat },
  middleware: "auth",
  mounted() {
    this.$root.$on("msg_from_child",() =>{
      this.reload()
    })
  },
  computed: {
    ...mapState(["session"]), 
    isHote() {
      return /hote/i.test(this.session.role);
    },
    isTenant() {
      return /locataire/i.test(this.session.role);
    }
  },
  data() {
    return {
      habitats: []
    }
  },
  methods: {
    editInformations() {
      console.log("jedit mes informations");
    },
    addHabitat() {
      console.log("jajoute un habitat");
    },
   async getCategorires(){
       try {
        const response = await this.$axios.$get("/categories/");
        if (response ) {
          return response
        }
      } catch (error) {
        console.log("ici", error);
        return []
      } 
    },
    reload(){

     this.getHabitatsForHote().then(response =>{
          //  this.$store.commit("SetCategories",response);
          this.habitats = response
              
        })
    },
    async getHabitatsForHote(){
           try {
        const response = await this.$axios.$get("/habitats/findAllby/hoteId/"+this.session.userId);
        if (response ) {
          console.log("Naruto ", response)
          return response
        }
      } catch (error) {
        console.log("ici", error);
        return []
      } 
    },
    getCategorieNameById(id){
    
      return this.$store.state.categories.filter(categorie => categorie._id == id)[0]?.name ? this.$store.state.categories.filter(categorie => categorie._id == id)[0].name : id
    }
  },
  created() {
      if(this.isHote) {
          // On charge les trucs de l'hote
       this.getCategorires().then(response =>{
           this.$store.commit("SetCategories",response);
              
        })  
        
      this.reload()
      }
      if(this.isTenant) {
          // On charge les trucs du locatiare
      }
  },
};
</script>

<style lang="scss" scoped>
section {
  border: 4px yellowgreen solid;
}
</style>
