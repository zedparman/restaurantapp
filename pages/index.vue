<template>
  <div>
    <h1>Hello world</h1>
    <div v-for="restaurant in restaurantList" :key="restaurant.servicePlaceId">{{ restaurant }}</div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  computed: {
    ...mapState([
      'restaurantList',
    ])
  },
};
</script>

<style lang="scss" scoped>

</style>