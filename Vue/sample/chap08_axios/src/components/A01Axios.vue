<template>
    <div>
        <h3>A01 Axios</h3>

        <div>
            <button @click="getContactList">Get ContactList</button>
            <button @click="getContactListAsync">Get ContactList Async</button>
            <button @click="getContact">Get Contact</button>
            <button @click="addContact">Add Contact</button>
            <button @click="updateContact">Update Contact</button>
            <button @click="deleteContact">Delete Contact</button>
        </div>

        <div>
            <textarea cols="100" rows="10" readonly></textarea>
        </div>
    </div>
</template>

<script>
export default {
    data: function() {
        return { data: {} }
    },
    methods: {
        getContactList: function() {

        },
        getContactListAsync: function() {

        },
        getContact: function() {

        },
        addContact: function() {

        },
        updateContact: function() {

        },
        deleteContact: function() {

        },
    }
}
</script>