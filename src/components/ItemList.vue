<template>
  <div class="container">
    <router-link
      v-for="item in items"
      :key="item.id"
      :to="{ name: 'ItemDetails', params: { id: item.id } }"
    >
      <!-- target="_blank" -->
      <item-card :item="item" />
    </router-link>
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
  margin-top: 16px;
  display: grid;
  grid-template-columns: repeat(4, 18%);
  justify-content: center;
  gap: 20px;
}
</style>
