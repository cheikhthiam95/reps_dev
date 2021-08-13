<template>
  <div class="box">
    <img src="~/assets/images/p-1.jpg" alt="" />
    <div class="content">
      <h3><i class="fas fa-map-marker-alt"></i> La Gertrude | Paris</h3>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, nam!</p>
      <div class="stars">
        <i v-for="(item, index) in note" :key="index" class="fas fa-star"></i>
        <i v-for="(item, index) in (5-note)" :key="index" class="far fa-star"></i>
      </div>
      <div class="price">$90.00 <span>$120.00</span></div>
      <a href="#" class="btn">Réserver</a>
    </div>
  </div>
</template>

<script>
export default {
    props: {
        note: {
            type: Number,
            default: 0,
            validator: note => note && note >= 0 && note <= 5
        },
        image: {
            type: String,
            default: undefined
        },  
        price: {
            type: Number,
            required: true
        },
        priceDiscount: {
            type: Number,
            default: 0
        }
    }
};
</script>

<style lang="scss" scoped></style>
