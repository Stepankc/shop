<template>
    <div class="card">
        <img src="https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg" alt="" class="img">
        <div class="card-title">
            <p>post.</p>
            <div class="card-info">
                <b>$12</b>
                <my-counter />
                <img class="del-btn" src="../../public/trash-light.svg" alt="">
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import MyCounter from './UI/MyCounter.vue'

defineProps({
    post: Object,
    required: Boolean,
})
</script>

<style lang="scss" scoped>
.card {
    display: flex;
    border: 2px solid rgba(112, 128, 144, 0.436);
    border-radius: 12px;
    padding: 4px;
    align-items: stretch;
    width: 100%;
    gap: 15px;

    .img {
        width: 64px;
    }

    .card-title {
        display: flex;
        padding: 10px;
        justify-content: space-between;
        gap: 15px;
        flex-grow: 1;
        flex-direction: column;

        .card-info {
            display: flex;
            justify-content: space-between;
            align-items: center;

            .del-btn {
                width: 20px;
                opacity: 50%;
                cursor: pointer;
            }

            .del-btn:hover {
                opacity: 100%;
            }
        }
    }


}

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