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
                    v-model="userInfo.firstName"
                    class="input-full-line"
                    placeholder="Nom d'utilisateur"
                    required="required"
                  />
                </div>
                <div class="inputBox">
                  <input
                    type="password"
                    class="input-full-line"
                    name="password"
                    v-model="userInfo.password"
                    placeholder="Mot de passe "
                    required="required"
                  />
                </div>

                <div class="form-group">
                  <button type="submit" class="btn btn-primary btn-block">
                    Log in
                  </button>
                </div>
                <div class="clearfix">
                  <input type="checkbox" id="remember" />
                  <label for="remember">remember me</label>
                  <nuxt-link to="/forget_password">
                    <p class="text-right">Mot de passe oublié ?</p>
                  </nuxt-link>
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
export default {
  props: {
    user: {
      type: String,
      default: ""
    },
  },
  data: () => ({}),
  methods: {
    async submitEditProfile() {},
  },
};
</script>
