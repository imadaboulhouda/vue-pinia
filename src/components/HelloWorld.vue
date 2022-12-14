<script setup>
import Card from "@/components/Card.vue";
import { usePostStore } from "@/stores/usePostStore.js";

const store = usePostStore();
store.PostAction();
</script>
<style scope>
body {
  background: white;
}
</style>

<template>
  <div v-for="(data, index) in store.posts" :key="index">
    <Card :data="data" />
  </div>
</template>
