<template>
  <div
    class="card"
    @click="$router.push({ name: 'ItemDetails', params: { id: item.id } })"
  >
    <div class="card-img">
      <img :src="item.image" alt="" class="img" />
    </div>
    <div class="card-info">
      <h4 class="title">{{ item.title }}</h4>
      <div class="price">
        <div>{{ currency }}</div>
        <button @click.stop="addToCart" :disabled="isInCart">
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
  methods: {
    addToCart(): void {
      if (!this.isInCart) {
        this.$store.commit("addToCart", this.item);
      }
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
  border: 2px solid #e2e8f0;
  border-radius: 16px;
  padding: 8px;
  height: 100%;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }

  .card-img {
    display: flex;
    flex-grow: 1;
  }
  .img {
    max-height: 300px;
    max-width: 300px;
    padding: 8px;
  }

  .card-info {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
    font-size: large;
    color: rgb(13, 13, 13);

    .price {
      display: flex;
      justify-content: space-between;
    }
  }
}
</style>
