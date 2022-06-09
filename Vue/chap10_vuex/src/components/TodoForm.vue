<template>
  <form>
    <div class="input-group">
      <input type="text" class="form-control" v-model="text" ref="todoRef" />
      <div class="input-group-append">
          <button type="submit" class="btn btn-primary mr-1"  
                  @click.prevent="sendData">Submit</button>
      </div>
    </div>  
  </form>
</template>

<script>
export default {
  data() {
    return {
      text: ''
    }
  },
  methods: {
    sendData() {
      this.$store.commit('todoListStore/addTodo', this.text);
      this.text = '';
      this.$refs.todoRef.focus();
    }
  }
}
</script>

<style scoped>

</style>