<template>
  {{labelName}}: 
  <input type="text" class="form-control" :value="modelValue" @input="$emit('update:modelValue', $event.target.value)">
</template>

<script>
export default {
   props: ['modelValue', 'labelName'],
  emits: ['update:modelValue'],
}
</script>
<style scoped>
  
</style>
