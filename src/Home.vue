<script setup>
import TaskList from "./components/TaskList.vue";

</script>

<template>
  <div id="app">
    <header>
      <h1>Task Manager</h1>
      <nav>
        <router-link to="/home">Home</router-link>
        <router-link to="/add">Add Task</router-link>
      </nav>
    </header>
    <main>
<TaskList/>
    </main>
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>




<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #42b983;
  padding: 20px;
  color: white;
}

nav {
  display: flex;
  gap: 10px;
}

nav a {
  color: white;
  text-decoration: none;
}

nav a.router-link-active {
  font-weight: bold;
  text-decoration: underline;
}

main {
  padding: 20px;
}
</style>
