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
.order {
  position: relative;
  height: 100%;
  > .order-card {
    position: sticky;
    top: 80px;

    display: flex;
    flex-direction: column;
    gap: 16px;

    box-shadow: 0 0.125rem 1rem #00000025;
    padding: 16px;
    border-radius: 12px;

    & button {
      background: var(--primary-color);
      border-radius: 12px;
      color: #fff;
      letter-spacing: 0;
      border: none;
      width: 100%;
      height: 48px;
      padding: 16px;
      font-size: 16px;
      font-weight: 600;
      line-height: 1.25;
      cursor: pointer;
      opacity: 0.9;
      &:hover {
        opacity: 1;
      }
    }
  }
}
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
    width: 500px;
    z-index: 1;
    display: flex;
    flex-direction: column;
    gap: 16px;
    padding: 16px;
    border-radius: 12px;

    & h1 {
      font-size: 20px;
      font-weight: 600;
    }

    & input {
      border-radius: 12px;
      color: #1d1d1f;
      letter-spacing: 0;
      border: 1px solid #00000026;
      width: 100%;
      height: 48px;
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
