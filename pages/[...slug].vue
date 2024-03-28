<template>
  <section class="min-h-screen w-full flex justify-center">
    <article
      class="min-h-screen w-full prose prose-slate xl:w-1/2 sm:mt-20 p-10 overflow-x-auto"
    >
      <DebugHer :msg="$route.params.slug" />
      <ContentDoc />
    </article>
  </section>
</template>
