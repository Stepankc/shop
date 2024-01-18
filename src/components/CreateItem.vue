<template>
  <form @submit.prevent>
    <input
      v-model="product.title"
      type="text"
      class="input"
      placeholder="название"
    />
    <input
      v-model="product.description"
      type="text"
      class="input"
      placeholder="описание"
    />
    <input
      v-model="product.price"
      type="number"
      class="input"
      min="0"
      placeholder="цена"
    />
    <input
      v-model="product.image"
      type="text"
      class="input"
      placeholder="картинка"
    />
  </form>
</template>

<script lang="ts">
import { PropType } from "vue";
export default {
  props: {
    modelValue: Object as PropType<Product>,
  },
  emits: ["update:modelValue"],
  data() {
    return {
      product: {
        title: "" as string,
        description: "" as string,
        price: 0 as number,
        image: "" as string,
      } as Product,
    };
  },
  watch: {
    product: {
      handler(newVal) {
        this.$emit("update:modelValue", newVal);
      },
      deep: true,
    },
  },
};
</script>

<style lang="scss" scoped></style>
