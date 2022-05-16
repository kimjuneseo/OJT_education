<template>
  <div id="app" class="card-body">

    <h3>{{title}}</h3>
    바인딩 식 내부에서는 식만 사용 가능<br>
    <br>

    <div>
      <h5>1. 일반적 바인딩</h5>
      일반적인 단방향 바인딩: {{name}}<br>
      함수의 리턴값: {{onAdd(10, 20)}}<br>
      함수의 리턴값: {{onMin(10, 20)}}<br>
      배열: {{arr[0]}} / {{arr[1]}} / {{arr[2]}}<br>
      객체: {{obj.name}} / {{obj.age}} / {{obj.address}}<br>
    </div>
    <br>

    <div>
      <h5>2. 바인딩 연산</h5>
      일반적 연산: {{ 1 + 2 }}<br>
      속성 참조: {{ arr.length}}<br>
      속성 참조 연산: {{ arr.length * 10}} / {{obj.name.toUpperCase()}}<br>
      비교 연산: {{arr.length > 2}}<br>
      비교 연산: {{arr.length >= 2 && obj.name === 'HungBu'}}<br>
      삼항 연산: {{obj.name === 'HungBu' ? '관리자' : '사용자'}}<br>
    </div>
    <br>

    <div>
      <h5>3. 바인딩 관련 지시자</h5>
      v-text: <span v-text="txt"></span><br>
      v-html: <span v-html="txt"></span><br>
      v-once: <span v-once>{{txt}}</span><br>
      v-pre: <span v-pre>{{txt}}</span><br>
      <br>
      <button v-on:click="changeText('Good Afternoon')">Change</button>
      <button v-on:click="changeText('Good Evening')">Change</button>
      <br>
    </div>

    <div>
      둘 모두 경고 출력<br>

      <!-- Data에 존재하지 않는 변수: {{age}}<br> -->
      <!-- Data에 존재하지 않는 객체: {{user && user.name}}<br> -->
    </div>
    <br>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: 'A01 Binding',
      name: 'NolBu',
      arr: [10, 20],
      obj: { name: 'HungBu', age: 30},
      txt: '<b>Good Morning</b>'
    }
  },
  methods: {
    onAdd(x, y) {
      return `${x} + ${y} = ${x + y} ${this.name}`
    },
    onMin: (x, y) => {
      // console.log(this);                 // Window
      return `${x} + ${y} = ${x - y}`
    },
    changeText(txt) {
      this.txt = `<b>${txt}</b>`
    }
    
  }
}
</script>

<style scoped>

</style>