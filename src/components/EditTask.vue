<!-- src/components/EditTask.vue -->

<template>
  <div>
    <h2>Edit Task</h2>
    <form @submit.prevent="updateTask">
      <label>Title: <input v-model="task.title" required></label><br>
      <label>Description: <textarea v-model="task.description"></textarea></label><br>
      <button type="submit">Update Task</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      task: null,
    };
  },
  async created() {
    await this.fetchTask();
  },
  methods: {
    async fetchTask() {
      try {
        const response = await fetch(`http://localhost:3000/tasks/${this.$route.params.id}`);
        if (!response.ok) {
          throw new Error('Failed to fetch task');
        }
        this.task = await response.json();
      } catch (error) {
        console.error('Error fetching task:', error);
      }
    },
    async updateTask() {
      try {
        const response = await fetch(`http://localhost:3000/tasks/${this.task._id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(this.task),
        });
        if (!response.ok) {
          throw new Error('Failed to update task');
        }
        this.$router.push('/'); // Redirect to tasks list after update
      } catch (error) {
        console.error('Error updating task:', error);
      }
    },
  },
};
</script>

<style scoped>
/* Styles specific to this component */
</style>
