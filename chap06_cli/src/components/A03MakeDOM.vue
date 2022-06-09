<template>
  <div class="card-body" id="app">
    <h3>A03 DOM Directive</h3>
    <br>

    <h5>1. v-show</h5>
    <div    v-show="isChecked">
      v-show가 있는 엘리먼트는 항상 렌더링 되고 DOM에 남아있다는 점입니다. v-show는 단순히 엘리먼트에 display CSS 속성을 토글합니다.
    </div>
    <br />

    <h5>2. v-if</h5>
    <div    v-if="name === 'nolbu'">
      Vue에서는 v-if 디렉티브를 사용하여 조건부 블럭을 작성할 수 있습니다.<br>
      이 3개의 블럭은 붙어 기술해야 한다.
    </div>
    <div    v-else-if="name === 'hungbu'">
      v-else-if는 이름에서 알 수 있듯, v-if에 대한 “else if 블록” 역할을 합니다. 또한 여러 개를 사용할 수 있습니다.
    </div>
    <div    v-else>
      v-else 디렉티브를 사용하여 v-if에 대한 “else 블록”을 나타낼 수 있습니다
    </div>
    <br>

    <h5>3. v-for</h5>
    <table class="table">
      <thead>
        <tr>
          <th>No</th>
          <th>Name</th>
          <th>Age</th>
          <th>Kor</th>
          <th>Eng</th>
        </tr>
      </thead>
      <tbody>
        <!-- for(let index = 0; index < students.length; index++) { 
                const item = students[index];
        -->
        <template   v-for="(item, index) in students">
          <tr v-if="item.kor >= 90" :key="index">
            <td>{{index + 1}}</td>
            <td>{{item.name}}</td>
            <td>{{item.age}}</td>
            <td>{{item.kor}}</td>
            <td>{{item.eng}}</td>
          </tr>
        </template>
        
        <!-- } -->
      </tbody>
    </table>
    <br>

    <ul>
      <li v-for="item in 3" :key="item">{{item}}</li>
    </ul>

    <ul>
      <li v-for="(item, index) in arr" :key="index">{{item}}</li>
    </ul>

    <ul>
      <li v-for="(value, key, i) in user" :key="key">{{i + 1}} - {{key}} / {{value}}</li>
    </ul>

    <div>
      <button class="btn btn-outline-primary btn-sm" @click="changeChecked">Check</button>
      <button class="btn btn-outline-primary btn-sm" @click="changeName('nolbu')">IF</button>
      <button class="btn btn-outline-primary btn-sm" @click="changeName('hungbu')">Else IF</button>
      <button class="btn btn-outline-primary btn-sm" @click="changeName('abc')">Else</button><br>
    </div>

  </div>
</template>

<script>
const model = {
  students: [
    { name: 'HongGilDong', age: 20, kor: 100, eng: 80 },
    { name: 'NolBu', age: 50, kor: 90, eng: 90 },
    { name: 'HungBu', age: 40, kor: 70, eng: 60 },
  ]
}
export default {
  data() {
    return {
      isChecked: true,
      name: 'nolbu',
      students: model.students,
      arr: [10, 20, 30],
      user: { name: 'HungBu', age: 40, kor: 70, eng: 60 }
    }
  },
  methods: {
    changeChecked() {
      this.isChecked = !this.isChecked;
    },
    changeName(name) {
      this.name = name;
    }
  }
}
</script>