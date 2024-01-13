<template>
  <div>
    <div class="right-drawer" :style="{ width: isDrawerOpen ? '25vw' : '0' }">
      <div class="wrapper">
        <div class="drawer-header">
          <div class="cart">Корзина</div>
          <button class="close" @click="toggleDrawer">&#9587;</button>
        </div>
        <div class="drawer-middle">
          <cart-list />
          <item-cart />
        </div>

        <div class="drawer-bottom">
          <div class="total-sum">
            <span>Итого:</span>
            <div class="dash"></div>
            <b>1200</b>
          </div>

          <button disabled="" class="confirm-buy">
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
import ItemCart from "./cart/ItemCart.vue";

export default {
  components: { ItemCart, CartList },
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
  },
};
</script>
  
<style lang="scss" scoped>
.close {
  background: white;
  border: 0;
  cursor: pointer;
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
        border-bottom: 1px dotted rgb(127, 127, 127);
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
</style>
  