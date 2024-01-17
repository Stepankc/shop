import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Main from "../pages/Main.vue";
import ItemDetails from "../components/ItemDetails.vue";
import Order from "../pages/Order.vue";

const routes: Array<RouteRecordRaw> = [
  { path: "/", component: Main },
  {
    path: "/item/:id",
    name: "ItemDetails",
    component: ItemDetails,
    props: true,
  },
  {
    path: "/cart",
    name: "Order",
    component: Order,
  },
];

const router = createRouter({
  routes,
  history: createWebHistory(),
});

export default router;
