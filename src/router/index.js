import { createRouter, createWebHistory } from 'vue-router';
import Login from '../components/Login.vue';
import Signup from '../components/Signup.vue';
import Home from '../../src/Home.vue';
import TasksList from '../components/TaskList.vue';
import AddTask from '../components/AddTask.vue';
import EditTask from '../components/EditTask.vue';


const routes = [
  { path: '/login', component: Login },
  { path: '/signup', component: Signup },
  { path: '/home', component: Home },
  { path: '/tasklist', name: 'tasklist', component: TasksList },
  { path: '/add', name: 'add', component: AddTask },
  { path: '/edit/:id', name: 'edit', component: EditTask, props: true },
  
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
