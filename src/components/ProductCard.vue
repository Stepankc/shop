<template>
  <div
    class="card"
    @click="$router.push({ name: 'ItemDetails', params: { id: item.id } })"
  >
    <div class="card-img">
      <img :src="item.image" alt="" class="img" />
    </div>
    <div class="card-info">
      <h4 class="title" :title="item.title">{{ item.title }}</h4>
      <div class="price">
        <div>{{ currency }}</div>
        <button
          @click.stop="$store.commit('addToCart', item)"
          :disabled="isInCart"
        >
          {{ isInCart ? "Товар в корзине" : "Добавить в корзину" }}
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { PropType } from "vue";
import { formatPrice } from "../utils/formatPrice";

export default {
  props: {
    item: {
      type: Object as PropType<Product>,
      required: true,
    },
  },
  computed: {
    currency(): string {
      return formatPrice(this.item.price);
    },
    isInCart(): boolean {
      return this.$store.state.cart.some(
        (cartItem: CartProduct) => cartItem.id === this.item.id
      );
    },
  },
};
</script>

<style lang="scss" scoped>
.card {
  grid-column: span 3 / span 3;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  row-gap: 10px;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  padding: 12px;
  height: 100%;
  width: 100%;
  transition: transform 0.3s ease;

  box-shadow: 0 0 #0000, 0 0 #0000, 0 0 #0000, 0 0 #0000,
    0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }

  .card-img {
    width: 128px;
    height: 128px;
    overflow: hidden;
  }
  .img {
    object-fit: contain;
    width: 100%;
    height: 100%;
    display: block;
  }

  .card-info {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 4px;
    color: #18181baa;

    .price {
      display: flex;
      flex-direction: column;
      gap: 8px;
      font-weight: 700;
      color: #18181b;
    }
  }
}
h4 {
  font-size: 16px;
  font-weight: 500;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 30ch;
}

button {
  background: var(--primary-color);
  border: 1px solid var(--primary-color);
  border-radius: 12px;
  color: #fff;
  letter-spacing: 0;
  width: 100%;
  padding: 8px;
  font-size: 16px;
  font-weight: 600;
  line-height: 1.25;
  opacity: 0.9;

  &:not(:disabled) {
    &:hover {
      opacity: 1;
    }
    cursor: pointer;
  }

  &:disabled {
    opacity: 1;
    background: white;
    border: 1px solid var(--primary-color);
    color: var(--primary-color);
  }
}
</style>
