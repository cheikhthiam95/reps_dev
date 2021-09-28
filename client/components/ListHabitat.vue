<template>
  <section>
    <div>
      <div>
        <h2>Tous les Logements</h2>

        <!--  <section class="contact" id="contact">
          <div class="row">
            <div
              class="
                col-md-6
                col-md-offset-3
                col-sm-8
                col-sm-offset-2
                col-lg-4
                col-lg-offset-4
                col-xs-12
              "
            >
              <form @submit.prevent="reloadByAdmin(filters)">
                <h2 class="text-center mb-3 mt-4 text-dark">Filter</h2>
                <div class="inputBox">
                  <input
                    type="text"
                    name="Hote"
                    v-model="filters.hoteId"
                    class="input-full-line"
                    placeholder="hote"
                  />
                </div>
                <div class="inputBox">
                  <input
                    type="checkbox"
                    class="input-full-line"
                    name="Status"
                    v-model="filters.published"
                    placeholder="statut "
                  />
                </div>

                <div class="form-group">
                  <button type="submit" class="btn btn-primary btn-block">
                    Filter
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section> -->

        <table class="responstable" v-if="habitats.length > 0">
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
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="habitat in habitats" v-bind:key="habitat._id">
              <td>{{ getCategorieNameById(habitat.categorieId) }}</td>
              <td>{{ habitat.name }}</td>
              <td>{{ habitat.description }}</td>
              <td>
                {{ habitat.reservationStatus }}
              </td>
              <td>
                <br /><span> {{ habitat.publishedStatus }}</span>
              </td>
              <td>{{ habitat.price }}</td>
              <td>{{ habitat.superficie }}</td>
              <td>{{ habitat.address.fullAddress.locality }}</td>

              <td>{{ habitat.address.formatted_address }}</td>
              <td>
                <span>
                  <label class="switch">
                    <input
                      v-if="isHote"
                      type="checkbox"
                      v-model="habitat.published"
                      @change="
                        updatePushedStatus(
                          { published: habitat.published },
                          habitat._id
                        )
                      "
                    />
                    <input
                      v-if="isAdmin"
                      type="checkbox"
                      v-model="habitat.isPublished"
                      @change="
                        updatePushedStatus(
                          { isPublished: habitat.isPublished },
                          habitat._id
                        )
                      "
                    />

                    <span class="slider round"></span>
                  </label>
                </span>
              </td>

              <td>
                <div style="display: flex; justify-content: space-evenly">
                  <span><edite-habitat :habitat="{ ...habitat }" /></span>
                  <span><delete-habitat :habitat="{ ...habitat }" /></span>
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
const { mapState, mapActions, mapGetters } = createNamespacedHelpers("auth");
export default {
  components: { EditeHabitat },
  middleware: "auth",
  created() {
    console.log("L'habitat  reçu ", this.habitats);

    this.getCategorires();

    if (this.isAdmin) {
      this.reloadByAdmin();
    }
    if (this.isHote) {
      this.reload();
    }

    this.$root.$on("reloadTable", () => {
      "Danle on ononon";
      this.getHabitatsForHote();
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
    ...mapGetters(["habitats"]),
  },
  data() {
    return {
      filters: {},
    };
  },
  methods: {
    ...mapActions(["getHabitatsForHote"]),
    ...mapActions(["getCategorieNameById"]),
    ...mapActions(["getCategorires"]),

    updatePushedStatus(status, idHabitat) {
      console.log("Allô", status);

      setTimeout(async () => {
        try {
          const response = await this.$axios.$put("/habitats/" + idHabitat, {
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
      console.log("jajoute un habitat");
    },
    reloadByAdmin(args) {
      console.log("Les donne du filter", args);
      this.filterHabitat(args).then((response) => {
        this.habitats = response;
      });
    },
    reload() {
      this.getHabitatsForHote();
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
        const response = await this.$axios.$get("/habitats/findAllbyMany/", {
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
  },
};
</script>

<style lang="scss" scoped>
</style>
