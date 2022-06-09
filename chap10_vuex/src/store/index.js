import {createStore} from 'vuex';
import todoListStore from './todoListStore';

// 전역 변수 관리를 위한 store
// 여기서 선언된 변수와 메서드는 내부 컴퍼넌트 어디에서든지 바로 참조 가능
const store = new createStore({
  // 전역에서 사용할 변수를 정의한다
  state: {
    num: 0,
    contacts : [
      { no:1001, name:'김유신', tel:'010-1212-3331', address:'경주' },
      { no:1002, name:'장보고', tel:'010-1212-3332', address:'청해진' },
      { no:1003, name:'관창', tel:'010-1212-3333', address:'황산벌' },
    ]
  },
  // state에 있는 변수를 조작하는 함수를 정의한다
  // components에서 commit 명령으로 호출한다
  mutations: {
    increase: (state, payload) => {
      state.num = state.num + payload;
    },
    decrease: (state) => {
      state.num--;
    }
  },
  // 시간이 걸리는 작업(ajax 통신등)의 메서드를 기술.
  // 받은 값은 mutations의 메서드를 호출해서 state의 변수를 변경하는 단계를 거친다
  // components에서 dispatch 명령으로 호출한다
  actions: {

  },
  // state 변수를 기반으로 재 계산된 값을 전달 할 목적으로 기술
  getters: {
    listLength: (state) => state.contacts.length,
    contact: (state) => {
      return (no) => {
        return state.contacts.find(item => item.no === no);
      }
    }
  },
  // 하위 store를 정의
  modules: {
    todoListStore
    /*
    todoListStore: {
      namespaced: true,
      state: {},
      mutations: {}
    }
    */
  }
});


// main.js에서 router처럼 .use(xxx)로 호출해서 사용
export default store;
