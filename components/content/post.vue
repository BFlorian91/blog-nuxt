<script setup lang="ts">
const { next, prev } = useContent();
</script>

<template>
  <div class="container h-screen w-full">
    <section class="h-screen">
      <slot />
    </section>
    <!-- <div class="flex"> -->
    <!--   <div v-if="prev && prev.title !== 'Home'" class=""> -->
    <!--     <NuxtLink -->
    <!--       class="m-4 p-4 text-xs bg-black text-white rounded" -->
    <!--       :to="prev._path" -->
    <!--     > -->
    <!--       prev: {{ prev.title }} -->
    <!--     </NuxtLink> -->
    <!--   </div> -->
    <!--   <div v-if="next" class=""> -->
    <!--     <NuxtLink -->
    <!--       class="m-4 p-4 text-xs bg-black text-white rounded" -->
    <!--       :to="next._path" -->
    <!--     > -->
    <!--       Next: {{ next.title }} -->
    <!--     </NuxtLink> -->
    <!--   </div> -->
    <!-- </div> -->
  </div>
</template>
