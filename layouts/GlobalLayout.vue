<script setup lang="ts">
import { ref } from "vue";
import { useI18n } from "vue-i18n";

const isDropdownMenuOpen = ref(false);
const { locale } = useI18n();

const toggleMenuDropdown = () => {
  isDropdownMenuOpen.value = !isDropdownMenuOpen.value;
};

const changeSiteLanguage = (lang: string) => {
  console.log(`Changement de langue : ${lang}`);
  locale.value = lang;
  isDropdownMenuOpen.value = false;
};
</script>

<template>
  <div class="bg-background text-primary">
    <nav>
      <ul class="flex gap-2 justify-end items-center w-full pt-8 pr-8 relative">
        <li
          class="neon-box p-1.5 rounded-md absolute left-10 text-3xl hidden sm:block"
        >
          <NuxtLink to="/">Florian.B</NuxtLink>
        </li>
        <li class="neon-box hover:text-background p-1.5 rounded-md">
          <NuxtLink to="/">Blog</NuxtLink>
        </li>
        <li class="neon-box hover:text-background p-1.5 rounded-md">
          <NuxtLink to="/about">About</NuxtLink>
        </li>
        <li class="neon-box hover:text-background p-1.5 rounded-md">
          <NuxtLink to="/contact">Contact</NuxtLink>
        </li>
        <li class="neon-box hover:text-background rounded-md p-1.5">
          <NuxtLink to="/projects">
            <img src="/GithubAltIcon.svg" class="w-4 h-4 neon-box" />
          </NuxtLink>
        </li>
        <li class="neon-box hover:text-background rounded-md p-1.5">
          <NuxtLink to="/projects">
            <img src="/LinkedinAltIcon.svg" class="w-4 h-4 p-0 neon-box" />
          </NuxtLink>
        </li>

        <li class="neon-box rounded-md p-1.5">
          <NuxtLink to="/projects">
            <img src="/TwitterXAlt.svg" class="w-4 h-4" />
          </NuxtLink>
        </li>
        <li class="relative neon-box rounded-md p-1">
          <a
            class="cursor-pointer flex items-center"
            @click="toggleMenuDropdown"
          >
            <img src="/LanguageIcon.svg" class="w-5 h-5" />
          </a>
          <div
            v-if="isDropdownMenuOpen"
            class="absolute right-0 mt-4 w-20 rounded-md shadow-lg bg-background ring-1 ring-black ring-opacity-5"
          >
            <a
              href="#"
              class="block px-4 py-2 text-sm text-primary rounded hover:text-white hover:bg-secondary"
              @click.prevent="changeSiteLanguage('en')"
              >English</a
            >
            <a
              href="#"
              class="block px-4 py-2 text-sm text-primary rounded hover:text-white hover:bg-secondary"
              @click.prevent="changeSiteLanguage('fr')"
              >Français</a
            >
          </div>
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

.dropdown-enter-active,
.dropdown-leave-active {
  transition: opacity 0.3s ease;
}
.dropdown-enter, .dropdown-leave-to /* .dropdown-leave-active in <2.1.8 */ {
  opacity: 0;
}
</style>
