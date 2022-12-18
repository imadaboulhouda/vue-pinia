<script setup>
import Card from "@/components/CardItem.vue";
import { usePostStore } from "@/stores/usePostStore.js";
import { onBeforeMount } from "vue";

const store = usePostStore();

onBeforeMount(store.PostAction);
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
