<template>
  <div id="payments">
    Тут оплаты
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Payments",
  components: {

  },
  created(){
    if(!this.$store.state.auth){
      this.$router.push({path: '/login'});
    }
  }
};
</script>
