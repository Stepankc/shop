<template>
  <div class="card">
    <img :src="item.image" alt="" class="img" />
    <div class="card-title">
      <p>{{ item.title }}</p>
      <div class="card-info">
        <b>{{ price }}</b>
        <my-counter />
        <img
          class="del-btn"
          @click="$store.commit('removeFromCart', item.id)"
          src="../../../public/trash-light.svg"
          alt=""
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import MyCounter from "../UI/MyCounter.vue";
import Product from "../Types";
import { PropType } from "vue";
import { formatPrice } from "../../utils/formatPrice";

export default {
  components: { MyCounter },
  props: {
    item: {
      type: Object as PropType<Product>,
      required: true,
    },
  },
  computed: {
    price(): string {
      return formatPrice(this.$props.item.price);
    },
  },
};
</script>

<style lang="scss" scoped>
.card {
  display: flex;
  border: 2px solid rgba(112, 128, 144, 0.436);
  border-radius: 12px;
  padding: 4px;
  align-items: stretch;
  width: 100%;
  gap: 15px;
  padding: 10px;
  align-items: center;

  .img {
    max-width: 64px;
    max-height: 72px;
  }

  .card-title {
    display: flex;
    justify-content: space-between;
    gap: 15px;
    flex-grow: 1;
    flex-direction: column;

    .card-info {
      display: flex;
      justify-content: space-between;
      align-items: center;

      .del-btn {
        width: 20px;
        opacity: 50%;
        cursor: pointer;
      }

      .del-btn:hover {
        opacity: 100%;
      }
    }
  }
}
</style>
