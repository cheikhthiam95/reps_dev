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
const { mapState, mapGetters } = createNamespacedHelpers("auth");
const { mapActions } = createNamespacedHelpers("utils");

export default {
  computed: {
    ...mapGetters(["logged"]),
    ...mapState(["session"]),
    ...mapActions(["setHabitat"]),
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
     book(args) {
      console.log("Le habita", { ...args });
      // try {
      //   const response = await this.setHabitat(1);
      //   if (response) {
          this.$store.commit("setCurrentHabitat", args);
          this.$router.replace({ name: "book-habitatId" , params:{habitatId:args._id}});
        // }
      // } catch (error) {
      //   console.log(error)
      // }
    },
  },
};
</script>

<style lang="scss" scoped></style>
