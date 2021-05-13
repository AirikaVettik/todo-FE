<template>
  <div class="bg-white shadow rounded px-3 pt-3 pb-5 border border-white">
    <div class="row mt-4">
      <div class="col text-right">
      <input type="radio" id="allTasks" value="allTasks" v-model="checkedWhat">
      <label for="allTasks"> Show all tasks! </label>
      <input type="radio" id="myTasks" value="myTasks"  v-model="checkedWhat">
      <label for="myTasks"> Show {{form.createdBy}}'s tasks! </label>
      <br>
      <span> Checked is: {{ checkedWhat }} </span>
    </div>
    </div>


    <div class="row mt-4">
      <div class="col">
        <label for="title" class="block text-sm font-medium text-gray-700">Title</label>
        <input
          v-model="form.title"
          type="text"
          name="title"
          class="mt-1 block w-full border-gray p-1">
      </div>
    </div>
    <div class="row mt-4">
       </div>
    <div class="row mt-4">
      <div class="col">
        <label for="first_name" class="block text-sm font-medium text-gray-700">Date</label>
        <datepicker class="block text-sm font-medium text-gray-700 p-1" monday-first full-month-name v-model="form.date"></datepicker>
      </div>
    </div>
    <div class="row mt-4">
      <div class="col">
        <div class="inline-block w-2 h-2 rounded-full mr-2" :class="'bg-' + priorityColor + '-400'" />
        <label for="priority" class="inline-block text-sm font-medium text-gray-700">Priority</label>
        <select v-model="form.priority" name="priority" class="mt-1 block w-full border-gray p-1">
          <option value="HIGH">High</option>
          <option value="MEDIUM">Medium</option>
          <option value="LOW">Low</option>
        </select>
      </div>
      <div class="col">
        <div class="inline-block w-2 h-2 rounded-full mr-2" :class="'bg-' + form.color.toLowerCase() + '-400'" />
        <label for="color" class="inline-block text-sm font-medium text-gray-700">Color</label>
        <select name="color" v-model="form.color" class="mt-1 block w-full border-gray p-1">
          <option value="GRAY">Gray</option>
          <option value="BLUE">Blue</option>
          <option value="INDIGO">Indigo</option>
          <option value="PURPLE">Purple</option>
          <option value="PINK">Pink</option>
        </select>
      </div>
    </div>
    <div class="row mt-5">
    <div class="col">
        <label for="createdBy" class="block text-sm font-medium text-gray-700">Created by </label>
        <input name="createdBy" id="createdBy" :value="form.createdBy">
      </div>
      <div class="col text-right">
        <button class="bg-green-400 px-4 py-2 rounded" v-on:click="addTodo">Add todo</button>
      </div>
  </div>
  </div>
</template>
<script>
import axios from 'axios';
import Datepicker from 'vuejs-datepicker';
import { mapState } from 'vuex'

export default {
  data () {
    return {
      form: {
        title: '',
        date: new Date().toISOString().slice(0,10),
        priority: 'MEDIUM',
        color: 'GRAY',  
        createdBy: this.$store.state.createdBy
      },
      checkedWhat: [],
      checkedWhat: "myTasks",
    }
  },
  components: {
    Datepicker
  },
  computed: {
    priorityColor() {
      const mappings = {
        HIGH: "red",
        MEDIUM: "yellow",
        LOW: "green",
        default: "teal"
      };
      return mappings [this.form.priority] || mappings.default;
    },
    
    filteredtask() {
      return this.tasks.filter((task) => {
        return this.form.createdBy.match(this.form.createdBy)
      })
    }
  },
  methods: { 
    async addTodo (form) {
      await axios({
        url: 'https://airika-todoapp.herokuapp.com/api/createTask',
        method: 'POST',
        data: this.form
      })
        this.$emit('task-added')
        console.log(this.form)
      }
  }
}
</script>
<style scoped>
  .border-gray {
    border-bottom: 1px solid rgba(55, 65, 81, 0.3);
    border-radius: 0;
  }
</style>
