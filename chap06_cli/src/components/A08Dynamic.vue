<template>
  <div class="card-body">
    <h3>A08 Dynamic Component</h3>

    <div id="container">
      <ul>
        <li v-for="item in getKeys" :key="item">
          <a href="#"   @click="changeName(item)">{{item.toUpperCase()}}</a>
        </li>
      </ul>
      
      <keep-alive>
        <component :is="currentBanner"></component>
      </keep-alive>
      
    </div>
  </div>
</template>

<script>
import A10ChildAbout from './childComponent/A10ChildAbout.vue';
import A10ChildHome from './childComponent/A10ChildHome.vue';
import A10ChildNews from './childComponent/A10ChildNews.vue';
export default {
  components: { A10ChildAbout, A10ChildHome, A10ChildNews},
  data() {
    return {
      current: 'Home',
      tab: {
        'Home': 'Home Component',
        'About': 'About Component',
        'News': 'News Component',
      },
    }
  },
  methods: {
    changeName(name) {
      this.current = name;
    }
  },
  computed: {
    currentBanner() {
      return 'A10Child' + this.current;
    },
    getKeys() {
      return Object.keys(this.tab);
    }
  },
}
</script>

<style scoped>
  #container { width: 900px; }
  #container > ul { margin: 0px; padding: 0px; }
  #container > ul li { list-style-type: none; float: left; line-height: 160%; width: 300px; height: 40px;}
  #container > ul li a { display: block; text-align: center; text-decoration: none; background-color: lightgray; color: #000; border: solid 1px Black; }
  #container > div { border: 1px solid #c0c0c0; border-top: none; padding: 15px; font-size: smaller; }
</style>