<template>
  <div>
    <h3>A07 Push</h3>

    <div>
      <button   @click="back">BACK</button>
      <button   @click="forward">FORWARD</button>
      <button   @click="goHome">HOME</button>
      <button   @click="goURL('/A02Attribute')">A02Style</button>

      <!-- 객체 형태의 데이터 전달은 name 사용 -->
      <button   @click="goURL({name: 'attrs'})">A02Style</button>
      <button   @click="goURL({name: 'params', params:{no:1005, name:'몽룡'}})">A03Params</button>
      <button   @click="goURL({name: 'query', query:{no:1005, name:'몽룡', address:'경기'}, hash:'#BTN'})">A03Params</button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    back: function(){
      // this.$route  => path나 url의 정보값 참조
      // this.$router => 이동에 관련된 명령
      this.$router.back();
    },
    forward: function() {
      this.$router.forward();
    },
    goHome: function() {
      this.$router.push('/');
    },
    goURL: function(url) {
      this.$router.push(url);
    },
  },
}
</script>