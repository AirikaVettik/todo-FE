<template>
  <div id="app">
  <div class="flex justify-center">
  <p class="hello"> Hello, {{ $store.state.createdBy }}! What is your main focus for today?</p>
  </div>
    <div class="flex justify-center">
      <div class="min-h-screen flex overflow-x-scroll py-12">
        <div class="bg-gray-100 rounded-lg px-3 py-3 column-double-width rounded mr-4">
          <p class="text-gray-700 font-semibold font-sans tracking-wide text-sm">Add new todo</p>
          <new-task class="my-3" @task-added="getTasks"/>
        </div>
      </div>

      <div class="min-h-screen flex overflow-x-scroll py-12">
        <div
          v-for="column in columns"
          :key="column.title"
          :column="column"
          class="bg-gray-100 rounded-lg px-3 py-3 column-width rounded mr-4"
        >
          <p class="text-gray-700 font-semibold font-sans tracking-wide text-sm">{{column.title}}</p>
          <!-- Draggable component comes from vuedraggable. It provides drag & drop functionality -->
          <draggable
            :list="column.tasks"
            :animation="200"
            :style="{height: !column.tasks.length ? '300px' : ''}"
            ghost-class="ghost-card"
            group="tasks"
            @change="moveTask($event, column)"
          >
            <!-- Each element from here will be draggable and animated. Note :key is very important here to be unique both for draggable and animations to be smooth & consistent. -->
            <task-card
              v-for="(task) in column.tasks"
              :key="task.id"
              :task="task"
              @delete-task="deleteTask(task, column)"
              class="mt-3 cursor-move"
            ></task-card>
          </draggable>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import draggable from "vuedraggable";
import TaskCard from "./components/TaskCard.vue";
import NewTask from "./components/NewTask.vue";
import axios from 'axios';

export default {
  name: "App",
  components: {
    TaskCard,
    draggable,
    NewTask
  },
  data() {
    return {
      columns: [
      ]
    };
  },
  async created () {
    await this.getTasks()
  },
  methods: {
    async getTasks () {
      const getAllTasks = await axios({
        url: 'https://airika-todoapp.herokuapp.com/api/all-tasks',
        method: 'GET'
      })
      this.columns.push(getAllTasks.data[0])
      this.columns.push(getAllTasks.data[1])
    },
    async moveTask (event, column) {
      if (event.added) {
        if (column.title === 'Done') {
          await axios({
            url: `https://airika-todoapp.herokuapp.com/api/moveTask/${event.added.element._id}/done`,
            method: 'GET'
          })
        }
        if (column.title === 'Todo') {
          await axios({
            url: `https://airika-todoapp.herokuapp.com/api/moveTask/${event.added.element._id}/todo`,
            method: 'GET'
          })
        }}
    },

    async deleteTask (task, column) {
      console.log(task._id)
      console.log(column.title);
        if (column.title === 'Done') {
          await axios({
            url: `https://airika-todoapp.herokuapp.com/api/done-tasks/${task._id}`,
            method: 'DELETE'
          })
          .then (() =>
             window.location.reload())
        }
        if (column.title === 'Todo') {
          await axios({
            url: `https://airika-todoapp.herokuapp.com/api/todo-tasks/${task._id}`,
            method: 'DELETE'
          })
          .then (() =>
            window.location.reload())
          }
    }
    }
}
</script>

<style scoped>
  .column-double-width {
    min-width: 460px;
    width: 460px;
  }

  .column-width {
    min-width: 320px;
    width: 320px;
  }

  .ghost-card {
    opacity: 0.5;
    background: #f7fafc;
    border: 1px solid #4299e1;
  }

 .hello {
    font-size: 25px;
    color: rgba(55, 65, 81, 0.7)
  }
</style>
