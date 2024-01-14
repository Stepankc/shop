<template>
  <div class="counter-container">
    <label for="quantity">Количество:</label>
    <select id="quantity" v-model="count">
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
  data() {
    const quantityOptions: number[] = Array.from(
      { length: 10 },
      (_, index) => index + 1
    );
    return {
      count: 1 as number,
      quantityOptions,
    };
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
