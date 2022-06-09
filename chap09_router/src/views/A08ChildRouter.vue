<template>
  <div>
    <h4>A08 Child</h4>

    <div>
      <!-- 상위 링크와 하위 라우터의 이름이 동일하면 상위 요소가 표시될때 기본으로 표시된다 -->
      <router-link to="/A08ChildRouter">INFO</router-link> | 
      <router-link to="/A08ChildRouter/way">WAY</router-link> | 
      <span></span>
    </div>
    <br />

    <div>
      <!-- children에 기술한 패스는 여기에 표시된다 -->
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import contactlist from './data/ContactList';

export default {
  data: function () {
    return {
      contacts: contactlist.contacts,
    };
  },
};
</script>

<style>
</style>