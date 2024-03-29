<script setup>
const { data } = await useAsyncData("home", () =>
  queryContent("articles").sort({ datetime: -1 }).find(),
);
</script>

<template>
  <div class="bg-background py-24 sm:py-32">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-2xl">
        <h2 class="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
          Flob
        </h2>
        <p class="mt-2 text-lg leading-8 text-secondary">
          A Developer's Life: Navigating Between Bugs and Features.
        </p>
        <div class="h-0.5 w-full bg-primary rounded-full mt-4"></div>
        <div class="mt-10 space-y-16 pt-10 sm:mt-5 sm:pt-5">
          <article
            v-for="post in data"
            :key="post.id"
            class="flex prose max-w-xl flex-col items-start justify-between"
          >
            <div class="flex items-center gap-x-4 text-xs">
              <time :datetime="post.datetime" class="text-secondary">{{
                post.date
              }}</time>
              <a
                :href="post.category.href"
                class="relative z-10 rounded-full px-3 py-1.5 font-medium text-text_dark bg-secondary hover:bg-accent transition duration-200 ease-in-out"
                >{{ post.category.title }}</a
              >
            </div>
            <div class="group relative">
              <h3
                class="mt-3 text-lg font-semibold leading-6 text-primary group-hover:text-text transition duration-200 ease-in-out"
              >
                <NuxtLink :to="`/articles/${post.slug}`">
                  <span class="absolute inset-0" />
                  <h1 class="title">{{ post.title }}</h1>
                </NuxtLink>
              </h3>
              <p class="description mt-5 line-clamp-3 leading-6 text-secondary">
                {{ post.description }}
              </p>
            </div>
          </article>
        </div>
      </div>
    </div>
  </div>
</template>
