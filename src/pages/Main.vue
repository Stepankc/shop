<template>
  <div>
    <div v-if="isLoading === true" class="page-loader">
      <loader />
    </div>
    <item-list :items="$store.state.item" v-if="isLoading === false" />
  </div>
</template>

<script lang="ts">
import { mapActions } from "vuex";
import Loader from "../components/UI/Loader.vue";
import ItemList from "../components/ItemList.vue";

export default {
  data() {
    return {
      isLoading: false as boolean,
    };
  },
  methods: {
    ...mapActions(["fetchProducts"]),
  },
  async mounted() {
    this.isLoading = true;
    try {
      await this.fetchProducts();
    } catch (error) {
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
