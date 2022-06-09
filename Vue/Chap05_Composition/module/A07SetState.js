// A07SetState.js

const setState = () => {
  const name = Vue.ref('NolBu');
  const user = Vue.ref({name: '흥부', age: 20});

  const changeName = () => name.value = 'HungBu';
  const changeUser = () => {
    user.value.name = 'BangJa',
    user.value.age = 100;
  };

  Vue.provide('name', name);
  Vue.provide('data', {
    user: user.value,
    changeName, 
    changeUser,
  })

  return {name, user, changeName, changeUser}
}