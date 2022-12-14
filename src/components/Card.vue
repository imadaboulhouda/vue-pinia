<template>
  <div>{{ data.id }} - {{ data.title }} - User id : {{ data.userId }}</div>
</template>

<script setup>
const { data } = defineProps({
  data: Object,
});
</script>

<style></style>
