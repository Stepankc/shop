<template>
  <div>
    <MyHeader />
    <item-list :items="items" />
    <MyDrawer />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import MyHeader from "./components/MyHeader.vue";
import ItemList from "./components/ItemList.vue";
import MyDrawer from "./components/MyDrawer.vue";
import { formatPrice } from "./utils/formatPrice";

export default defineComponent({
  components: { MyHeader, ItemList, MyDrawer },
  data() {
    return {
      items: [] as object[],
    };
  },
  mounted() {
    fetch(`https://fakestoreapi.com/products/`)
      .then((res) => res.json())
      .then((data) => {
        this.items = data;
      })
      .catch((err) => console.log("Error", err));
  },
});
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font: "Fira Sans", sans-serif;
}
</style>