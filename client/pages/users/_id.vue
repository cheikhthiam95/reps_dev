<template lang="">
  <div>
      <div class="row">
<div class="col-4 mt-5">
    descriptiond
</div>
 <div class="col-4 mt-5">
    <form @submit.prevent="login(reservation)"> 
        <div class="form-group">
            <input type="date" v-model="reservation.fdate" class="form-control" placeholder="Date d'arrivé" required="required">
        </div>
        <div class="form-group">
            <input type="date" class="form-control" v-model="reservation.tdate" placeholder="Date de sortie" required="required">
        </div>
     <div class="form-group">
            <input type="number" class="form-control" v-model="reservation.nbAdult" placeholder="Nombre d'addulte" required="required">
        </div>
       
              <div class="form-group">
            <input type="number" class="form-control" v-model="reservation.nbchild" placeholder="Nombre d'addulte" required="required">
        </div>
        <div class="form-group">
            <button type="submit" class="btn btn-dark btn-block">RESERVER</button>
        </div>  
    </form>
</div>
      </div>

  </div>
</template>
<script>
export default {
    data(){
        return{
            reservation:{}

        }
    }
}
</script>
<style lang="">
    
</style>