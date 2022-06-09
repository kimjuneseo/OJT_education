<template>
  <div>
    <h3>A03 Params</h3>

    <div>
      Name: {{name}}<br>
      No: {{no}} / {{address}}<br>
      Person: {{person.no}} / {{person.name}}<br>
      Hash: {{hash}}
    </div>
  </div>
</template>

<script>
import contactlist from './data/ContactList';

export default {
  data: function() {
    return {
      contacts: contactlist.contacts,

      no: this.$route.query.no,
      name: this.$route.query.name,
      address: this.$route.query.address,
      hash: this.$route.hash
    }
  },
  computed: {
    person() {
      return this.contacts.find(item => item.no === Number(this.no))
    }
  }
}
</script>
