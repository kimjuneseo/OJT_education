<template>
  <div id="app" class="card-body">

    <h3>A01 Binding</h3>
    바인딩 식 내부에서는 식만 사용 가능 / {{name}}<br>
    <br>

    <div id="one">
      <h5>1. 일반적 바인딩</h5>
      일반적인 단방향 바인딩: {{name}}<br>
      함수의 리턴값: {{onAdd(10, 20)}}<br>
      함수의 리턴값: {{onMin(10, 20)}}<br>
      배열: {{arr[0]}} / {{arr[1]}} / {{arr[2]}}<br>
      객체: {{user.name}} / {{user.age}} / {{user.address}}<br>
    </div>
    <br>

    <div>
      <h5>2. 바인딩 연산</h5>
      일반적 연산: {{10 + 20}}<br>
      속성 참조: {{arr.length}}<br>
      속성 참조 연산: {{arr.length * 100}}<br>
      비교 연산: {{name === 'Nolbu'}}<br>
      비교 연산: {{arr[0] > 10 && arr[1] > 10}}<br>
      삼항 연산: {{name === 'NolBu' ? '관리자' : '일반 유저'}}<br>
    </div>
    <br>

    <div>
      <h5>3. 바인딩 관련 지시자</h5>
      바인딩: {{txt}}<br>
      v-text: <span v-text="txt"></span><br>  <!-- 태그 안에 문자가 있으면 에러 -->
      v-html: <span v-html="txt"></span><br>

      <!-- 처음 1번 바인딩 된 후에 대상 값이 변경되어도 값이 변경되지 않도록 처리 -->
      v-once: <span v-once>{{txt}}</span><br>

      <!-- {{}} 가 바인딩 식이 아닌 일반 텍스트로 인식하도록 처리 -->
      v-pre: <span v-pre>{{txt}}</span><br>
      <br>
      <button   v-on:click="changeText('Good Afternoon')">Change</button>
      <button   @click="changeText('Good Evening')">Change</button>
      <br>
    </div>

    <div>
      CLI 기반에서는 둘 다 에러로 출력된다<br>
      <!-- Data에 존재하지 않는 변수: {{age}}<br>
      Data에 존재하지 않는 객체: {{ obj && obj.name}} -->
    </div>
    <br>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: 'NolBu',
      arr: [10, 20],
      user: {name: 'HungBu', age: 20},
      txt: '<b>Good Morning</b>'
    }
  },
  methods: {
    onAdd: function(x, y) {
      console.log(this);
      return `${x} + ${y} = ${x + y} - ${this.name}`
    },
    onMin: (x, y) => {
      console.log(this);
      return `${x} - ${y} = ${x - y}`
    },
    changeText: function(msg) {
      this.text = '<b><i>' + msg + '</i></b>';
    }
  },
}
</script>

<style scoped>

</style>