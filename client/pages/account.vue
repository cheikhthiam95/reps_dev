<template>
  <section>
    <edit-profile :filters-id="session.userId" />
    <form></form>
    <template v-if="isHote">
      <new-habitat></new-habitat>
      <div>
        <h2>Mes réservations en cours</h2>
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

    <template v-if="isAdmin || isHote">
        <list-habitat/>
    </template>
  </section>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
import ListHabitat from '../components/ListHabitat.vue';
import EditeHabitat from "../components/EditeHabitat.vue";
const { mapState , mapActions ,mapGetters } = createNamespacedHelpers("auth");
export default {
  components: { EditeHabitat, ListHabitat },
  middleware: "auth",
  mounted() {
    console.log("L'habitat  reçu ", this.habitats);
    this.getCategorires();
  
  },
  computed: {
    ...mapState(["session"]),
    ...mapGetters(["habitats"]),
    isHote() {
      return /hote/i.test(this.session.role);
    },
    isTenant() {
      return /locataire/i.test(this.session.role);
    },
    isAdmin() {
      return /admin/i.test(this.session.role);
    },
  },
  data() {
    return { 
      filters: {},
    };
  },
  methods: {
    ...mapActions(["getCategorires"]),
    ...mapActions(["getHabitatsForHote"]),
    ...mapActions(["getHabitatsForHote"]),
    
    clean(obj) {
      for (var propName in obj) {
        obj[propName] =
          typeof obj[propName] == "string"
            ? obj[propName].trim()
            : obj[propName];
        if (
          obj[propName] === null ||
          obj[propName] === undefined ||
          obj[propName] === ""
        ) {
          delete obj[propName];
        }
      }
      return obj;
    },
    // async filterHabitat(args) {
    //   console.log(args);
    //   try {
    //     const response = await this.$axios.$get("/habitats/findAllbyMany/", {
    //       params: { ...this.clean(args) },
    //     });
    //     if (response) {
    //       console.log("Naruto ", response);
    //       return response;
    //     }
    //   } catch (error) {
    //     console.log("ici", error);
    //     return [];
    //   }
    // },

  },
  created() {
    if (this.isHote) {
      // On charge les trucs de l'hote

      // this.reload();
    }
    if (this.isTenant) {
      // On charge les trucs du locatiare
    }
    if (this.isAdmin) {
      // this.reload({});
    }
  },
};
</script>

<style lang="scss" scoped>
</style>
