<template>
  <div>
    <table class="table">
      <thead>
        <tr>
            <th style="{width:'10%'}">ID</th>
            <th>Todo</th>
            <th style="{width:'10%'}">Complete</th>
            <th style="{width:'10%'}">Delete</th>
        </tr>
      </thead>
      <tbody>
        <!-- TodoListItem에서 사용할 값을 :todo="todo" 속성으로 전달 -->
        <TodoListItem v-for="todo in todoList" :key="todo.id" :todo="todo"></TodoListItem>
      </tbody>
    </table>
  </div>
</template>

<script>
import TodoListItem from './TodoListItem.vue';
export default {
  components: { TodoListItem },
  computed: {
    todoList() {
      // useState() => this.$store
      return this.$store.state.todoListStore.todoList;
    }
  }
}
</script>

<style scoped>

</style>
