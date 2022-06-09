<template>
  <div class="card-body" id="app">
    <h3>{{title}}</h3>
    
    <div>
      Ref 변수의 값을 사용하는 경우 묵시적으로 unwrap 하여 표시한다.<br>
      <br>

      Name: {{name}}<br>
      Age: {{state.age}}<br>
      Title: {{state.initTitle}}<br>
      Array: <span v-for="(item, i) in state.arr" :key="i">{{item}} &nbsp;</span><br>
      User: {{state.user.name}} / {{state.user.age}} / {{state.user.address}}<br>
      <br>

      <button   @click="changeName">Name</button>
      <button   @click="changeAge(100)">Age</button>
      <button   @click="changeTitle">Title</button>
      <br>
      
      <button   @click="addArray">Add Array</button>
      <button   @click="updateArray(0, 200)">Update Array</button>
      <button   @click="deleteArray(0)">Delete Array</button>
      <br>

      <button   @click="addObject('address', 'Seoul')">Add Object</button>
      <button   @click="updateObject('address', 'Busan')">Update Object</button>
      <button   @click="deleteObject('address')">Delete Object</button>

    </div>
    <br>

  </div>
</template>

<script>
import {reactive} from 'vue';
export default {
  props: ['title'],
  setup(props){

    let x = 10;
    x = 20;
    console.log(x);


    // 단일 값은 reactive로 선언하면 경고 표시된다
    let name = reactive('NolBu');
    const changeName = () => name = 'HungBu';

    const state = reactive({
      age: 20,
      initTitle: props.title,
      arr: [10, 20],
      user: {name: 'HungBu', age: 20}
    });

    const changeAge = () => state.age = 300;
    const changeTitle = () => state.initTitle = 'Hello World';

    const addArray = () => {
      const random = Math.ceil( Math.random() * 100 );
      state.arr.push(random);
    }
    const updateArray = (index, value) => state.arr[index] = value;
    const deleteArray = (index) => state.arr.splice(index, 1);

    const addObject = (key, value) => state.user[key] = value;
    const updateObject = (key, value) => state.user[key] = value;
    const deleteObject = (key) => delete state.user[key];

    return {
      name, changeName, state, 
      changeAge, changeTitle,
      addArray, updateArray, deleteArray, addObject, updateObject, deleteObject
    }
  }
}
</script>