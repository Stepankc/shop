<template>
  <div class="card">
    <img :src="item.image" alt="" class="img" />
    <div class="card-title">
      <p>{{ item.title }}</p>
      <div class="card-info">
        <b>{{ price }}</b>
        <my-counter :id="item.id" />
        <Trash
          class="del-btn"
          @click="$store.commit('removeFromCart', item.id)"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import MyCounter from "../UI/MyCounter.vue";
import { PropType } from "vue";
import { formatPrice } from "../../utils/formatPrice";
import Trash from "../../assets/Trash.vue";

export default {
  components: { MyCounter, Trash },
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
