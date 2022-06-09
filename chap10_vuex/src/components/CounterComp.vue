<template>
  <div>
    <h3>Counter</h3>

    <div>
      Num: {{num}}<br>
      <button   @click="inc(2)">+</button>
      <button   @click="dec">-</button>
    </div>

    <div>
      cnt: {{cnt}}<br>
      person: {{person.no}} / {{person.name}}
    </div>
</div>
</template>

<script>
import {useStore} from 'vuex';
import { computed } from 'vue';
export default {
  setup() {

    // main.js에서 등록한 store에 대한 참조 값을 받아온다
    const store = useStore();

    // 값이 변경되면 변경된 값을 참조하려면 computed로 
    // 가지고 와서 참조만 하려면 COMPUTED 없이 정의
    const num = computed( () => store.state.num );

    // mutations의 함수 호출
    const inc = (num) => store.commit('increase', num);    // 2가 payload에 전달되는 값
    const dec = () => store.commit('decrease');

    // getters의 값 호출
    const cnt = computed(() => store.getters.listLength);   // 값 변경시 변경된 값으로 갱신
    const person = store.getters.contact(1001);             // 값 변경되도 갱신 안됨

    return {
      num, inc, dec, cnt, person
    }
  },
}
</script>