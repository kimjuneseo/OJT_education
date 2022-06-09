<template>
  <div class="card-body" id="app">
    <h3>A02 Props</h3>

    <div>
      <div>
        속성명은 변수명이 카멜표기법(Camel Case)인 경우 케밥표기법(Kebab Case)으로 변경해서 기술한다.<br>
        전달되는 값은 모두 문자열이다. 값으로 전달하기 위해서는 v-bind를 이용한다.<br>
      </div>
      <br>

      <!-- type check 및 default 등.. -->
      <TwoComp name="NolBu" :age="30" :add="address" :arr="arr" :user="user"
              :on-add="onAdd" is-checked    :change-address="changeAddress"></TwoComp>
      <br>
      <br>

      <!-- 값만 가져옴-->
      <OneComp name="NolBu" :age="30" :add="address" :arr="arr" :user="user"
              :on-add="onAdd" is-checked    :change-address="changeAddress"></OneComp>
      <OneComp name="NolBu" :age="30" :add="address" :arr="arr" :user="user"
              :on-add="onAdd" is-checked    :change-address="changeAddress"></OneComp>
    </div>
  </div>
</template>

<script>
import OneComp from './childComponent/A05OneComp.vue';
import TwoComp from './childComponent/A05TwoComp.vue';
export default {
  components: { OneComp, TwoComp },
  data() {
    return {
      address: 'Seoul',
      arr: [10, 20],
      user: {name: 'HungBu', age: 30}
    }
  },
  methods: {
    onAdd: (x, y) => `${x} + ${y} = ${x + y}`,
    changeAddress() {
      this.address = 'Busan';
    }
  }
}
</script>

<style scoped>

</style>