<template>
  <div class="card-body" id="app">
    <h3>{{title}}</h3>
    
    <div>
      Ref 변수의 값을 사용하는 경우 묵시적으로 unwrap 하여 표시한다.<br>
      <br>

      Name: {{name}}<br>
      Age: {{age}}<br>
      Title: {{initTitle}}<br>
      Array: <span v-for="(item, i) in arr" :key="i">{{item}} &nbsp;</span><br>
      User: {{user.name}} / {{user.age}} / {{user.address}}<br>
      <br>

      <button   @click="changeName">Name</button>
      <button   @click="changeAge(100)">Age</button>
      <button   @click="changeRefAge">Ref Age</button>
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
import {ref, reactive, isReactive, isRef, toRef, toRefs} from 'vue';
export default {
  props: ['title'],
  setup(props){
    const name = ref('NolBu');
    const changeName = () => name.value = 'HungBu';

    const state = reactive({
      age: 20,
      initTitle: props.title,
      arr: [10, 20],
      user: {name: 'HungBu', age: 20}
    });

    // 선언 확인
    console.log(isRef(name));     // true
    console.log(isRef(state));    // false

    console.log(isReactive(name));     // false
    console.log(isReactive(state));    // true
    console.log('');

    // reactive에서 하나 이상의 ref 객체로 값을 추출
    const age = toRef(state, 'age');
    const {initTitle, arr} = toRefs(state);

    console.log(isRef(age));
    console.log(isRef(initTitle));
    console.log(isRef(arr));

    // ref 객체이므로 value 붙여야 한다.
    const changeRefAge = () => age.value = 1000;


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
      // ...state => age, initTitle, arr, user
      name, changeName, ...toRefs(state),
      changeAge, changeTitle, changeRefAge, 
      addArray, updateArray, deleteArray, addObject, updateObject, deleteObject
    }
  }
}
</script>