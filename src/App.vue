<template>
  <div>
    <MyHeader />
    <item-list :items="items" />
    <MyDrawer />
  </div>
</template>

<script lang="ts">
import MyHeader from "./components/MyHeader.vue";
import ItemList from "./components/ItemList.vue";
import MyDrawer from "./components/MyDrawer.vue";

export default {
  components: { MyHeader, ItemList, MyDrawer },
  data() {
    return {
      posts: [
        {
          id: 1,
          image: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
          title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
          body: "109.95",
        },
        {
          id: 2,
          image: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
          title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
          body: "Описание поста 2",
        },
        {
          id: 3,
          image: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
          title: "js 3",
          body: "Описание поста 3",
        },
        { id: 4, title: "js 4", body: "Описание поста 4" },
        { id: 4, title: "js 4", body: "Описание поста 4" },
        { id: 4, title: "js 4", body: "Описание поста 4" },
        { id: 4, title: "js 4", body: "Описание поста 4" },
        { id: 4, title: "js 4", body: "Описание поста 4" },
        { id: 4, title: "js 4", body: "Описание поста 4" },
        { id: 4, title: "js 4", body: "Описание поста 4" },
        { id: 4, title: "js 4", body: "Описание поста 4" },
        { id: 1, title: "js", body: "Описание поста 1" },
        { id: 2, title: "js 2", body: "Описание поста 2" },
        { id: 3, title: "js 3", body: "Описание поста 3" },
        { id: 4, title: "js 4", body: "Описание поста 4" },
        { id: 4, title: "js 4", body: "Описание поста 4" },
        { id: 4, title: "js 4", body: "Описание поста 4" },
        { id: 4, title: "js 4", body: "Описание поста 4" },
        { id: 4, title: "js 4", body: "Описание поста 4" },
        { id: 4, title: "js 4", body: "Описание поста 4" },
        { id: 4, title: "js 4", body: "Описание поста 4" },
        { id: 4, title: "js 4", body: "Описание поста 4" },
        { id: 4, title: "js 4", body: "Описание поста 4" },
      ],
    };
  },
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font: "Fira Sans", sans-serif;
}
</style>