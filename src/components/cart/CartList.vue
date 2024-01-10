<template>
  <div class="container">
    <item-cart v-for="item in items" :key="item.id" :item="item" />
  </div>
</template>

<script lang="ts">
import ItemCart from "./ItemCart.vue";
export default {
  components: { ItemCart },
  props: {
    items: {
      type: Array,
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  display: grid;
  grid-auto-flow: row;
  justify-content: center;
  gap: 20px;
}
</style>