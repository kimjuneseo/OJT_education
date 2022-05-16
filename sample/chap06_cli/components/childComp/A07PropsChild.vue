<template>
  <div>
    <h3>Chap03 Refs Child</h3>

    <div>
      <input type="text" class="form-control"     :value="name">
      <input type="text" class="form-control"     :value="age" ref="ageRef">
      <button @click="changeColor" ref="btnRef">Click</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: 'NolBu',
      age: 30
    }
  },
  methods: {
    changeName(name) {
      this.name = name;
    },
    changeColor() {
      this.$refs.ageRef.style.color = 'lightgray'
    }
  },
  mounted() {
    document.querySelector('input[type="text"]').style.background = 'lightgray';
    this.$refs.ageRef.style.color = 'orange';
  }
}
</script>