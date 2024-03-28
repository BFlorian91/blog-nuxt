<template>
  <transition @before-enter="beforeEnter" @enter="enter" @leave="leave">
    <slot></slot>
  </transition>
</template>

<script>
export default {
  methods: {
    beforeEnter(el) {
      el.style.transition =
        "opacity 200ms ease-in-out, transform 200ms ease-in-out";
      el.style.opacity = 0;
      el.style.transform = "translateY(-10px)";
    },
    enter(el, done) {
      el.offsetHeight; // trigger reflow
      el.style.opacity = 1;
      el.style.transform = "translateY(0px)";
      done();
    },
    leave(el, done) {
      el.style.opacity = 0;
      el.style.transform = "translateY(-10px)";
      setTimeout(() => done(), 200); // Correspond à la durée de la transition
    },
  },
};
</script>
