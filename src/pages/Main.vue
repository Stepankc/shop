<template>
  <div>
    <item-list :items="items" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { fetchProducts } from "../api/index";
import ItemList from "../components/ItemList.vue";

export default defineComponent({
  components: { ItemList },
  data() {
    return {
      items: [] as object[],
    };
  },
  methods: {
    fetchProducts(): void {
      fetchProducts().then((data) => {
        this.items = data;
      });
    },
  },
  mounted() {
    this.fetchProducts();
  },
});
</script>

<style lang="scss"></style>
