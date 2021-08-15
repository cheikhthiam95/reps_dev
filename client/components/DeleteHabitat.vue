<template lang="">
  <div>
    <h1>
      <button class="fas fa-trash btn-danger" @click="$refs.deleteHabitatModal.openModal()"></button>
    </h1>


<div class="form-modal" >
  <div class="row">
    <div class="col-md-4 col-md-offset-4">
        <modal ref="deleteHabitatModal">
          <template v-slot:header>
            <h1>Supprimer un habitat</h1>
          </template>

          <template v-slot:body>
  <form @submit.prevent="deleteHabitat">
    <div>Voulez-vous vraiment Supprimer cet habitat ?</div>

    <div>
      <button class="btn" @click="$refs.deleteHabitatModal.closeModal()">
        Annuler
      </button>
      <button type="submit" class="btn btn-primary btn-block">
        <!-- <b-spinner v-if="loading"></b-spinner> -->
        OUI
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
export default {
  props: {
    habitat: {
      default: {},
      type: Object,
      require: false,
    },
  },

  data() {
    return {
      loading: false,
    };
  },
  methods: {
    async deleteHabitat() {
      this.loading = true;
      try {
        const response = await this.$axios.$delete(
          "/habitats/" + this.habitat._id
        );
        if (response && response.ok == 1) {
          this.$toast.success("Habitat supprimé avec success !");

          this.$refs.deleteHabitatModal.closeModal();
        }
      } catch (error) {
        console.log("ici", error);
      } finally {
        this.loading = false;
        this.sendMessageToPerent();
      }
    },

    sendMessageToPerent() {
      this.$root.$emit("msg_from_child");
    },
  },
};
</script>

<style lang="css">
.pac-container {
  z-index: 1041;
}
</style>
