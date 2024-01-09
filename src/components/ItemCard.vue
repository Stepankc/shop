<template>
    <div class="card">
        <div class="card-img">
            <img :src="post.image" alt="" class="img">
        </div>
        <div class="card-info">
            <h4 class="title">{{ post.title }}</h4>
            <div>${{ post.body }}</div>
        </div>
    </div>
</template>

<script lang="ts" setup>
defineProps({
    post: Object,
    required: Boolean,
})

// props: {
//         post: Object,
//         required: Boolean,
//     },
</script>

<style lang="scss" scoped>
.card {
    margin: 15px;
    /* border: 2px solid teal; */
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
    row-gap: 10px;

    .img {
        max-height: 300px;
    }

    .card-info {
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 10px;
        font-size: large;
        color: rgb(13, 13, 13);

    }
}
</style>