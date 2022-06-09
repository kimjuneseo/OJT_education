<template>
  <div>
    <table class="table">
      <thead>
        <tr><th>No</th><th>Name</th><th>Tel</th><th>Address</th><th>Photo</th></tr>
      </thead>
      <tbody>
        <tr v-for="contact in contactList.contacts" :key="contact.no">
          <td>{{contact.no}}</td>
          <td><a href="#" @click="showContactModel(contact.no)">{{contact.name}}</a></td>
          <td>{{contact.tel}}</td>
          <td>{{contact.address}}</td>
          <td><img :src="contact.photo" alt="증명사진" width="50"></td>
        </tr>
      </tbody>
    </table>
    <button class="btn btn-primary"   @click="viewAdd">ADD</button>

    <!-- Get Contact Modal -->
    <div class="modal fade" id="getContent" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="staticBackdropLabel">Get Contact</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
              Name: <input type="text" class="form-control" disabled  :value="contactList.contact.name" />
              Tel: <input type="text" class="form-control" disabled   :value="contactList.contact.tel"/>
              Address: <input type="text" class="form-control" disabled :value="contactList.contact.address"/>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary" @click="deleteContact(contactList.contact.no)">Delete</button>
            <button type="button" class="btn btn-primary" @click="viewUpdate">Update</button>
          </div>
        </div>
      </div>
    </div>

    <!-- Update Contact Modal -->
    <div class="modal fade" id="updateContent" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="staticBackdropLabel">Update Contact</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
              Name: <input type="text" class="form-control"   v-model="contactList.contact.name"/>
              Tel: <input type="text" class="form-control"    v-model="contactList.contact.tel"/>
              Address: <input type="text" class="form-control" v-model="contactList.contact.address"/>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary"   @click="updateContent">Update</button>
          </div>
        </div>
      </div>
    </div>

    <!-- Add Contact Modal -->
    <div class="modal fade" id="addContent" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="staticBackdropLabel">Add Contact</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            Name: <input type="text" class="form-control"   v-model="contactList.contact.name"/>
            Tel: <input type="text" class="form-control"    v-model="contactList.contact.tel"/>
            Address: <input type="text" class="form-control"  v-model="contactList.contact.address"/>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary" @click="addContent">ADD</button>
          </div>
        </div>
      </div>
    </div>

    <div v-show="contactList.isLoading">Loading...</div>
  </div>
</template>
<script>
import * as bootstrap from 'bootstrap/dist/js/bootstrap.esm.js'
import { onMounted, reactive } from 'vue';
import axios from 'axios';

export default {
  setup() {

    // data(){}
    let getContentModal = '';
    let updateContentModal = '';
    let addContentModal = '';
    const contactList = reactive({
      isLoading: false,
      contacts: [],     // 전체 리스트
      contact: {no:'', name: '', tel: '', address: ''}       // 1개 
    })

    const baseURL = 'http://localhost:8085/contacts/';

    // mounted() {}
    onMounted(()=>{
      getContentModal = new bootstrap.Modal(document.getElementById('getContent'), {
        keyboard: false
      });
      updateContentModal = new bootstrap.Modal(document.getElementById('updateContent'), {
        keyboard: false
      });
      addContentModal = new bootstrap.Modal(document.getElementById('addContent'), {
        keyboard: false
      });

      // 시작하자마자 데이터 가져오기
      getContactList();
    });

    // methods: {}
    const viewUpdate = () => {
      getContentModal.hide()
      updateContentModal.show();
    }
    const viewAdd = () => {
      contactList.contact = {no:'', name: '', tel: '', address: ''}
      addContentModal.show();
    }
    const showContactModel = (no) => {
      getContentModal.show();

      axios.get(baseURL + no)
      .then(resp => {
        // console.log(resp.data);
        contactList.contact = resp.data;
      })
      .catch(error => console.error(error));
    };

    const deleteContact = (no) => {
      axios.delete(baseURL + no)              // delete
      .then( () => {
        getContentModal.hide();         // 모달 창 닫고
        getContactList();               // 삭제된 항목이 반영된 10개를 다시 가져와 표시
      })
      .catch(error => console.error(error));
    };

    const updateContent = () => {
      axios.put(baseURL + contactList.contact.no, contactList.contact)      // put
      .then( () => {
        updateContentModal.hide();      // 모달 창 닫고
        getContactList();               // 삭제된 항목이 반영된 10개를 다시 가져와 표시
      })
      .catch(error => console.error(error));
    }

    const addContent = () => {
      axios.post(baseURL, contactList.contact)      // post
      .then( () => {
        addContentModal.hide();         // 모달 창 닫고
        getContactList();               // 삭제된 항목이 반영된 10개를 다시 가져와 표시
      })
      .catch(error => console.error(error));
    }

    // 전체 리스트 가져오기
    const getContactList = () => {
      axios.get(baseURL, {params: {pageno: 1, pagesize: 10}})
      .then(resp => {
        contactList.contacts = resp.data.contacts;
      })
      .catch(error => console.error(error));
    }

    return {viewUpdate, viewAdd, contactList, showContactModel, 
      deleteContact, updateContent, addContent
    }
  },
}
</script>
