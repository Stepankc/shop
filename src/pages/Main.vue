<template>
  <div>
    <item-list :items="$store.state.item" />
  </div>
</template>

<script lang="ts">
import { mapActions } from "vuex";
import ItemList from "../components/ItemList.vue";

export default {
  components: { ItemList },
  data() {
    return {};
  },
  methods: {
    ...mapActions(["fetchProducts"]),
  },
  mounted() {
    this.fetchProducts();
  },
};
</script>

<style lang="scss"></style>
