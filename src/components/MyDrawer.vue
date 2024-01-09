<template>
    <div>
        <div style="text-align: right">
            <button class="toggle" @click="openDrawer">
                &#8942;&#8942;&#8942; Show Menu
            </button>
        </div>
        <div class="right-drawer" :style="{ width: isDrawerOpen ? '25vw' : '0' }">
            <div class="wrapper">
                <div class="drawer-header">
                    <div class="cart">Корзина</div>
                    <button class="close" @click="closeDrawer">&#9587;</button>
                </div>
                <item-cart-list />
            </div>
        </div>
        <div class="drawer-mask" v-if="isDrawerOpen" @click="closeDrawer"></div>
    </div>
</template>
  
<script setup lang="ts">
import { ref } from 'vue';
import ItemCartList from './ItemCartList.vue';

let isDrawerOpen = ref<boolean>(true);

const openDrawer = (): void => {
    isDrawerOpen.value = true;
};

const closeDrawer = (): void => {
    isDrawerOpen.value = false;
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
  