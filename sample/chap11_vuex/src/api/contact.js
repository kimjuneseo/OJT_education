import axios from 'axios'

const BASE_URI = 'http://localhost:8085';
const PAGE_NO = 1;
const PAGE_SIZE = 10;
const GET_CONTACTLIST = BASE_URI + '/contacts/';
const GET_CONTACT = BASE_URI + '/contacts/${no}';
const ADD_CONTACT = BASE_URI + '/contacts/';
const DELETE_CONTACT = BASE_URI + '/contacts/${no}';
const UPDATE_CONTACT = BASE_URI + '/contacts/${no}';

export const getContactList = (pageno, pagesize) => {

}