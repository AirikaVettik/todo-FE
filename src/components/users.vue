<template>
    <div>
        <div class="row mt-5">
    <div class="col-12 text-center">
    <label for="title" class="block text-sm font-medium text-gray-700">Find your name and enter to database</label>
<br>
     <div class="row mt-6">
    <div class="col text-right">
    
        <label for="createdBy" class="block text-sm font-medium text-gray-700">{{Items}}</label>
      </div>
      <div class="col text-right">
        <button class="bg-green-400 px-4 py-2 rounded" @click="addTodo()">Select</button>
      
      </div></div></div>
      </div>
    </div>
</template>


<script>
import axios from 'axios';

export default {
    name: 'users',
    data() {
        return {
            Field: [
                {key: 'createdBy', lable: 'User'}
            ],
            Items: [],
        }},

    async created () {

        const users = await axios({
            url: `https://airika-todoapp.herokuapp.com/api/all-users`,
            method: 'GET',
            headers: {}
        })
        console.log('users', users)

        this.Items = users.data.users
          },

}
</script>