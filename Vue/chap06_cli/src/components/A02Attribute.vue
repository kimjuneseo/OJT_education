<template>
  <div class="card-body" id="app">
    <h3>A02 Attribute Directive</h3>

    <div >
      <h5>1. 속성 바인딩</h5>
      <input type="text" class="form-control"   value="{{name}}">

      <!-- 변수의 값을 속성의 값으로 사용하는 경우 v-bind:속성명="변수명" 형태로 사용
        v-bind는 생략 가능하다
      -->
      <input type="text" class="form-control"   v-bind:value="name">
      <input type="text" class="form-control"   :value="name">
      <input type="text" :class="formCtrl"  :value="name">
      
      <div    v-bind:style="myStyle">Hello World</div>
      <input  v-bind="formAttr">
    </div>
    <br>

    <div >
      <h5>2. 양방향 바인딩 => view에서 view model의 값을 변경 </h5>
      <input type="text" class="form-control"   v-model="name">
      <input type="text" class="form-control"   v-model="name">

      <!-- 입력 제한이 필요한 경우는 속성과 이벤트를 혼합 사용 -->
      <input type="text" class="form-control"   
                v-bind:value="name" v-on:input="changeName">
      Name: 
    </div>
    <br>

    <div class="row">
      <div class="col-6">
        <select class="form-control"    v-model="direction"> 
          <option value="width">Width</option>
          <option value="height">Height</option>
        </select>
      </div>
      <div class="col-6">
        <input type="text" class="form-control"   v-model="size">
      </div>

      <div>{{direction}} / {{size}}</div>
    </div>
    <br>
    <img src="./../assets/images/tree.jpg" alt="Tree"   v-bind:[direction]="size">

  </div>
</template>

<script>
export default {
  data() {
    return {
      name: 'NolBu'
      ,formCtrl: 'form-control'
      // computed로 정의하는 것이 좋다
      ,myStyle: { background: 'lightgray', fontWeight: 'bold', padding: '5px'},
      formAttr: { type: 'text', class: 'form-control', disabled: true },
      direction: 'width',
      size: '100',
    }
  },
  methods: {
    changeName(evt) {
      console.log(evt.target);
      let data = evt.target.value;
      if(isNaN(data)) data = 0;
      // this.name = evt.target.value;
      this.name = data;
    }
  }
}
</script>

<style scoped>

</style>