<template>
  <div>
    <div class="right-drawer" :style="{ width: isDrawerOpen ? '500px' : '0' }">
      <div class="wrapper">
        <div class="drawer-header">
          <div class="cart">Корзина</div>
          <button class="close" @click="toggleDrawer">&#9587;</button>
        </div>
        <div class="drawer-middle">
          <cart-list :items="$store.state.cart" />
        </div>

        <div class="drawer-bottom">
          <div class="total-sum">
            <span>Итого:</span>
            <div class="dash"></div>
            <b>{{ $store.getters.totalPrice }}</b>
          </div>

          <button
            class="confirm-btn"
            :disabled="$store.state.cart.length === 0"
            @click="goToCart"
          >
            Перейти к оформлению заказа
          </button>
        </div>
      </div>
    </div>
    <div class="drawer-mask" v-if="isDrawerOpen" @click="toggleDrawer"></div>
  </div>
</template>

<script lang="ts">
import CartList from "./cart/CartList.vue";

export default {
  components: { CartList },
  props: {
    isDrawerOpen: {
      type: Boolean,
      required: true,
    },
  },
  methods: {
    toggleDrawer(): void {
      this.$emit("toggle-drawer");
    },
    goToCart(): void {
      this.$router.push({ name: "Order" });
      this.toggleDrawer();
    },
  },
};
</script>

<style lang="scss" scoped>
.close {
  background: white;
  border: 0;
  cursor: pointer;
  font-weight: bold;
}

.right-drawer {
  position: fixed;
  top: 0;
  right: 0;
  height: 100%;
  width: 500px;
  border-left: 1px solid whitesmoke;
  background: white;
  z-index: 200;
  transition: all 0.2s;

  .wrapper {
    padding: 10px 20px;
    height: 100%;
    display: flex;
    flex-direction: column;
  }

  .drawer-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 15px;
  }

  .cart {
    font-size: large;
  }

  .drawer-middle {
    flex-grow: 1;
    overflow-y: auto;
  }
  .drawer-bottom {
    .total-sum {
      margin: 15px 0;
      display: flex;
      gap: 5px;

      .dash {
        border-bottom: 1px dotted rgb(155, 155, 155);
        flex-grow: 1;
      }
    }

    .confirm-buy {
      border: 0;
      border-radius: 12px;
      padding: 14px 0;
      width: 100%;
      background-color: #84cc16;
      color: white;
      cursor: pointer;
      overflow: hidden;
      white-space: nowrap;
      &:hover {
        background-color: #65a30d;
      }
      &:active {
        background-color: #4d7c0f;
      }
      &:disabled {
        background-color: #d1d5db;
        cursor: default;
      }
    }
  }
}

.drawer-mask {
  position: fixed;
  top: 0;
  height: 100%;
  width: 100%;
  background: #00000094;
  opacity: 0.3;
  z-index: 199;
  transition: opacity 0.2s;
}

.confirm-btn {
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
