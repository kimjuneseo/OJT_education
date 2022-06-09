
const todoListStore = {
  namespaced: true,
  state: {
    todoList: [
      { id: 1, text: '첫 번째 할 일', done: true },
      { id: 2, text: '두 번째 할 일', done: false },
      { id: 3, text: '세 번째 할 일', done: false },
    ],
    cnt: 4,
  },
  mutations: {
    updateTodo: (state, payload) => {
      const todo = state.todoList.find( todo => todo.id === payload );
      todo.done = !todo.done;
    },
    deleteTodo: (state, payload) => {
      const index = state.todoList.findIndex( todo => todo.id === payload );
      state.todoList.splice(index, 1);
    },
    addTodo: (state, payload) => {
      const todo = {id: state.cnt++, text: payload, done: false}
      state.todoList.push(todo);
    },
  },
  actions: {
    // value => 넘어오는 값
    // action => mutations를 참조
    deleteTodoAction: (action, value) => {
      setTimeout( () => {
        let data = Number(value);
        if(isNaN(data)) data = -1;
        action.commit('deleteTodo', data);
      }, 1500);
    }
  },
  getters: {},
  modules: {}
}
export default todoListStore;
