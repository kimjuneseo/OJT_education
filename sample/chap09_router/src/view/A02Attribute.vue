<template>
   <div class="card-body" id="app">
    <h3>A02 Attribute Directive</h3>

    <div >
      <h5>1. 속성 바인딩</h5>
      <!-- <input type="text" class="form-control" value="{{name}}"> -->    <!-- 동작 안함. 그대로 표시됨 -->
      <input type="text" class="form-control" v-bind:value="name">
      <input type="text" class="form-control" :value="name">
      <input type="text" :class="formCtrl" :value="name">
      <div :style="color">Hello World</div>

      <!-- 속성 모두를 v-bind로 묶어 사용도 가능. 중복되는 속성은 뒤에 기술한 값으로 덮어씀. 내부에 변수 참조는 안됨-->
      <input v-bind="attrs" :value="name">
      <br>
    </div>
    <br>

    <div >
      <h5>2. 양방향 바인딩</h5>
      <input type="text" class="form-control" v-model="name">
      <input type="text" class="form-control" v-model="name">
      <input type="text" class="form-control" :value="name" v-on:input="changeName">
      Name: {{name}}
    </div>
    <br>

    <!-- 속성 이름을 변수로 참조하고자 하는 경우는 []를 이용. v-on:[evt] 형식도 가능. 
      []안에 변수명은 모두 소문자만 허용. 내부적으로 속성명은 소문자로 변환되어 참조된다.
    -->
    <div class="row">
      <div class="col-6">
        <select class="form-control" v-model="direction">
          <option value="width">Width</option>
          <option value="height">Height</option>
        </select>
      </div>
      <div class="col-6">
        <input type="text" class="form-control" v-model="size">
      </div>
    </div>
    
    <img src="./../assets/images/tree.jpg" v-bind:[direction]="size">
  </div>
</template>

<script>
export default {
   data() {
    return {
      name: 'Nolbu',
      formCtrl: 'form-control',
      color: { background: 'lightgray', padding: '5px', color: 'white', fontWeight: 'bold'},
      attrs: {type: 'text', class: 'form-control', disabled: true},
      direction: 'width',
      size: '100'
    }
  },
  methods: {
    changeName(evt) {
      this.name = evt.target.value;
    }
  },
}
</script>