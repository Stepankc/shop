<template>
    <header>
        <div class="wrapper">
            <div class="nav">
                <div>Товары</div>
            </div>
            <div class="logo">
                <img src="../../public/logo.svg" alt="">
            </div>
            <div class="cart">
                <img src="../../public/cart-outline.svg" alt="" class="cart-image">
                <div class="cart-badge">5</div>
            </div>
        </div>
    </header>
</template>

<script lang="ts">
export default {}
</script>

<style lang="scss" scoped>
.wrapper {
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.cart {
    cursor: pointer;

    .cart-image {
        height: 30px;
    }

    .cart-badge {
        position: absolute;
        top: 10px;
        right: 15px;
        color: white;
        background: #ff0000;
        font-size: 12px;
        padding: 2px 5px;
        border-radius: 20px;
        font-weight: 600;
    }
}
</style>