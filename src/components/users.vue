<template>
<div id="allUsers">
        <div>
        <br>
        <label for="title" class="block text-sm font-medium text-gray-700">Find your name and click on it</label>
        </div>
        <br>
    <template>
    <div v-for="(user, index) in users"
            :key="index">
    <br><button class="bg-green-200 px-4 py-2 rounded" v-on:click="getUser(user.createdBy), $store.commit('selectedName', user.createdBy)">{{user.createdBy}}</button>
    </div>
    </template>    
</div>
</div></div>
</template>


<script>
import axios from 'axios';

export default {
    name: "allUsers",
    data() {
        return {
            users: [],
        }
    },

    async created () {
    await this.getAllUsers()
    },

    methods: {
        async getAllUsers() {
        const res = await axios({
            url: `https://airika-todoapp.herokuapp.com/api/all-users/`,
            method: 'GET'

        })
        this.users = res.data.[0]
        console.log(this.users)
        },
    
        async getUser(user) {
            console.log(user)
           this.$router.push('todo')
        },
    }
}
</script>

<style>

.table {
  table-layout: fixed;
  width: 100%;
}


    
</style>


