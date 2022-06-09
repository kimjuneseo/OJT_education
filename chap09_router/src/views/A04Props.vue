<template>
  <div>
    <h3>A04 Props</h3>

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
  props: ['no', 'name'],
  data: function() {
    return {
      contacts: contactlist.contacts,
    }
  },
  computed: {
    person(){
      // no 변수가 props로 이미 선언되어 있으므로 바로 꺼내 사용할 수 있다
      return this.contacts.find(item => item.no === Number(this.no))
    }
  }
}
</script>
