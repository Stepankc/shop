import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Main from "../pages/Main.vue";
import ItemDetails from "../components/ItemDetails.vue";

const routes: Array<RouteRecordRaw> = [
  { path: "/", component: Main },
  {
    path: "/item/:id",
    name: "ItemDetails",
    component: ItemDetails,
    props: true,
  },
];

const router = createRouter({
  routes,
  history: createWebHistory(),
});

export default router;
