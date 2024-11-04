<template>
    <h1 class="title">Hello world!</h1>
    <button @click="increase">increase</button>
    <span>{{ counter }}</span>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const counter = ref<number>(0)

const increase = () => {
    counter.value = counter.value + 1
}
</script>

<style lang="scss" scoped>
.title {
    color: red;
}
</style>

