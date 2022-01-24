import { createWebHistory, createRouter } from "vue-router";
import Home from "../views/Home.vue";
import LoanApplication from "../views/LoanApplication.vue"


const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/loan-application",
    name: "LoanApplication",
    component: LoanApplication,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;