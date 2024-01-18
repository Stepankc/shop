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
      placeholder="цена"
    />
    <input
      v-model="product.image"
      type="text"
      class="input"
      placeholder="картинка"
    />
  </form>
  <button @click="createProduct">Создать товар</button>
</template>

<script lang="ts">
export default {
  emits: ["create"],
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
  methods: {
    createProduct() {
      console.log(this.product);

      this.$emit("create", this.product);
    },
  },
};
</script>

<style lang="scss" scoped></style>
