<template>
  <div class="container">
    <item-cart v-for="item in items" :key="item.id" :item="item" />
  </div>
</template>

<script lang="ts">
import { PropType } from "vue";
import ItemCart from "./ProductCart.vue";
export default {
  components: { ItemCart },
  props: {
    items: {
      type: Array as PropType<Array<CartProduct>>,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  display: grid;
  grid-auto-flow: row;
  gap: 16px;
  margin-bottom: 16px;
}
</style>
