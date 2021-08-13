<template>
  <section>
    welcome profile {{ session.firstName }} {{ session.lastName }}
    <button @click="editInformations">Edit</button>
    Je suis un {{ session.role }}

    <template v-if="isHote">
        <button @click="addHabitat">Créer un habitat</button>
      <div>
        <h2>Mes réservations en cours</h2>
      </div>

      <div>
        <h2>Mes Logements</h2>
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
const { mapState } = createNamespacedHelpers("auth");
export default {
  middleware: "auth",
  computed: {
    ...mapState(["session"]),
    isHote() {
      return /hote/i.test(this.session.role);
    },
    isTenant() {
      return /locataire/i.test(this.session.role);
    }
  },
  methods: {
    editInformations() {
      console.log("jedit mes informations");
    },
    addHabitat() {
      console.log("jajoute un habitat");
    },
  },
  created() {
      if(this.isHote) {
          // On charge les trucs de l'hote
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
