<script setup lang="ts">
useHead({
  htmlAttrs: { lang: "en" },
  link: [{ rel: "icon", href: "/icon.png" }],
  titleTemplate: () => `Flob blog`,
  viewport: "width=device-width, initial-scale=1, maximum-scale=1",
  charset: "utf-8",
  meta: [
    {
      name: "description",
      content:
        "This is a blog where I write about my journey as a software engineer",
    },
  ],
});

useSeoMeta({
  viewport: "width=device-width, initial-scale=1, maximum-scale=5",
  title: "Flob Blog",
  description:
    "This is a blog where I write about my journey as a software engineer.",
  ogTitle: "Flob Blog",
  ogDescription:
    "This is a blog where I write about my journey as a software engineer.",
  ogImage: "/favicon.ico",
  twitterCard: "/flutter.png",
});
</script>
<template>
  <div class="bg-background">
    <NuxtLayout name="global-layout">
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<style>
* {
  scroll-behavior: smooth;
  scrollbar-color: #080a08 #080a08;
}
</style>
