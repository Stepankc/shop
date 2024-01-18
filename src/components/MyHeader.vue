<template>
  <header>
    <div class="wrapper">
      <nav class="menu">
        <ul>
          <li>Создать товар</li>

          <li><router-link to="/">Товары</router-link></li>
        </ul>
      </nav>
      <div class="logo">
        <img src="../../public/logo.svg" alt="" />
      </div>
      <div class="cart" @click="toggleDrawer">
        <img src="../../public/cart-outline.svg" alt="" class="cart-image" />
        <div class="cart-badge" v-if="$store.state.cart.length > 0">
          {{ $store.state.cart.length }}
        </div>
      </div>
    </div>
  </header>
</template>

<script lang="ts">
export default {
  methods: {
    toggleDrawer(): void {
      this.$emit("toggle-drawer");
    },
  },
};
</script>

<style lang="scss" scoped>
header {
  position: sticky;
  top: 0;
  z-index: 1;
  background-color: #fff;
  box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.08), 0 2px 4px 0 rgba(0, 0, 0, 0.12);
}
.wrapper {
  padding: 10px 20px;
  display: grid;
  justify-content: space-between;
  grid-template-columns: 20% auto 20%;
  align-items: center;
}

.menu * {
  display: inline;
}

ul {
  gap: 10px;
}

.menu li {
  margin: 20px;
  cursor: pointer;
  user-select: none;

  &:hover {
    color: var(--primary-color);
  }
}

.cart {
  cursor: pointer;
  justify-self: end;

  .cart-image {
    height: 30px;
  }

  .cart-badge {
    position: absolute;
    top: 10px;
    right: 15px;
    color: white;
    background: #ff0000;
    font-size: 12px;
    padding: 2px 5px;
    border-radius: 20px;
    font-weight: 600;
  }
}
</style>
