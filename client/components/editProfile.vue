<template>
  <div>
    <h1>
      <button class="btn-dark" @click="$refs.editProfileModal.openModal()">
        Modifier mes informations personnelles
      </button>
    </h1>

    <div class="form-modal">
      <div class="row">
        <div class="col-md-4 col-md-offset-4">
          <modal ref="editProfileModal">
            <template v-slot:header>
              <h1>Metre à jour mon profile</h1>
            </template>

            <template v-slot:body>
              <form @submit.prevent="submitEditProfile">
                <div class="inputBox">
                  <input
                    type="text"
                    name="username"
                    v-model="userInfos.firstName"
                    class="input-full-line"
                    placeholder="Nom d'utilisateur"
                    required="required"
                  />
                </div>

                <div class="inputBox">
                  <input
                    type="text"
                    name="username"
                    v-model="userInfos.lastName"
                    class="input-full-line"
                    placeholder="Nom d'utilisateur"
                    required="required"
                  />
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
              </form>
            </template>
          </modal>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VueGoogleAutocomplete from "vue-google-autocomplete";

export default {
  components: {
    VueGoogleAutocomplete,
  },

  mounted() {
    this.getUserInfos();
  },
  props: {
    userId: {
      type: String,
      default: "",
    },
  },
  data: () => ({
    userInfos: {},
  }),
  methods: {
    async submitEditProfile() {},

    async getUserInfos() {
      this.loading = true;
      try {
        const response = await this.$axios.$get("/users/" + this.userId);
        if (response && response._id) {
          this.userInfos = response;
        }
      } catch (error) {
        console.log("ici", error);
      }
    },

    /**
     * When the location found
     * @param {Object} addressData Data of the found location
     * @param {Object} placeResultData PlaceResult object
     * @param {String} id Input container ID
     */
    getAddressData: function (addressData, placeResultData, id) {
      this.userInfos.address = {
        fullAddesse: addressData,
        formatted_address: placeResultData.formatted_address,
      };
    },
  },
};
</script>
