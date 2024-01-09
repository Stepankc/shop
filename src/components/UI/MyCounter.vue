<template>
    <div class="counter-container">
        <label for="quantity">Количество:</label>
        <select id="quantity" v-model="count">
            <option v-for="quantity in quantityOptions" :key="quantity" :value="quantity">{{ quantity }}
            </option>
        </select>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const maxQuantity = 10;
const quantityOptions: number[] = [];

for (let i = 1; i <= maxQuantity; i++) {
    quantityOptions.push(i);
}

const count = ref(1);
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