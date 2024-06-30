

<template>
  <div>
    <h2>Tasks List</h2>
    <router-link to="/add">Add New Task</router-link>
    <ul>
      <li v-for="task in tasks" :key="task._id">
        {{ task.title }} - {{ task.description }}
        <button @click="deleteTask(task._id)">Delete</button>
        <router-link :to="{ name: 'edit', params: { id: task._id }}">Edit</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tasks: [],
    };
  },
  mounted() {
    this.fetchTasks();
  },
  methods: {
    async fetchTasks() {
      try {
        const response = await fetch('http://localhost:3000/tasks');
        if (!response.ok) {
          throw new Error('Failed to fetch tasks');
        }
        this.tasks = await response.json();
      } catch (error) {
        console.error('Error fetching tasks:', error);
      }
    },
    async deleteTask(taskId) {
      try {
        const response = await fetch(`http://localhost:3000/tasks/${taskId}`, {
          method: 'DELETE',
        });
        if (!response.ok) {
          throw new Error('Failed to delete task');
        }
        this.fetchTasks(); // Refresh the list after delete
      } catch (error) {
        console.error('Error deleting task:', error);
      }
    },
  },
};
</script>

<style scoped>
/* Styles specific to this component */
</style>
