<script setup lang="ts">
const { next, prev } = useContent();
</script>

<template>
  <div class="container">
    <div class="prose prose-slate bg-red-400">
      <slot />
    </div>
    <div class="flex">
      <div v-if="prev && prev.title !== 'Home'" class="">
        <NuxtLink class="m-4 p-4 bg-black text-white rounded" :to="prev._path">
          prev: {{ prev.title }}
        </NuxtLink>
      </div>
      <div v-if="next" class="">
        <NuxtLink class="m-4 p-4 bg-black text-white rounded" :to="next._path">
          Next: {{ next.title }}
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
