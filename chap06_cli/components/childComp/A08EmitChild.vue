<template>
  <div>
    <h5>Child Component</h5>
    <button   @click="sendNum">Num</button>
    <button   @click="sendObject">Data</button>
  </div>
</template>

<script>
export default {
  // emits: ['numEvent', 'objEvent'],
  emits: {                              // 전달되는 값 검증
    numEvent(data) {
      if(typeof(data) !== 'number') return false
      else return true
    },
    objEvent(data) {
      if(data.name && data.arr) return true;
      else return false
    }
  },
  data() {
    return {
      num: 10,
      name: 'NolBu',
      arr: [10, 20],
      user: {name: 'HungBu', age: 20}
    }
  },
  methods: {
    sendNum() {
      this.$emit('numEvent', this.num)
    },
    sendObject() {
      const obj = {
        name: this.name,
        arr: this.arr,
        user: this.user
      }
      this.$emit('objEvent', obj);
    }
  }
}
</script>