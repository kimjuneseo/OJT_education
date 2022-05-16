<template>
  <nav class="nav" id="nav">
    <router-link to="/" class="nav-link">HOME</router-link>
    <router-link to="/about" class="nav-link">ABOUT</router-link>
    <router-link to="/GetContactList" class="nav-link">LIST</router-link>
    <router-link to="/AddContact" class="nav-link">ADD</router-link>
  </nav>
</template>

<style>
#nav a.router-link-exact-active {
  color: orange;
}
</style>