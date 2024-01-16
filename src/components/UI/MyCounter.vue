<template>
  <div class="counter-container">
    <label for="quantity">Количество:</label>
    <select id="quantity" v-model="count" @change="updateQuantity">
      <option
        v-for="quantity in quantityOptions"
        :key="quantity"
        :value="quantity"
      >
        {{ quantity }}
      </option>
    </select>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    id: {
      type: Number,
      required: true,
    },
  },
  data() {
    const quantityOptions: number[] = Array.from(
      { length: 10 },
      (_, index) => index + 1
    );
    const count =
      this.$store.state.cart.find((product: CartProduct) => product.id === this.$props.id)
        ?.quantity || 1;

    return {
      count: count as number,
      quantityOptions,
    };
  },
  methods: {
    updateQuantity(): void {
      this.$store.commit("updateQuantity", {
        id: this.$props.id,
        value: this.count,
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.counter-container {
  display: flex;
  align-items: center;

  label {
    margin-right: 10px;
  }

  select {
    padding: 8px;
    font-size: 14px;
    border: 1px solid #ddd;
    border-radius: 4px;
    outline: none;
    cursor: pointer;

    &:hover {
      border-color: #aaa;
    }
  }
}
</style>
