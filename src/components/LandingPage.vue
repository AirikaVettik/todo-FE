
<template>
<div class="container">
    <div class="bg-white shadow rounded px-5 pt-3 pb-5 border border-white">
    <br>
        <div class="row mt-5">
            <div class="col-12 text-center">
                <label for="title" class="block text-sm font-medium text-gray-700">If you're new here, please enter your name</label>
                <br><br><input
                    type="text"
                    v-model="createdBy"
                    name="title"
                    class="mt-1 block w-full border-gray p-1 "
                    style="text-align:center">
            </div>
        </div>
    
        <div class="row mt-5">
            <div class="col text-center">
            <button 
            @click="addUser" 
            class="bg-green-400 px-4 py-2 rounded"
            >Submit name</button>
            </div>
        </div>
        <br>
    </div> 
    <br>
    <div class="bg-white shadow rounded px-5 pt-3 pb-5 border border-white">
    <users />
  </div>
    
    </div>
    </div>
    </div>
    </div>
</div>
</template>

<script>
import axios from 'axios';
import users from './users.vue';

export default {
    name: "createdby",
    data() {
        return this.$store.state
    },
    components: {
        users
    },
    methods: { 
        addUser() {
            let user = {
                createdBy: this.$store.state.createdBy
            }
            console.log(user);
            this.createUser(user)
        },
        async createUser (data) {
        await axios({
            url: 'https://airika-todoapp.herokuapp.com/api/user',
            method: 'POST',
            data: data,
        }) 
            
            this.$router.push('todo');
            console.log(data)
        }
        },
          
  }

</script>


<style scoped>
  .border-gray {
    border-bottom: 1px solid rgba(55, 65, 81, 0.3);
    border-radius: 0;
  }
  .container {
    min-width: 560px;
    width: 560px
  }
</style>