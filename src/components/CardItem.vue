<template>
  <div>
    <p>{{ data.id }} - {{ data.title }} - User id : {{ data.userId }}</p>
  </div>
</template>

<script setup>
import { toRefs } from "vue";

const d = defineProps({
  data: Object,
});
const { data } = toRefs(d);
</script>

<style></style>
