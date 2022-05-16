<template>
  <div class="banner">
    <h5>News Component</h5>
    <p>With Options API, we define a component's logic using an object of options such as data, methods, and mounted.
      Properties defined by options are exposed on this inside functions, which points to the component instance:<br>
      <br>

      Time: {{new Date().toLocaleString()}}  
    </p>
  </div>
</template>

<script>
export default {
  data(){
    return {}
  },
  activated() {
    console.log('home activated')
  },
  deactivated() {
    console.log('home deactivated')
  }
}
</script>