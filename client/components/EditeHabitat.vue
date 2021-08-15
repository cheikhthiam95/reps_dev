<template lang="">
  <div>
    <h1>
      <button class="btn-dark fas fa-pen" @click="$refs.modalEditHabitat.openModal()"></button>
    </h1>


<div class="form-modal" >
  <div class="row">
    <div class="col-md-4 col-md-offset-4">
        <modal ref="modalEditHabitat">
          <template v-slot:header>
            <h1>Editer habitat</h1>
          </template>

          <template v-slot:body>
  <form @submit.prevent="updateHabitat">
    <!-- <h2 class="text-center">Devenire habitat</h2>        -->
    <div class="inputBox">
      <input
        type="text"
        v-model="habitat.name"
        class="input-full-line"
        placeholder="name"
        required="required"
      />
    </div>
    <div class="inputBox">
      <textarea
        type="text"
        class="input-full-line"
        v-model="habitat.description"
        placeholder="description"
        required="required"
      >
      </textarea>
    </div>
    <div class="inputBox">
      <input
        type="number"
        class="input-full-line"
        v-model="habitat.superficie"
        placeholder="superficie"
        required="required"
      />
    </div>
    <div class="inputBox">
      <input
        type="number"
        class="input-full-line"
        v-model="habitat.nombrePiece"
        placeholder="Nombre de piéce"
        required="required"
      />
    </div>
    <div class="inputBox">
      <input
        type="number"
        class="input-full-line"
        v-model="habitat.price"
        placeholder="Prixe / nuit"
        required="required"
      />
    </div>
    <div class="inputBox">
      <select v-model="habitat.categorieId">
        <option
          v-bind:value="categorie._id"
          v-for="categorie in $store.state.categories"
          v-bind:key="categorie._id"
        >
          {{ categorie.name }}
        </option>
      </select>
    </div>

    <div class="inputBox">
      <vue-google-autocomplete
        ref="address_ATYPIK"
        id="map"
        classname="input-full-line"
        placeholder="Please type your address"
        v-on:placechanged="getAddressData"
        country="fr"
        openNow="true"
      >
      </vue-google-autocomplete>
    </div>

    <div class="inputBox"></div>

    <div>
      <button class="btn" @click="$refs.modalEditHabitat.closeModal()">
        Annuler
      </button>
      <button type="submit" class="btn btn-primary btn-block">
        <!-- <b-spinner v-if="loading"></b-spinner> -->
        Enregistrer
      </button>
    </div>
  </form>
</template>
 
    </modal>
    
    </div></div>


</div>

    

     
  </div>
</template>

<script>
import VueGoogleAutocomplete from "vue-google-autocomplete";
import { createNamespacedHelpers } from "vuex";
const { mapState } = createNamespacedHelpers("auth");

export default {
  props: {
    habitat: {
      type: Object,
      default: {},
    },
  },
  components: {
    VueGoogleAutocomplete,
  },
  mounted() {
    console.log("Allô", this.$store.state.categories);
  },

  computed: {
    ...mapState(["session"]),
  },
  data() {
    return {
      loading: false,
    };
  },
  methods: {

    sendMessageToPerent() {
      this.$root.$emit("msg_from_child");
    },
    async updateHabitat() {
      this.loading = true;
      try {
        const response = await this.$axios.$put(
          "/habitats/" + this.habitat._id,
          {
            ...this.habitat,
            // ! Put the relea hote id
            // hoteId: this.session.userId
          }
        );
        if (response && response.ok == 1) {
          this.$toast.success("Habitat mise à jour avec success !");
          this.$refs.modalEditHabitat.closeModal();
          this.sendMessageToPerent()

        }
      } catch (error) {
        console.log("ici", error);
      } finally {
        this.loading = false;
      }
    },
    /**
     * When the location found
     * @param {Object} addressData Data of the found location
     * @param {Object} placeResultData PlaceResult object
     * @param {String} id Input container ID
     */
    getAddressData: function (addressData, placeResultData, id) {
      this.habitat.address = {
        fullAddesse: addressData,
        formatted_address: placeResultData.formatted_address,
      };
    },
  },
};
</script>

<style lang="css">
.pac-container {
  z-index: 1041;
}
</style>
