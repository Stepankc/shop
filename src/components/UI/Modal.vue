<template>
  <transition name="modal-fade">
    <div v-if="show" class="modal-overlay" @click.stop="closeModal">
      <div class="modal-container" @click.stop>
        <div class="modal-header">
          <slot name="header"></slot>
        </div>
        <div class="modal-body">
          <slot></slot>
        </div>
        <div class="modal-footer">
          <slot name="footer"></slot>
        </div>
      </div>
    </div>
  </transition>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    show: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    closeModal() {
      document.getElementsByTagName("body")[0].style.overflow = "auto";
      this.$emit("update:show", false);
    },
  },
});
</script>

<style scoped lang="scss">
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 3;

  .modal-container {
    background: white;
    padding: 20px;
    border-radius: 8px;
    width: 400px;
    z-index: 1;

    .modal-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 10px;
    }

    .modal-body {
      margin-bottom: 10px;
    }

    .modal-footer {
      display: flex;
      justify-content: flex-end;
    }

    .close-button {
      background: none;
      border: none;
      cursor: pointer;
      font-size: 16px;
      color: #333;
    }
  }
}

.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.5s;
}
.modal-fade-enter,
.modal-fade-leave-to {
  opacity: 0;
}
</style>
