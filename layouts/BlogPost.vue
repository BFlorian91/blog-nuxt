<script setup lang="ts">
const { next, prev } = useContent();
</script>

<template>
  <div class="container">
    <nav>
      <ul class="flex gap-4">
        <li><NuxtLink to="/">Home</NuxtLink></li>
        <li><NuxtLink to="/about">About</NuxtLink></li>
        <li><NuxtLink to="/contact">Contact</NuxtLink></li>
      </ul>
    </nav>
    <div class="prose prose-slate">
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
        <!-- <p class="p-4">{{ next.description }}</p> -->
      </div>
    </div>
  </div>
</template>
