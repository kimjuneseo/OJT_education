import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '@views/Home.vue'
import About from '@views/About.vue'
import GetContactList from '@views/GetContactList.vue'
import GetContact from '@views/GetContact.vue'
import AddContact from '@views/AddContact.vue'
import UpdateContact from '@views/UpdateContact.vue'

const routes = [
  { path: '/',                name: 'home',     component:  Home},
  { path: '/About',           name: 'about',    component:  About},
  { path: '/GetContactList',  name: 'list',     component:  GetContactList},
  { path: '/GetContact/:no',  name: 'contact',  component:  GetContact,     props: true},
  { path: '/AddContact',      name: 'add',      component:  AddContact},
  { path: '/UpdateContact',   name: 'update',   component:  UpdateContact},
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
