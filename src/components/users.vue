<template>
<div id="allUsers">
    <div class="row mt-5">
        <div class="col-12 text-center">
        <label for="title" class="block text-sm font-medium text-gray-700">Find your name and enter to database</label>
        <br>
        </div>
    </div>
    <table>
        <br><tr v-for="user in users"
            :key="user.id">
            <td><br><label text-center for="userName" class="block text-m font-medium text-gray-700">{{user.createdBy}}</label></td>
            <td><br><button class="bg-green-400 px-4 py-2 rounded" @click="getUser">Enter</button></td>
        </tr>
    </table>    


</div>
</template>


<script>
import axios from 'axios';

export default {
    name: "allUsers",
    data() {
        return {
            users: [],
            createdBy: "",
        }
    },

    async created () {
    await this.getAllUsers()
    },

    methods: {
        async getAllUsers() {
        const res = await axios({
            url: `https://airika-todoapp.herokuapp.com/api/all-users`,
            method: 'GET'

        })
        this.users = res.data.[0].users
        console.log(this.users)
        },
    
    
        async getUser() {
            console.log(this.createdBy);
            this.$router.push('todo')
        },
    }
}
</script>



