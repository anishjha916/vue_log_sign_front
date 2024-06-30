<!-- src/components/AddTask.vue -->

<template>
  <div>
    <h2>Add New Task</h2>
    <form @submit.prevent="addTask">
      <label>Title: <input v-model="newTask.title" required></label><br>
      <label>Description: <textarea v-model="newTask.description"></textarea></label><br>
      <button type="submit">Add Task</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newTask: {
        title: '',
        description: '',
      },
    };
  },
  methods: {
    async addTask() {
      try {
        const response = await fetch('http://localhost:3000/tasks', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(this.newTask),
        });
        if (!response.ok) {
          throw new Error('Failed to add task');
        }
        this.$router.push('/home'); // Redirect to tasks list after adding
      } catch (error) {
        console.error('Error adding task:', error);
      }
    },
  },
};
</script>

<style scoped>
/* Styles specific to this component */
</style>
