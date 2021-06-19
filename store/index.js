export const state = () => ({
    counter: 0
})

// export const getters = {
//     getterValue: state => {
//         return state.value
//     }
// }

export const mutations = {
    decreaseCounter: (state) => {
        state.counter--
    },
    increaseCounter: (state) => {
        state.counter++
    }
}

export const actions = {
    increaseCounter() {
        axios('https://www.random.org/integers/?num=1&min=1&max=100&col=5&base=10&format=html&rnd=new').then(response => {
            console.log('response: ', response)
        })
        commit('updateValue', payload)
    }
}



// export const state = () => ({
//     value: 'myvalue'
// })

// export const getters = {
//     getterValue: state => {
//         return state.value
//     }
// }

// export const mutations = {
//     updateValue: (state, payload) => {
//         state.value = payload
//     }
// }

// export const actions = {
//     updateActionValue({ commit }) {
//         commit('updateValue', payload)
//     }
// }




























// export const state = () => ({
//     todos: []
// })

// // export const getters = {
// //     getterValue: state => {
// //         return state.value
// //     }
// // }

// // export const mutations = {
// //     SET_RESTAURANT: (state, payload) => {
// //         state.payload = payload
// //     }
// // }

// // export const actions = {
// //     setRestaurant: async ({ commit }) => {
// //         try {
// //             // let result = await axios.get('http://denj.ichimoku-fibo.ir/menu?servicePlaceId=1') 
// //             let result = await axios.get('https://jsonplaceholder.typicode.com/todos') 
// //             commit('SET_RESTAURANT', result.data)
// //             console.log(result)
// //         } catch (error) {
// //             console.log(error)
// //         }
// //     }
// // }


// const getters = {
//     allTodos: state => state.todos
//     };
    

// const actions = {
//     async fetchTodos({ commit }) {
//     const response = await axios.get(
//     'https://jsonplaceholder.typicode.com/todos'
//     );
    
//     commit('setTodos', response.data);
//     }
//     };
    
//     const mutations = {
//     setTodos: (state, todos) => (state.todos = todos)
//     };
    