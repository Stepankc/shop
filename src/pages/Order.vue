<template>
  <div class="container">
    <div class="products">
      <item-cart
        v-for="item in $store.state.cart"
        :key="item.id"
        :item="item"
      />
    </div>
    <div class="order">
      <div class="order-card">
        <h1>Оформление заказа</h1>
        <input type="text" placeholder="Адрес доставки" />
        <input type="text" placeholder="Дата доставки" />
        <div class="order-price">
          <h1>Стоимость:</h1>
          <div class="dash"></div>
          <h1>
            {{ $store.getters.totalPrice }}
          </h1>
        </div>
        <button>Заказать</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import ItemCart from "../components/cart/ItemCart.vue";
export default {
  components: { ItemCart },
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  margin-top: 16px;
  padding-right: 16px;
  padding-left: 16px;
  margin-right: auto;
  margin-left: auto;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 16px;
  grid-row-gap: 16px;
  height: 100%;

  > div {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }
  > div:nth-child(1) {
    grid-column: span 7 / span 7;
  }
  > div:nth-child(2) {
    grid-column: span 5 / span 5;
  }
}
@media (min-width: 576px) {
  .container {
    max-width: 540px;
  }
}
@media (min-width: 768px) {
  .container {
    max-width: 720px;
  }
}
@media (min-width: 992px) {
  .container {
    max-width: 1200px;
  }
}
.order {
  position: relative;
  height: 100%;
  > .order-card {
    position: sticky;
    top: 80px;

    display: flex;
    flex-direction: column;
    gap: 16px;

    box-shadow: 0 0.125rem 1rem #00000025;
    padding: 16px;
    border-radius: 12px;

    & h1 {
      font-size: 20px;
      font-weight: 600;
    }

    & input {
      border-radius: 12px;
      color: #1d1d1f;
      letter-spacing: 0;
      border: 1px solid #00000026;
      width: 100%;
      height: 48px;
      padding: 16px;
      font-size: 16px;
      font-weight: 400;
      line-height: 1.25;
      outline: none;
      &:focus {
        border-color: var(--primary-color);
        outline: 1px solid;
        outline-color: var(--primary-color);
      }
    }

    & button {
      background: var(--primary-color);
      border-radius: 12px;
      color: #fff;
      letter-spacing: 0;
      border: none;
      width: 100%;
      height: 48px;
      padding: 16px;
      font-size: 16px;
      font-weight: 400;
      line-height: 1.25;
      cursor: pointer;
      opacity: 0.9;
      &:hover {
        opacity: 1;
      }
    }
  }
  .order-price {
    display: flex;
    gap: 8px;
  }
  .dash {
    border-bottom: 1px dotted rgb(155, 155, 155);
    flex-grow: 1;
  }
}
</style>
