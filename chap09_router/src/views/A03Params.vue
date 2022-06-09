<template>
  <div>
    <h3>A03 Params</h3>

    <div>
        Name: {{name}}<br>
        No: {{no}}<br>
        Person: {{person.no}} / {{person.name}}<br>
    </div>
  </div>
</template>

<script>
import contactlist from './data/ContactList';

export default {
  data: function() {
    return {
        contacts: contactlist.contacts,
        no: this.$route.params.no,
        name: this.$route.params.name,
        // person: contactlist.contacts.find(item => item.no === Number(this.$route.no))
    }
  },
  computed: {
    person() {
      return this.contacts.find(item => item.no === Number(this.$route.params.no))
    }
  },
  created: function(){
    console.log(this.$route);
  },
}
</script>
