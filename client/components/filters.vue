<template>
    <div>
           <section class="contact" id="contact">
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
                <form @submit.prevent="submitLogin">
                  <h2 class="text-center mb-3 mt-4 text-dark">Connexion</h2>
                  <div class="inputBox">
                    <input
                      type="text"
                      name="username"
                      v-model="filters.username"
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
                      v-model="filters.password"
                      placeholder="Mot de passe "
                      required="required"
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
          </section>
    </div>
</template>


<script>
export default {
    
}
</script>