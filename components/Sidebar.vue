<template>
  <div class="relative h-full flex items-center">
    <div class="mx-auto">
      
      <nuxt-link to="/">
        <div class="text-4xl font-bold text-left mb-20">Jim Liu</div>
      </nuxt-link>

      <ul class="text-left text-base">
        <li v-for="(item, index) in sidebarTitle" :key="index">
          <nuxt-link
            :to="item.link"
            class="py-3 px-0 block text-xl text-black-400 hover:text-gray-500"
          >
            {{ item.name }}
          </nuxt-link>
        </li>
      </ul>

      <div class="w-full absolute bottom-3.5 left-0 text-center">
        <p class="text-sm text-black-600 font-bold opacity-70">
          JimLiu © 2021. All Right Reserved
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      sidebarTitle: [
        { name: "About", link: "/about" },
        { name: "Portfolio", link: "/porfolio" },
        { name: "Experience", link: "/experience" },
      ],
    };
  },
};
</script>