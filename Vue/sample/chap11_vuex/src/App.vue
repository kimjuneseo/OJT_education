<template>
  <div class="card-body">
    <HeaderLink></HeaderLink>
    <hr>

    <router-view/>
  </div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.min.css'
import HeaderLink from './views/HeaderLink.vue'

export default {
  components: { HeaderLink }
}
</script>
