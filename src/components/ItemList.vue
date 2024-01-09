<template>
    <div class="container">
        <item-card v-for="post in posts" :post="post" />
    </div>
</template>

<script lang="ts">
import ItemCard from './ItemCard.vue';
export default {
    components: { ItemCard },
    props: {
        posts: {
            type: Array,
            required: true
        }
    }
}
</script>

<style lang="scss" scoped>
.container {
    display: grid;
    grid-template-columns: repeat(4, 18%);
    justify-content: center;
    gap: 20px;
}
</style>