<template>
  <div class="card-body" id="app">
    <h3>Chap04 Emit</h3>

    <div>
      Counter: {{num}}<br>
      <br>
      Object: {{obj.cnt}}<br>
      {{obj.user.name}} / {{obj.user.age}}<br>
      {{obj.name}}
    </div>

    <hr>

    <A06OneComp     @cntEvent="getCounter"   @objEvent="getObject"></A06OneComp>
  </div>
</template>

<script>
import A06OneComp from './childComponent/A06OneComp.vue';
export default {
  components: {A06OneComp},
  data() {
    return {
      num: 0,
      obj: {cnt: '', user: '', name: ''}
    }
  },
  methods: {
    getCounter(evt) {     // evt 자체가 값이다.
      console.log(evt);
      this.num = evt;
    },
    getObject(evt) {
      this.obj = evt;
    }
  },
}
</script>