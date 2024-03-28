<template>
  <section class="min-h-screen w-full flex justify-center">
    <div
      class="min-h-screen w-full prose xl:w-1/2 sm:mt-20 p-10 overflow-x-auto"
    >
      <DebugHer :msg="$route.params.slug" />
      <ContentDoc />
    </div>
  </section>
</template>
