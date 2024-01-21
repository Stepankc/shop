<template>
  <div class="app">
    <MyHeader @toggle-drawer="toggleDrawer" @show-dialog="showDialog" />
    <router-view></router-view>
    <MyDrawer :isDrawerOpen="isDrawerOpen" @toggle-drawer="toggleDrawer" />
    <Modal v-model:show="dialogVisible">
      <template #header> <h1>Создание товара</h1> </template>
      <div class="create-product">
        <CreateItem v-model="product" />
      </div>
      <template #footer>
        <button @click="createProduct">Создать товар</button>
      </template>
    </Modal>
  </div>
</template>

<script lang="ts">
import { mapMutations } from "vuex";
import MyHeader from "./components/MyHeader.vue";
import MyDrawer from "./components/MyDrawer.vue";
import Modal from "./components/UI/Modal.vue";
import CreateItem from "./components/CreateItem.vue";
import "v-calendar/dist/style.css";
import "./global.scss";

export default {
  components: { MyHeader, MyDrawer, Modal, CreateItem },
  data() {
    return {
      isDrawerOpen: false as Boolean,
      dialogVisible: false as Boolean,
      product: {} as Product,
    };
  },
  methods: {
    ...mapMutations(["setItem"]),
    styleOverflow(style: string) {
      document.getElementsByTagName("body")[0].style.overflow = style;
    },
    toggleDrawer(): void {
      if (this.isDrawerOpen === true) {
        this.isDrawerOpen = false;
        this.styleOverflow("auto");
      } else {
        this.isDrawerOpen = true;
        this.styleOverflow("hidden");
      }
    },
    showDialog(): void {
      if (this.dialogVisible === true) {
        this.dialogVisible = false;
        this.styleOverflow("auto");
      } else {
        this.dialogVisible = true;
        this.styleOverflow("hidden");
      }
    },
    createProduct(): void {
      this.setItem(this.product);
      this.dialogVisible = false;
      this.styleOverflow("auto");
    },
  },
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  text-decoration: none;
  color: inherit;
}


</style>
