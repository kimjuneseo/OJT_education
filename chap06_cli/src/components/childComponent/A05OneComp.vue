<template>
  <h5>Child Props [변경 불가 - immutable]</h5>
  <div>
    Name: {{name}}<br>
    Age: {{age + 100}}<br>
    Address: {{add}}<br>
    Array: {{arr[0]}} / {{arr[1]}} / {{arr[2]}}<br>
    User: {{user.name}} / {{user.age}} / {{user.address}}<br>
    Method: {{onAdd(10, 20)}}<br>
    isChecked: {{isChecked ? 'TRUE' : 'FALSE'}}<br>
    <br>
    <button   @click="changeAddress">Address</button>
  </div>
</template>

<script>
export default {
  props: ['name', 'age', 'add', 'arr', 'user', 'onAdd', 'isChecked', 'changeAddress'],
}
</script>