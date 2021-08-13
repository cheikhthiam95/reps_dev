<template>
  <div>
    <new-habitat />
    <div class="card-columns">
      <div v-for="habitat in habitats" :key="habitat.id" class="card" style="width:300px">
        <img class="card-img-top" src="img_avatar1.png" alt="Card image" />
        <div class="card-body">
          <h4 class="card-title">{{ habitat.name }}</h4>
          <p class="card-text">{{ habitat.description }}</p>
          <a href="#" class="btn btn-yellow" @click.prevent="reserver(habitat)">Reserver</a>
        </div>
      </div>
      <p v-if="!habitats.length">Vous n'avez aucun habitat disponible</p>
    </div>
  </div>
</template>

<script>
export default {
  layout: "user-layout",
  middleware: "loadOptions",
  data: () => ({
    habitats: [],
    number: 0,
  }),
  created() {
    this.load();
  },
  methods: {
    async load() {
      try {
        const [number, habitats] = await Promise.all([
          this.$axios.$get("/reservations/count"),
          this.$axios.$get("/habitats/")
        ]);
        this.number = number;
        this.habitats = habitats;
      } catch {
        console.log("ici", error);
      }
    },
    async reserver(habitat) {
      console.log("Réservercalled", habitat);
      const args = {
        id_locataire: "9999999999999999999",
        id_habitat: habitat.id,
        periode: "du  12 au 20",
      };
      const response = await this.$axios.$post("/reservations/newReservation/", args);
      console.log("La réponse de addReservation est : ", response);
      if (response && response.id) {
        // this.$router.push('/habitats/'+response.id)
        console.log("La réponse de addReservation est : ", response);
      }
    },
  },
};
</script>
