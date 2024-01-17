<template>
  <div class="container">
    <div class="content">
      <img class="img" :src="product.image" alt="" />
      <div class="item-info">
        <h1>{{ product.title }}</h1>
        <div>
          Цена:
          <strong>{{ currency }}</strong>
        </div>
        <button @click="$store.commit('addToCart', product)">
          добавить в корзину
        </button>
      </div>
      <div class="decription">
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
  margin-top: 16px;
  display: flex;
  justify-content: center;
}

.content {
  max-width: 75%;
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 20px;
}

.img {
  max-height: 50vh;
}

.item-info {
  display: flex;
  flex-flow: column;
  gap: 10px;
  font-size: large;
}

.decription {
  grid-column: span 2;
  display: flex;
  gap: 10px;
  flex-direction: column;
}
</style>
