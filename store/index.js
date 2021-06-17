export const state = () => ({
    restaurantList: []
})

// export const getters = {
//     getterValue: state => {
//         return state.value
//     }
// }

export const mutations = {
    SET_RESTAURANT: (state, payload) => {
        state.restaurantList = payload
    }
}

export const actions = {
    setRestaurant: async ({ commit }, payload) => {
        try {
            // let result = await axios.get('http://denj.ichimoku-fibo.ir/menu?servicePlaceId=1') 
            let result = await axios.get('https://jsonplaceholder.typicode.com/posts') 
            commit('SET_RESTAURANT', result.data)
            console.log(result)
        } catch (error) {
            console.log(error)
        }
    }
}