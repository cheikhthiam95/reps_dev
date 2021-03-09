<template lang="">
  <div>

      <div class="row">

        <div class="col-12 mt-5">
          <atypik-table :texts="texts"></atypik-table>
      </div>

      </div>


  </div>
</template>
<script>
export default {
  data() {
    return {
      params_ids: ["habitats", "hotes", "locataires", "reservations"],
      texts: {
        title: this.$route.params.lang,
      },
    };
  },
  methods: {
    goTo(args) {
      console.log(this.$route);
    },
    checkingAccessRight() {
      return this.params_ids.includes(this.$route.params.lang);
    },
  },
  mounted() {
    if (!this.checkingAccessRight()) {
      this.$router.back();
    }
    console.log(this.$store.state.session);
  },
};
</script>
<style lang="">
</style>