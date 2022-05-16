const CONTACT_GETCONTACTLIST = 'CONTACT_GETCONTACTLIST';
const CONTACT_GETCONTACT = 'CONTACT_GETCONTACT';
const CONTACT_ADDCONTACT = 'CONTACT_ADDCONTACT';
const CONTACT_DELETECONTACT = 'CONTACT_DELETECONTACT';
const CONTACT_UPDATECONTACT = 'CONTACT_UPDATECONTACT';

export default {
  namespaced: true,
  state: {
    contactList: { pageno: 1, pagesize: 5, totalcount: 0, contacts: [] },
    contact: {no: '', name: '', tel: '', address: ''}
  },
  mutations: {
    [CONTACT_GETCONTACTLIST]: (state, payload) => {
      console.log(state, payload);
    },
    [CONTACT_GETCONTACT]: (state, payload) => {
      console.log(state, payload);
    },
    [CONTACT_ADDCONTACT]: (state, payload) => {
      console.log(state, payload);
    },
    [CONTACT_DELETECONTACT]: (state, payload) => {
      console.log(state, payload);
    },
    [CONTACT_UPDATECONTACT]: (state, payload) => {
      console.log(state, payload);
    },
  },
  actions: {
    
  }
}
