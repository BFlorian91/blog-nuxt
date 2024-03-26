<script setup lang="ts">
useHead({
  htmlAttrs: { lang: "en" },
  link: [{ rel: "icon", href: "/icon.png" }],
});

useSeoMeta({
  viewport: "width=device-width, initial-scale=1, maximum-scale=1",
  title: "Flob Blog",
  description:
    "This is a blog where I write about my journey as a software engineer.",
  // ogImage: "/social-image.png",
  // twitterImage: "/social-image.png",
  // twitterCard: "summary_large_image",
});
</script>
<template>
  <div>
    <NuxtLayout name="global-layout">
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
