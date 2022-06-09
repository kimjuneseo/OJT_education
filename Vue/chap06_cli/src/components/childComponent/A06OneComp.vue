<template>
  <h5>Child One Component</h5>
  <div>
    Cnt: {{ cnt }}<br />
    User: {{ user.name }} / {{ user.age }} / {{ user.address }}<br />
    <button @click="sendCnt">CNT</button>
    <button @click="sendObject">OBJ</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cnt: 100,
      user: { name: "NolBu", age: 20 },
    };
  },
  methods: {
    // 하위 컴퍼넌트의 어떠한 값을 상위 컴퍼넌트에 전달해서 상위 컴퍼넌트에서
    // 하위 컴퍼넌트의 데이터 값을 사용 - emit을 이용한 이벤트 형식을 이용해서 전달
    sendCnt() {
      this.$emit("cntEvent", this.cnt);
    },
    sendObject() {
      const data = {
        cnt: this.cnt,
        user: this.user,
        name: "NolBu",
      };
      this.$emit("objEvent", data);
    },
  },
  // native event와 구별되도록 정의한 이벤트명을 기술
  emits: ["cntEvent", "objEvent"],
}; 
</script>