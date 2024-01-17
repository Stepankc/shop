<template>
  <div class="dialog" v-if="show" @click.stop="hideDialog">
    <div @click.stop class="dialog-content">
      <form @submit.prevent>
        <h4>Создать товар</h4>
        <input type="text" placeholder="Название" />
        <input type="text" placeholder="Описание" />
        <input type="number" placeholder="Цена" />
        <input type="text" placeholder="Категория" />
        <button>Создать</button>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    show: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    hideDialog() {
      this.$emit("update:show", false);
    },
  },
  mounted() {},
};
</script>

<style lang="scss" scoped>
.dialog {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  display: flex;
  z-index: 3;

  .dialog-content {
    margin: auto;
    background: white;
    border-radius: 12px;
    min-height: 50px;
    min-width: 300px;
    padding: 20px;
  }
}
</style>
