<template>
  <div class="app">
    <MyHeader @toggle-drawer="toggleDrawer" />
    <router-view></router-view>
    <MyDrawer :isDrawerOpen="isDrawerOpen" @toggle-drawer="toggleDrawer" />
  </div>
</template>

<script lang="ts">
import MyHeader from "./components/MyHeader.vue";
import MyDrawer from "./components/MyDrawer.vue";
import "v-calendar/dist/style.css";
import "./global.scss";

export default {
  components: { MyHeader, MyDrawer },
  data() {
    return {
      isDrawerOpen: false as Boolean,
    };
  },
  methods: {
    toggleDrawer(): void {
      if (this.isDrawerOpen === true) {
        this.isDrawerOpen = false;
        document.getElementsByTagName("body")[0].style.overflow = "auto";
      } else {
        this.isDrawerOpen = true;
        document.getElementsByTagName("body")[0].style.overflow = "hidden";
      }
    },
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  text-decoration: none;
  color: inherit;
}
</style>
