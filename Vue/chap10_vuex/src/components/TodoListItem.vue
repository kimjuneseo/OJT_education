<template>
  <tr>
    <td>{{todo.id}}</td>
    <td><span :class="{done: todo.done}">{{todo.text}}</span></td>
    <td>
      <button class="btn btn-primary"   @click="updateTodo(todo.id)">Complete</button>
    </td>
    <td>
      <button class="btn btn-danger"    @click="deleteTodo(todo.id)">Delete</button>
    </td>
  </tr>
</template>

<script>
export default {
  props: ['todo'],
  methods: {
    updateTodo(id) {
      // namespaced: true 형태이면 storeName/methodName 형태로 호출
      // namespaced: false 형태이면 methodName 형태로 호출
      this.$store.commit('todoListStore/updateTodo', id)
    },
    deleteTodo(id) {
      // mutations 호출
      // this.$store.commit('todoListStore/deleteTodo', id);

      // actions 호출
      this.$store.dispatch('todoListStore/deleteTodoAction', id);
    }
  }
}
</script>

<style scoped>
  .done { text-decoration: line-through; }
</style>