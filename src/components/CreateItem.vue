<template>
  <form @submit.prevent>
    <input
      v-model="product.title"
      type="text"
      class="input"
      placeholder="название"
    />
    <textarea
      v-model="product.description"
      class="input"
      placeholder="описание"
      rows="3"
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
        id: (this.$store.state.item.length + 1) as number,
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

<style lang="scss" scoped>
form {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
input,
textarea {
  border-radius: 12px;
  color: #1d1d1f;
  letter-spacing: 0;
  border: 1px solid #00000026;
  width: 100%;
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
textarea {
  resize: vertical;
  max-width: 100%;
  height: auto;
  min-height: 64px;
  max-height: 250px;
}
</style>
