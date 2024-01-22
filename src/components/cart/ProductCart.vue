<template>
  <div class="card">
    <div class="card-img">
      <img :src="item.image" alt="" class="img" />
    </div>
    <div class="card-info">
      <p class="title" :title="item.title">{{ item.title }}</p>
      <div class="price">
        <b class="">{{ price }}</b>
        <my-counter :id="item.id" class="counter" />
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
  border-radius: 12px;
  padding: 4px;
  align-items: stretch;
  width: 100%;
  gap: 16px;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  box-shadow: 0 0 #0000, 0 0 #0000, 0 0 #0000, 0 0 #0000, 0 1px 3px #0000001a,
    0 1px 2px -1px #0000001a;
  padding: 10px;
  align-items: center;

  .card-img {
    width: 72px;
    height: 72px;
    overflow: hidden;
  }
  .img {
    object-fit: contain;
    width: 100%;
    height: 100%;
    display: block;
  }
  .title {
    font-size: 16px;
    font-weight: 500;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 30ch;
    color: #18181baa;
  }

  .card-info {
    display: grid;
    grid-template-columns: 1fr;
    gap: 8px;
    flex-grow: 1;
    flex-direction: column;

    .price {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      align-items: center;
      justify-items: start;

      .counter {
        justify-self: center;
      }
      .del-btn {
        justify-self: end;
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
