<template>
  <div class="bg-white shadow rounded px-3 pt-3 pb-5 border-2" :class="'border-' + task.color.toLowerCase() + '-400'">
    <div class="flex justify-between">
      <p class="text-gray-700 font-semibold font-sans tracking-wide text-sm">{{ task.title }}</p>
      <button class="deleteButton" @click="deleteTask(task) ">X</button>
    </div>
    <div class="flex mt-4 justify-between items-center">
      <span class="text-sm text-gray-600">{{ moment(task.date).format("DD.MMMM YYYY") }}</span>
      <badge v-if="task.priority" :color="badgeColor"><span>{{ task.priority | capitalize }}</span></badge>
    </div>
    <div>
    <p class="text-gray-700 pt-3 font-semibold font-sans tracking-wide text-sm"> Created by {{ task.createdBy }}</p>
    </div>
  </div>
</template>
<script>
import Badge from "./Badge.vue";
import App from "../App.vue";

export default {
  components: {
    Badge,
    App
  },
  props: {
    columns: [],
    task: {
      priority: Object,
      color: Object,
      default: () => ({}),
    },
  },
  computed: {
    badgeColor() {
      const mappings = {
        HIGH: "red",
        MEDIUM: "yellow",
        LOW: "green",
        default: "teal"
      };
      return mappings[this.task.priority] || mappings.default;
    }
  },
  methods: {    
    async deleteTask (task, column) {
      console.log(task._id)
      console.log(column.title);
        if (column.title === 'Done') {
          await axios({
            url: `https://airika-todoapp.herokuapp.com/api/done-tasks/${task._id}`,
            method: 'DELETE',
            data: this.task,
          })
          this.$emit("task-deleted")
          }
        if (column.title === 'Todo') {
          await axios({
            url: `https://airika-todoapp.herokuapp.com/api/todo-tasks/${task._id}`,
            method: 'DELETE',
            data: this.task,
          })
          this.$emit("task-deleted")
          }
    }
  },
};
</script>

<style>
.deleteButton {
	border-radius: 4px;
	display:inline-block;
	cursor:pointer;
	color:#FF2D00;
	font-size: 10px;
	padding: 2px 4px;
	text-decoration:none;
}

.deleteButton:hover {
  background-color: rgba(255, 152, 130, 0.3);
}
  
</style>
