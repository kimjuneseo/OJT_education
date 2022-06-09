<template>
  <div class="card-body">
    <h1>Chap07 Setup</h1>

    <A05LifeCycle></A05LifeCycle><br>
    <A03ToRef title="A03 ToRef"></A03ToRef>
    <A02Reactive title="A02 Reactive"></A02Reactive><br>
    <A01Ref title="A01 Ref"></A01Ref>
  </div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.css';
import A01Ref from './components/A01Ref.vue';
import A02Reactive from './components/A02Reactive.vue';
import A03ToRef from './components/A03ToRef.vue';
import A05LifeCycle from './components/A05LifeCycle.vue';
export default {
  name: 'App',
  components: { A01Ref, A02Reactive, A03ToRef, A05LifeCycle }
}
</script>