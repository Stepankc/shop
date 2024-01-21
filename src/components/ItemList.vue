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
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 16px;
  margin-top: 16px;
  margin-bottom: 128px;
}
</style>
