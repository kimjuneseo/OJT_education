<template>
  <div class="card-body">
    <h3>A07 Slot Component</h3>

    <div>
      Name: {{name}}
    </div>

    <slot>이 내용이 기본값으로 표시된다.</slot>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: 'NolBu'
    }
  }
}
</script>