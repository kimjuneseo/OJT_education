<template>
  <div class="card-body">
    <h1>Chap09 Axios</h1>

    <A02Modal></A02Modal><br>
    <A01Axios></A01Axios>
  </div>
</template>

<script>
// npm i axios
import 'bootstrap/dist/css/bootstrap.min.css'

import A01Axios from './components/A01Axios.vue';
import A02Modal from './components/A02Modal.vue';
export default {
  components: { A01Axios, A02Modal },
}
</script>

<style>

</style>
