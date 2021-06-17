<template>
  <div>
    <h1>Hello world</h1>
    <div v-for="restaurant in restaurantList" :key="restaurant.servicePlaceId">{{ restaurant }}</div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  methods: {
    ...mapActions([
      'setRestaurant', //also supports payload `this.nameOfAction(amount)` 
    ])
  },
  computed: {
    ...mapState([
      'restaurantList'
    ])
  }

//   computed: {
// restaurantList() {
// return this.$store.state.restaurantList;
// }
// },
// mounted() {
// this.$store.dispatch('setRestaurant');
// }

};
</script>

<style lang="scss" scoped>

</style>