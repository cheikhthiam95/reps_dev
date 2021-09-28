<template>
  <section>
    <div>
      <div>
        <h2>Tous Mes demandes réservations</h2>
 
        <table class="responstable" v-if="reservations.length > 0">
          <thead>
            <tr>
              <th>Catégorie</th>
              <th>Name</th>
              <th>Description</th>
              <th>Réservé</th>
              <th>Visiblité</th>
              <th>Prix</th>
              <th>Superficie</th>
              <th>Ville</th>
              <th>Address</th>
              <th>Publier</th>
              <th>Accepter / rejeter la reservations</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="reservation in reservations" v-bind:key="reservation._id">
              <td>{{ getCategorieNameById(reservation.categorieId) }}</td>
              <td>{{ reservation.name }}</td>
              <td>{{ reservation.description }}</td>
              <td>
                {{ reservation.reservationStatus }}

                <!-- <span v-if="reservation.status" class="fas fa-check"></span>
                  <span v-else class="fas fa-"></span> -->
              </td>
              <td>
                <br /><span> {{ reservation.publishedStatus }}</span>
              </td>
              <td>{{ reservation.price }}</td>
              <td>{{ reservation.superficie }}</td>
              <td>{{ reservation.address.fullAddress.locality }}</td>

              <td>{{ reservation.address.formatted_address }}</td>
              <td>
                <span>
                  <label class="switch">
                    <input
                      v-if="isHote"
                      type="checkbox"
                      v-model="reservation.published"
                      @change="
                        updatePushedStatus(
                          { published: reservation.published },
                          reservation._id
                        )
                      "
                    />
                    <input
                      v-if="isAdmin"
                      type="checkbox"
                      v-model="reservation.isPublished"
                      @change="
                        updatePushedStatus(
                          { isPublished: reservation.isPublished },
                          reservation._id
                        )
                      "
                    />

                    <span class="slider round"></span>
                  </label>
                </span>
              </td>

              <td>
                <span>
                  <label class="switch">
                    <input
                      v-if="
                        isHote && (reservation.inBookingProcess || reservation.isBooked)
                      "
                      type="checkbox"
                      v-model="reservation.isBooked"
                      @change="
                        updatePushedStatus(
                          {
                            isBooked: reservation.isBooked,
                            inBookingProcess: false,
                          },
                          reservation._id
                        )
                      "
                    />
                    <input
                      v-if="isAdmin"
                      type="checkbox"
                      v-model="reservation.isBooked"
                      @change="
                        updatePushedStatus(
                          {
                            isBooked: reservation.isBooked,
                            inBookingProcess: false,
                          },
                          reservation._id
                        )
                      "
                    />

                    <span class="slider round"></span>
                  </label>
                </span>
              </td>
              <td>
                <div style="display: flex; justify-content: space-evenly">
                  <span><edite-reservation :reservation="{ ...reservation }" /></span>
                  <span><delete-reservation :reservation="{ ...reservation }" /></span>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </section>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
import EditeHabitat from "../components/EditeHabitat.vue";
const { mapState } = createNamespacedHelpers("auth");
export default {
  components: { EditeHabitat },
  middleware: "auth",
  mounted() {
    console.log("L'reservation  reçu ", this.reservations);
    
    this.$root.$on("msg_from_child", () => {
      this.reload();
    });
  },
  computed: {
    ...mapState(["session"]),
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
      reservations: [],
      filters: {},
    };
  },
  methods: {
    updatePushedStatus(status, idHabitat) {
      console.log("Allô", status);

      setTimeout(async () => {
        try {
          const response = await this.$axios.$put("/reservations/" + idHabitat, {
            ...status,
          });
          if (response) {
            console.log("Naruto ", response);
            this.reload();
            return response;
          }
        } catch (error) {
          console.log("ici", error);
          return [];
        }
      }, 1000);
    },
    editInformations() {
      console.log("jedit mes informations");
    },
    addHabitat() {
      console.log("jajoute un reservation");
    },
    async getCategorires() {
      try {
        const response = await this.$axios.$get("/categories/");
        if (response) {
          return response;
        }
      } catch (error) {
        console.log("ici", error);
        return [];
      }
    },
    reloadByAdmin(args) {
      console.log("Les donne du filter", args);
      this.filterHabitat(args).then((response) => {
        //  this.$store.commit("SetCategories",response);
        this.reservations = response;
      });
    },
    reload() {
      this.getHabitatsForHote().then((response) => {
        
        console.log("Réload By hote called",response)
        this.reservations = response;
      });
    },
    async getHabitatsForHote() {
      try {
        const response = await this.$axios.$get(
          "/reservations/findAllby/tenantId/" + this.session.userId
        );
        if (response) {
          console.log("Naruto ", response);
          return response;
        }
      } catch (error) {
        console.log("ici", error);
        return [];
      }
    },
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
    async filterHabitat(args) {
      console.log(args);
      try {
        const response = await this.$axios.$get("/reservations/findAllbyMany/", {
          params: { ...this.clean(args) },
        });
        if (response) {
          console.log("Naruto ", response);
          return response;
        }
      } catch (error) {
        console.log("ici", error);
        return [];
      }
    },
    getCategorieNameById(id) {
      return this.$store.state.categories.filter(
        (categorie) => categorie._id == id
      )[0]?.name
        ? this.$store.state.categories.filter(
            (categorie) => categorie._id == id
          )[0].name
        : id;
    },


  },
  created() {
      console.log("Allô icic cheiihk")
    if (this.isHote) {
      // On charge les trucs de l'hote
      this.getCategorires().then((response) => {
        this.$store.commit("SetCategories", response);
      });

      this.reload(); 
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
