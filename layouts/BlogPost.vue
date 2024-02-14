<script setup lang="ts">
const { next, prev } = useContent();
</script>

<template>
  <div class="container">
    <div class="content">
      <slot />
    </div>
    <div v-if="prev" class="prev-link">
      <p>Read prev post</p>
      <NuxtLink :to="prev._path"> prev: {{ prev.title }} </NuxtLink>
      <p>{{ prev.description }}</p>
    </div>
    <div v-if="next" class="next-link">
      <p>Read next post</p>
      <NuxtLink :to="next._path"> Next: {{ next.title }} </NuxtLink>
      <p>{{ next.description }}</p>
    </div>
  </div>
</template>
