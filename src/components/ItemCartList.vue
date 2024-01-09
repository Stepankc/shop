<template>
    <div class="container">
        <item-cart v-for="post in posts" :post="post" />
    </div>
</template>

<script lang="ts">
import ItemCart from './ItemCart.vue';
export default {
    components: { ItemCart },
    props: {
        posts: {
            type: Array,
        }
    }
}
</script>

<style lang="scss" scoped>
.container {
    display: grid;
    grid-auto-flow: row;
    justify-content: center;
    gap: 20px;
}
</style>