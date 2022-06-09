<template>
  <div>
    <h1>Vue Component</h1>

    <A08Dynamic></A08Dynamic><br>
    <A07Slot>이것은 App에서 전달한 내용</A07Slot><br>
    <A07Slot></A07Slot><br>
    <A06Emit></A06Emit><br>
    <A05Props></A05Props><br>
    <A04Style></A04Style><br>
    <A03MakeDOM></A03MakeDOM><br>
    <A02Attribute></A02Attribute><br>
    <A01Binding></A01Binding>
  </div>
</template>

<script>
// 외부 CSS 파일을 IMPORT로 가져와 사용
import 'bootstrap/dist/css/bootstrap.css';

import A01Binding from './components/A01Binding.vue';
import A02Attribute from './components/A02Attribute.vue';
import A03MakeDOM from './components/A03MakeDOM.vue';
import A04Style from './components/A04Style.vue';
import A05Props from './components/A05Props.vue';
import A06Emit from './components/A06Emit.vue';
import A07Slot from './components/A07Slot.vue';
import A08Dynamic from './components/A08Dynamic.vue';

export default {
  name: 'App',
  components: { A01Binding, A02Attribute, A03MakeDOM, A04Style,
    A05Props, A06Emit, A07Slot, A08Dynamic
  }
}
</script>

<style>
  /* node_modules 는 생략하고 그 이후 패스만 적으면 된다 */
  /* @import 'bootstrap/dist/css/bootstrap.css' */
</style>
