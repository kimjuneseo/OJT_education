<template>
  <div>
    <h4>A05 Contacts</h4>

    <div>
      <span v-for="contact in contacts" :key="contact.no">
        <router-link :to="'/A05ContactChild/' + contact.no">{{contact.name}}</router-link> | 
      </span>
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
