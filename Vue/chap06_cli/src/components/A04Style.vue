<template>
  <div id="app" class="card-body" v-cloak>
    <h3>A10 Style & Class</h3>
    
    <div style="color: orange; font-size: 24pt;">{{hello}}</div>
    <div v-bind:style="{color: 'orange', fontSize: '24pt'}">{{hello}}</div>
    <div :style="[styleOne, styleTwo]"  
            @mouseenter="enterEvent" @mouseleave="leaveEvent">{{hello}}</div>
    <br>

    <h3>Class Binding</h3>

    <div class="one"  v-bind:class="'two'">{{hello}}</div>
    <div class="one"  :class="classTwo">{{hello}}</div>
    <div class="one"  :class="[classTwo, 'three']">{{hello}}</div>
    <br>

    <!-- {} 방식은 기본이 변수 참조가 아닌 클래스 이름을 변수처럼 참조
      변수명은 배열로 사용
    -->
    <div class="one"  :class="{two: true, three: isChecked}">{{hello}}</div>
    <div class="one"  :class="{[classTwo]: true, three: isChecked}">{{hello}}</div>
    <input type="checkbox"    v-model="isChecked"> Check<br />
    <br>

    <input type="text" class="form-control" v-model="num" :class="warnEvent"/>
    <br>
    <br>
    <div :class="$style.four">Hello World</div>
    <div :class="md.five">Hello World</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      hello: 'Hello World!!',
      styleOne: {color: 'orange', fontSize: '24pt'},    // computed로 빼는게 좋음
      classTwo: 'two',
      isChecked: false,
      num: 1,
    }
  },
  computed: {
    styleTwo: () => ({fontWeight: 'bold'}),    // {를 함수의 시작으로 인식한다.
    warnEvent(){
      if (this.num <= 1 || this.num >= 100) return {'warning': true}
      else return {'warning': false}
    }
  },
  methods: {
    enterEvent() {
      this.styleOne.background = 'gray';      // 추가 
      this.styleOne.color = 'white'           // 변경
    },
    leaveEvent() {
      this.styleOne.background = '';
      this.styleOne.color = 'orange'
    }
  }
}
</script>

<!-- style만 적으면 어느 컴퍼넌트에 기술되던 모두 전역 css로 등록된다 -->
<style>
  .one { color: orange; }
</style>

<!-- 자신 컴퍼넌트와 하위 컴퍼넌트 전용의 CSS 등록 -->
<style scoped>
  .two { font-size: 24pt; }
  .three { font-weight: bold; }
  .warning {background-color: orange; color: gray; }

  [v-cloak] { display: none; }
</style>

<!-- 이름이 없으면 $style.css명 형태로 사용 -->
<style module>
  .four { color: orange; background: gray }
</style>

<style module="md">
  .five { color: gray; background: orange }
</style>