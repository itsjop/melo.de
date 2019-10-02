// const store = new Vuex.Store({
//   state:{
//     loadingStatus: 'notLoading',
//     todos: [
//       {id: 1, text:"one", done: false},
//       {id: 2, text:"two", done: true},
//       {id: 3, text:"three", done: true},
//     ]
//   },
  
//   mutations:{
//     SET_LOADING_STATUS(state, status){
//       state.loadingStatus = status
//     },
//     SET_TODOS(state,todos){
//       state.todos = todos
//     }
//   },
  
//   actions:{ // Actions are used for asynchronous things 
//     fetchTodos(context){
//       // method names are passed as strings
//       context.commit('SET_LOADING_STATUS', 'loading')
//     }
//   },

//   getters:{ // Getters are like computed vars, which do math to them before they come back
//     doneTodos(state){
//       return state.todos.filter(todo => todo.done)
//     }

//   }
// })

// //actions call mutations, which change state
