<template>
  <div>
    <h1>Hello world</h1>
    <div v-for="restaurant in restaurantList" :key="restaurant.id">{{ restaurant }}</div>
  </div>
</template>

<script>
  export default {
    computed: {
      restaurantList() {
        console.log(this.$store.state.restaurantList)
        return this.$store.state.restaurantList; 
      }
    },
  }
</script>

<style lang="scss" scoped>

</style>