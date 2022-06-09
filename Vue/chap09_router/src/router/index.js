import { createRouter, createWebHistory } from 'vue-router';
import A01Binding from './../views/A01Binding.vue'
import A02Attribute from '@views/A02Attribute.vue';
import A03Params from '@views/A03Params.vue';
import A04Props from '@views/A04Props.vue';
import A05Contact from '@views/A05Contact.vue';
import A05ContactChild from '@views/A05ContactChild.vue';
// import A06Query from '@views/A06Query.vue';
// import A07Push from '@views/A07Push.vue';
// import A08ChildRouter from '@views/A08ChildRouter.vue';
import CompanyInfo from './../components/CompanyInfo.vue';
import CompanyWay from './../components/CompanyWay.vue';
import A09NotFound from '@views/A09NotFound.vue';
  
const routes = [
  { path: '/',      name: 'index',    component: A01Binding},
  { path: '/A02Attribute',      name: 'attrs',    component: A02Attribute},

  // PATH를 이용해서 컴퍼넌트에 값을 전달하는 방식 
  // path에 :no => no는 router-link에서 지정한 패스의 값을 받은 변수명이 된다
  // <router-link to="/A03Params/1001">..</router-like> 라면
  // no = 1001 즉 no에 1001이 대입된다
  // 링크를 걸때 여기서 지정한 path와 동일한 이름으로 지정한다.
  // 단 :이 붙은 이름만 임의의 값으로 변경해서 사용
  { path: '/A03Params/:no/data/:name',      name: 'params',    component: A03Params},

  // 위 예제를 props로 사용하면 더 편하다
  { path: '/A04Props/:no/data/:name',      name: 'props',    
          component: A04Props,    props: true},

  { path: '/A05Contact',      name: 'contacts',    component: A05Contact},
  { path: '/A05ContactChild/:no',      name: 'cts',    component: A05ContactChild,
        props: true},
  // 주소줄에 ?no=value&name=value#TOP 형태로 전달.
  // 따라서 이 값은 link에서 지정한다.
  // { path: '/A06Query',      name: 'query',    component: A06Query},
  { path: '/A06Query',      name: 'query',    
      component: () => import('@views/A06Query.vue')},

  // { path: '/A07Push',      name: 'push',    component: A07Push},
  { path: '/A07Push',      name: 'push',    
      component: () => import('@views/A07Push.vue')},

  // { path: '/A08ChildRouter',      name: 'child',    component: A08ChildRouter,
  { path: '/A08ChildRouter',      name: 'child',    
      component: () => import('@views/A08ChildRouter.vue'),
    children: [
      { path: '/A08ChildRouter',    name: 'about',    component: CompanyInfo },
      { path: '/A08ChildRouter/way',    name: 'way',    component: CompanyWay }
    ]
  },
  // 위의 링크 패스와 매칭되지 않으면 표시. 따라서 맨 마지막에 기술한다
  { path: '/:paths(.*)',     component: A09NotFound},
];

const router = createRouter({
  history: createWebHistory(),
  routes
});
export default router;
