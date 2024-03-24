<script setup lang="ts">
console.log("global-layout");
</script>

<template>
  <div class="bg-background text-primary">
    <nav>
      <ul class="flex gap-2 justify-end items-center w-full pt-8 pr-8">
        <li class="neon-box p-1.5 rounded-md">
          <NuxtLink to="/blog">Blog</NuxtLink>
        </li>
        <li class="neon-box p-1.5 rounded-md">
          <NuxtLink to="/about">About</NuxtLink>
        </li>
        <li class="neon-box p-1.5 rounded-md">
          <NuxtLink to="/contact">Contact</NuxtLink>
        </li>
        <li class="neon-box rounded-md p-1.5">
          <NuxtLink to="/projects">
            <img src="/public/GithubAltIcon.svg" class="w-4 h-4 neon-box" />
          </NuxtLink>
        </li>
        <li class="neon-box rounded-md p-1.5">
          <NuxtLink to="/projects">
            <img
              src="/public/LinkedinAltIcon.svg"
              class="w-4 h-4 p-0 neon-box"
            />
          </NuxtLink>
        </li>

        <li class="neon-box rounded-md p-1.5">
          <NuxtLink to="/projects">
            <img src="/public/TwitterXAlt.svg" class="w-4 h-4" />
          </NuxtLink>
        </li>
      </ul>
    </nav>
    <slot />
  </div>
</template>

<style>
.neon-box:hover {
  box-shadow:
    inset 0 0 100px #72c36e,
    0 0 5px #72c36e,
    0 0 60px #72c36e,
    0 0 100px #72c36e;
  transition: box-shadow 0.3s ease-in-out;
}
</style>
