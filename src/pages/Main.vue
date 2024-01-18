<template>
  <div>
    <div v-if="isLoading === true" class="page-loader">
      <loader />
    </div>
    <item-list :items="$store.state.item" v-if="isLoading === false" />
  </div>
</template>

<script lang="ts">
import Loader from "../components/UI/Loader.vue";
import ItemList from "../components/ItemList.vue";
import { fetchProducts } from "../api/api";
import { mapMutations } from "vuex";

export default {
  data() {
    return {
      isLoading: false as boolean,
    };
  },
  methods: {
    ...mapMutations(["setItems"]),

    fetchProducts(): void {
      fetchProducts().then((data) => {
        this.setItems(data);
      });
    },
  },
  async mounted() {
    this.isLoading = true;
    try {
      this.fetchProducts();
    } finally {
      this.isLoading = false;
    }
  },
  components: { ItemList, Loader },
};
</script>

<style lang="scss">
.page-loader {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 32px;
}
</style>
