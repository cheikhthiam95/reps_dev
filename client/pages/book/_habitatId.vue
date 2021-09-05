<template>
  <div>
    <div class="row">
      <div class="col-md-2 col-sm-2 col-lg-2"></div>
      <div class="col-md-8 col-sm-8 col-lg-6">
        <gallery />
      </div>
      <div class="col-md-2 col-sm-2 col-lg-4">
        <section class="book" id="book">
          <div class="row">
            <form @submit.prevent="book(bookingArgs)">
              <div class="inputBox">
                <h3>Combien</h3>
                <input
                  type="number"
                  v-model="bookingArgs.guests"
                  placeholder="Nombre de personne"
                />
              </div>
              <div class="inputBox">
                <h3>Arrivée</h3>
                <input type="date" v-model="bookingArgs.startDate" />
              </div>
              <div class="inputBox">
                <h3>Départ</h3>
                <input type="date" v-model="bookingArgs.endDate" />
              </div>
              <input type="submit" class="btn" value="Reserver" />
            </form>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>



<script>
import { createNamespacedHelpers } from "vuex";

const { mapGetters, mapState } = createNamespacedHelpers("auth");

export default {
  computed: {
    ...mapGetters(["logged"]),
    ...mapState(["session"]),
  },
  created() {
    

    if(this.$store.state.currentHabitat?._id){

      console.log("On a le store")
      this.bookingArgs = { ...this.$store.state.currentHabitat };
      console.log(this.bookingArgs);
    }else{
      console.log("On va le cherhcher")

      this.getCurrentHabitat().then(res =>{
        this.$store.commit("setCurrentHabitat", res);
      })
    }
     
  },

  data() {
    return {
      bookingArgs: {},
    };
  },
  methods: {
    async book() {
      if (this.logged) {
        try {
          const response = await this.$axios.$post(
            "/reservations/newReservation/",
            {
              ...this.bookingArgs,
              habitatId: this.bookingArgs._id,
              tenantId: this.session.userId,
            }
          );
          if (response) {
            console.log("Naruto ", response);
            return response;
          }
        } catch (error) {
          console.log("ici", error);
          return [];
        }
      } else {
        this.$toast.success(
          "Vous devez être connnecté pour faire une réservation !"
        );
        this.$router.replace({ name: "login" });
      }
    },

    async getCurrentHabitat(){
        try {
          const response = await this.$axios.$get(
            "/habitats/"+this.$route.params.habitatId
          );
          if (response) {
            console.log("Naruto ", response);
            return response;
          }
        } catch (error) {
          console.log("ici", error);
          return [];
        }
    }
  },


};
</script>