<template lang="">
  <div>
    <validation :motif="monmotif"></validation>
    <new-user :role="role" :state-destination="stateDestination" :text="text" :redirect-to="redirectTo"></new-user>
    
  </div>
</template>
<script>  

export default {
  layout: "login",
  data() {
    return {
      role:"locataire",
      stateDestination:"currentLocatare",
      redirectTo:"locataire",
      monmotif:"Amitié",
      text:{
        title:"Devenir un Locataire"
      }
    };
  }
};
</script>
<style lang="">
</style>
