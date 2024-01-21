<template>
  <div class="app">
    <MyHeader @toggle-drawer="toggleDrawer" @show-dialog="showDialog" />
    <router-view></router-view>
    <MyDrawer :isDrawerOpen="isDrawerOpen" @toggle-drawer="toggleDrawer" />
    <Modal v-model:show="dialogVisible">
      <template #header>
        <h1 class="title">Создание товара</h1>
        <button class="close" @click="showDialog">&#9587;</button>
      </template>
      <div class="create-product">
        <CreateItem v-model="product" />
      </div>
      <template #footer>
        <button class="create-btn" @click="createProduct">Создать товар</button>
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

<style lang="scss" scoped>
.title {
  font-size: 20px;
  font-weight: 600;
}

.close {
  background: white;
  border: 0;
  cursor: pointer;
  font-weight: bold;
}

.create-btn {
  background: var(--primary-color);
  border-radius: 12px;
  color: #fff;
  letter-spacing: 0;
  border: none;
  width: 100%;
  height: 48px;
  padding: 16px;
  font-size: 16px;
  font-weight: 600;
  line-height: 1.25;
  cursor: pointer;
  opacity: 0.9;
  &:hover {
    opacity: 1;
  }
}
</style>
