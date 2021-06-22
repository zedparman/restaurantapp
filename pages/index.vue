<template>
  <div>
    <h1>Hello world!</h1>
    <!-- <div v-for="restaurant in restaurantList" :key="restaurant.servicePlaceId">{{ restaurant }}</div> -->
    <div v-for="todo in allTodos" :key="todo.id">{{ todo.title }}</div>

  </div>
</template>

<script>
// import { mapState, mapActions } from 'vuex';

// export default {
//   methods: {
//     ...mapActions([
//       'setRestaurant', //also supports payload `this.nameOfAction(amount)` 
//     ])
//   },
//   computed: {
//     ...mapState([
//       'restaurantList'
//     ])
//   }

// //   computed: {
// // restaurantList() {
// // return this.$store.state.restaurantList;
// // }
// // },
// // mounted() {
// // this.$store.dispatch('setRestaurant');
// // }

// };






import { mapGetters, mapActions } from "vuex";

export default {
name: "Todos",
methods: {
...mapActions(['fetchTodos'])
},
computed: mapGetters(["allTodos"]),

created() {
  this.fetchTodos();
}

  };


</script>

<style lang="scss" scoped>

</style>