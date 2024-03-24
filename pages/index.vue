<script setup>
const { data } = await useAsyncData("home", () =>
  queryContent("/articles").find(),
);
</script>

<template>
  <div class="flex flex-col">
    <h1>Home</h1>
    <div v-for="post in data" :key="post.title">
      <div class="p-4">
        <NuxtLink :to="post._path">{{ post.title }}</NuxtLink>
        <p>{{ post.description }}</p>
      </div>
    </div>
  </div>
</template>
