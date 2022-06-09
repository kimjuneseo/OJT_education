<template>
  <div class="card-body">
    <h1>Chap10 Vuex</h1>

    <TodoTemplate></TodoTemplate><br>
    <CounterComp></CounterComp>
  </div>
</template>

<script>
// npm i vuex
import CounterComp from './components/CounterComp.vue';
import TodoTemplate from './components/TodoTemplate.vue';
export default {
  components: { CounterComp, TodoTemplate },
}
</script>

<style>

</style>
