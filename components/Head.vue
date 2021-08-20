<template>
  <div class="antialiased">
    <header
      :class="
        [
        {'bg-gray-50':$nuxt.$route.path !='/'},
        'lg:px-28',
        'md:px-28',
        'sm:px-16',
        'px-6',
        'flex flex-wrap',
        'items-center',
        'py-0',
        'header']
      "
    >
            <!-- bg-white -->
            <!-- border-t-4 border-green-700 -->

      <div
        class="flex-1 flex justify-between items-center"
        @click="mobileMenu = false"
      >
        <nuxt-link to="/">
          <p class="text-xl text-black-600 font-bold hover:text-gray-500">
            {{ userData[0].name ? userData[0].name : "" }}
          </p>
        </nuxt-link>
      </div>

      <div
        class="p-2 pt-4 justify-content-center lg:hidden pointer-cursor"
        @click="mobileMenu = !mobileMenu"
      >
        <div :class="[{ open: mobileMenu }, 'menu-control-icon', 'block']">
          <span></span> <span></span> <span></span>
        </div>
      </div>

      <div class="hidden lg:flex lg:items-center lg:w-auto">
        <nav>
          <ul
            class="
              lg:flex
              items-center
              justify-between
              text-base text-black-700
              lg:pt-0
            "
          >
            <li
              v-for="(item, index) in navTitle"
              :key="index"
              @click="mobileMenu = false"
            >
              <nuxt-link
                :to="item.link"
                class="
                  lg:p-4
                  py-3
                  px-0
                  block
                  text-lg text-black-400
                  hover:text-gray-500
                "
              >
                {{ item.name }}
              </nuxt-link>
            </li>
          </ul>
        </nav>
      </div>
    </header>

    <div :class="[{ show: mobileMenu }, 'w-full', 'mobileMenu']">
      <ul class="items-center justify-between text-center text-base">
        <li
          v-for="(item, index) in navTitle"
          :key="index"
          @click="mobileMenu = false"
        >
          <nuxt-link
            :to="item.link"
            class="py-3 px-0 block text-xl text-black-400 hover:text-gray-500"
          >
            {{ item.name }}
          </nuxt-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  data() {
    return {
      mobileMenu: false,
      navTitle: [
        { name: "About", link: "/about" },
        { name: "Portfolio", link: "/porfolio" },
        { name: "Experience", link: "/experience" },
      ],
    };
  },
  loading:false,
  mounted(){
  },
  computed: {
    ...mapState({
      userData: (state) => state.user.userData,
    }),
  },
  methods:{
    
  }
};
</script>

<style scoped>
</style>