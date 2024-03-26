<script setup>
const { data } = await useAsyncData("home", () =>
  queryContent("articles").sort({ datetime: -1 }).find(),
);
</script>

<template>
  <div class="bg-background py-24 sm:py-32">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-2xl">
        <!-- <h2 class="text-3xl font-bold tracking-tight text-text sm:text-4xl"> -->
        <!--   {{ $t("welcome") }} -->
        <!-- </h2> -->
        <!-- <p class="mt-2 text-lg leading-8 text-primary"> -->
        <!--   {{ $t("description") }} -->
        <!-- </p> -->
        <!-- <div -->
        <!--   class="mt-10 space-y-16 border-t border-secondary pt-10 sm:mt-10 sm:pt-16" -->
        <!-- > -->
        <div class="mt-10 space-y-16 pt-10 sm:mt-5 sm:pt-5">
          <article
            v-for="post in data"
            :key="post.id"
            class="flex max-w-xl flex-col items-start justify-between"
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
                <NuxtLink :to="post.url">
                  <span class="absolute inset-0" />
                  {{ post.title }}
                </NuxtLink>
              </h3>
              <p class="mt-5 line-clamp-3 text-sm leading-6 text-secondary">
                {{ post.description }}
              </p>
            </div>
            <!-- author part -->
            <!-- <div class="relative mt-8 flex items-center gap-x-4"> -->
            <!--   <img -->
            <!--     :src="post.author.imageUrl" -->
            <!--     alt="" -->
            <!--     class="h-10 w-10 rounded-full bg-gray-50" -->
            <!--   /> -->
            <!--   <div class="text-sm leading-6"> -->
            <!--     <p class="font-semibold text-accent"> -->
            <!--       <a :href="post.author.href"> -->
            <!--         <span class="absolute inset-0" /> -->
            <!--         {{ post.author.name }} -->
            <!--       </a> -->
            <!--     </p> -->
            <!--     <p class="text-gray-600">{{ post.author.role }}</p> -->
            <!--   </div> -->
            <!-- </div> -->
          </article>
        </div>
      </div>
    </div>
  </div>
</template>
