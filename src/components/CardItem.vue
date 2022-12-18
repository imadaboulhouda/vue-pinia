<template>
  <div>
    <p @click="showMessage(data.id)">
      {{ data.id }} - {{ data.title }} - User id : {{ data.userId }}
    </p>
  </div>
</template>

<script setup>
import { toRefs } from "vue";

const d = defineProps({
  data: Object,
});
let emit = defineEmits(["submitData"]);
const showMessage = (data) => {
  emit("submitData", data);
};

const { data } = toRefs(d);
</script>

<style></style>
