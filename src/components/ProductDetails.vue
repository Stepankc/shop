<template>
  <div class="container">
    <h1 class="product-title">{{ product.title }}</h1>
    <div class="image-container">
      <img class="img" :src="product.image" alt="" />
    </div>
    <div class="product-info">
      <div class="currency">
        <h3>
          {{ currency }}
        </h3>
      </div>
      <button @click="$store.commit('addToCart', product)" :disabled="isInCart">
        {{ isInCart ? "Товар в корзине" : "Добавить в корзину" }}
      </button>
      <div class="currency">
        <h3>Описание:</h3>
        <p class="item-decription">{{ product.description }}</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { formatPrice } from "../utils/formatPrice";

export default {
  data() {
    return {
      product: {} as Product,
    };
  },
  computed: {
    currency() {
      return formatPrice(this.product.price);
    },
    isInCart(): boolean {
      return this.$store.state.cart.some(
        (cartItem: CartProduct) => cartItem.id === this.product.id
      );
    },
  },
  methods: {
    setProduct() {
      const id = this.$route.params.id as string;
      const numericId = parseInt(id);

      this.product = this.$store.getters.getItemById(numericId);
    },
  },
  mounted() {
    this.setProduct();
  },
};
</script>

<style lang="scss" scoped>
.container {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 16px;
  margin-top: 16px;
  margin-bottom: 128px;
}
.product-title {
  grid-column: span 12 / span 12;
  font-size: 20px;
  font-weight: 600;
}
.image-container {
  grid-column: span 7 / span 7;
  width: 100%;
  height: 100%;
  max-height: 600px;
  overflow: hidden;
}
.product-info {
  grid-column: span 5 / span 5;
  display: flex;
  flex-direction: column;
  gap: 8px;
  color: #18181b;
}
.img {
  object-fit: contain;
  width: 100%;
  height: 100%;
  display: block;
}

.item-decription {
  font-size: 16px;
  color: #18181baa;
}

.currency {
  flex-direction: column;
  gap: 4px;
  color: #18181b;
  font-size: 16px;
  & h3 {
    font-weight: 600;
  }
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
