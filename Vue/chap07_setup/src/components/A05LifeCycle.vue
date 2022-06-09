<template>
  <div class="card-body" id="app">
    <h3>A05 LifeCycle</h3>
    <div>  
      Num: {{num}}<br>
      <button v-on:click="increase()">+1</button>
      <button v-on:click="decrease()">-1</button>
      <br>
    </div>
  </div>
</template>

<script>
import { ref, onBeforeMount, onMounted, 
  onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted,
  onErrorCaptured } from 'vue';

export default {
  setup() {

    // data, event 초기화(beforeCreate, created) => setUp
    const num = ref(0);

    const increase = () => num.value += 1;
    const decrease = () => num.value -= 1;

    // DOM 생성 전
    onBeforeMount( () => {              // beforeMount
      console.log('1. onBeforeMount')
    });
    onMounted( () => {                  // mounted
      console.log('2. onMounted');
      // throw new Error('에러 발생...');
    });

    // state 변경 전
    onBeforeUpdate( () => {             // beforeUpdate
      console.log('3. onBeforeUpdate')
    });
    // state 변경 후
    onUpdated( () => {                  // updated
      console.log('4. onUpdated')
    });

    onBeforeUnmount( () => {            // beforeUnmount()
      console.log('5. onBeforeUnmount')
    });
    onUnmounted( () => {                // unmounted()
      console.log('6. unMounted')
    });

    // 하위 컴퍼넌트의 에러를 잡아 처리한다.
    onErrorCaptured( (err, vm, info) => {     // errorCaptured
      console.log('에러가 발생한 경우만 실행됨');
      console.log(vm);
      console.log(err);
      console.log(info);
    });

    // activated => onActivated
    // deactivated => onDeactivated

    return { num, increase, decrease }
  }
    
}
</script>