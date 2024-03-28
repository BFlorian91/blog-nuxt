<script setup lang="ts">
import { onMounted } from "vue";
const props = defineProps<{ msg: [string] | string }>();

onMounted(() => {
  setTimeout(() => {
    console.info("Debug: ", props.msg);
  }, 500);
});
</script>

<template>
  <h1 class="text-3xl font-bold text-debug">Debug: {{ props.msg }}</h1>
</template>
