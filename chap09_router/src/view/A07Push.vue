<template>
  <div>
    <h3>A07 Push</h3>

    <div>
      <button   @click="back">BACK</button>
      <button   @click="forward">FORWARD</button>
      <button   @click="goHome">HOME</button>
      <button   @click="goURL('/A02Attribute')">A02Style</button>

      <!-- 객체 형태의 데이터 전달은 name 사용 -->
      <button>A02Style</button>
      <button>A03Params</button>
      <button>A03Params</button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    back: function(){
      
    },
    forward: function() {
      
    },
    goHome: function() {
      
    },
    goURL: function() {
      
    },
  },
}
</script>