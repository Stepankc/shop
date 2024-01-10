<template>
  <div class="card">
    <div class="card-img">
      <img :src="item.image" alt="" class="img" />
    </div>
    <div class="card-info">
      <h4 class="title">{{ item.title }}</h4>
      <div>{{ currency }}</div>
    </div>
  </div>
</template>

<script lang="ts">
import { PropType } from "vue";
import Product from "./Types";
import { formatPrice } from "../utils/formatPrice";
export default {
  props: {
    item: {
      type: Object as PropType<Product>,
      required: true,
    },
  },
  computed: {
    currency() {
      return formatPrice(this.item.price);
    },
  },
};
</script>

<style lang="scss" scoped>
.card {
  margin: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  row-gap: 10px;

  .img {
    max-height: 300px;
    max-width: 300px;
  }

  .card-info {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
    font-size: large;
    color: rgb(13, 13, 13);
  }
}
</style>