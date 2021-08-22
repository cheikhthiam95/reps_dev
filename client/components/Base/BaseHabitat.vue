<template>
  <div class="box">
    <img src="~/assets/images/p-1.jpg" alt="" />
    <div class="content">
      <h3>
        <i class="fas fa-map-marker-alt"></i
        >{{ habitat.address.fullAddress.locality }}
        {{ habitat.address.formatted_address }}
      </h3>
      <p>{{ habitat.description }}</p>
      <div class="stars">
        <i v-for="(item, index) in note" :key="index" class="fas fa-star"></i>
        <i
          v-for="(item, index) in 5 - note"
          :key="index"
          class="far fa-star"
        ></i>
      </div>
      <div class="price">
        {{ habitat.price }}
        <span v-if="habitat.priceDiscount != 0">{{
          habitat.priceDiscount
        }}</span>
      </div>
      <button href="#" class="btn" @click="book(habitat)">Réserver</button>
    </div>
  </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapState,mapGetters } = createNamespacedHelpers("auth");

export default {
  computed: {
    ...mapGetters(["logged"]),
    ...mapState(["session"]),

  },
  props: {
    habitat: {
      default: {},
      type: Object,
    },
    note: {
      type: Number,
      default: 0,
      validator: (note) => note && note >= 0 && note <= 5,
    },
    image: {
      type: String,
      default: undefined,
    },
    price: {
      type: Number,
      required: true,
    },
    priceDiscount: {
      type: Number,
      default: 0,
    },
  },

  methods: {
    async book() {
      if (this.logged) {
        try {
          const response = await this.$axios.$post(
            "/reservations/newReservation/",
            {}
          );
          if (response) {
            console.log("Naruto ", response);
            return response;
          }
        } catch (error) {
          console.log("ici", error);
          return [];
        }
      } else {
        this.$toast.success("Vous devez être connnecté pour faire une réservation !");
        this.$router.replace({ name: "login" });
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>
