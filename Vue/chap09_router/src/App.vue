<template>
  <div class="card-body">
    <h1>Chap10 Router</h1>

    <router-link to="/">Index</router-link> | 
    <router-link to="/A02Attribute">A02Attribute</router-link> | 
    <router-link to="/A03Params/1001/data/NolBu">A03Params 1001</router-link> | 
    <router-link to="/A03Params/1002/data/HungBu">A03Params 1002</router-link> | 

    <router-link to="/A04Props/1003/data/BangJa">A04Props 1003</router-link> | 
    <router-link to="/A04Props/1004/data/춘향">A04Props 1004</router-link> |
    <router-link to="/A05Contact">A05Contact</router-link> | 
    <router-link to="/A06Query?no=1005&name=향단&address=Seoul#TOP">A06Query</router-link> | 
    <router-link to="/A07Push">A07Push</router-link> | 
    <router-link to="/A08ChildRouter">A08ChildRouter</router-link> | 
    <router-link to="/ABC">ABC</router-link> | 

    <hr>

    <router-link :to="{path: '/'}">Index</router-link> | 
    <router-link :to="{name: 'attrs'}">A02Attribute</router-link> | 
    <router-link :to="{name: 'params', params: {no: 1001, name: '놀부'}}">A03Params 1001</router-link> | 
    <router-link to="/A03Params/1002/data/HungBu">A03Params 1002</router-link> | 

    <router-link to="/A04Props/1003/data/BangJa">A04Props 1003</router-link> | 
    <router-link to="/A04Props/1004/data/춘향">A04Props 1004</router-link> |
    <router-link to="/A05Contact">A05Contact</router-link> | 
    <router-link :to="{name: 'query', query: {no:1005, name:'향단', address: 'Busan'}, hash: '#MIDDLE'}">A06Query</router-link> | 
    <router-link to="/A07Push">A07Push</router-link> | 
    <router-link to="/A08ChildRouter">A08ChildRouter</router-link> | 
    <router-link to="/ABC">ABC</router-link> | 

    <hr>
    
    <!-- link로 지정된 컴퍼넌트가 표시될 영역을 지정 -->
    <router-view></router-view>
  </div>
</template>

<script>
// npm i vue-router

export default {
  components: {  },
}
</script>

<style>

</style>
