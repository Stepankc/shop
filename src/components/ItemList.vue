<template>
  <div class="container">
    <item-card v-for="item in items" :key="item.id" :item="item" />
  </div>
</template>

<script lang="ts">
import ItemCard from "./ItemCard.vue";
export default {
  components: { ItemCard },
  props: {
    items: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  padding-top: 72px;
  display: grid;
  grid-template-columns: repeat(4, 18%);
  justify-content: center;
  gap: 20px;
}
</style>