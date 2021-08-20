<template>
  <div
    :class="[
      'layoutView',
      'min-h-screen',
      { homeBackground: $nuxt.$route.path == '/' },
    ]"
  >
    <Head class="w-full xl:hidden" />
    <transition name="fade">
      <div class="flex w-full">
        <div class="hidden xl:w-1/4 xl:h-screen xl:block bg-gray-50">
          <Sidebar/>
        </div>

        <div class="xl:w-3/4 xl:h-screen w-full">
          <Nuxt />
        </div>
      </div>
    </transition>
    <Footer class="w-full xl:hidden" />
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style>
</style>
