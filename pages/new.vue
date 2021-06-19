<template>
    <v-app>
        <v-container>   
                <div mt-5>{{ $store.state.counter }}</div>
                <v-btn @click="$store.dispatch('decreaseCounter')">-</v-btn>
                <v-btn @click="$store.dispatch('increaseCounter')">+</v-btn>
        </v-container>
    </v-app>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
div {
    margin-bottom: 10px;

}
.counter{
    font-size: 80px;
}
.buttons button{
    font-size: 40px;
}
</style>