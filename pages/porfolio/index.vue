<template>
  <div class="lg:px-28 md:px-22 sm:px-16 px-6 py-6 flex flex-wrap main">
    <!-- 作品項 -->
    <div
      class="w-full md:w-1/2 lg:w-1/3 p-6"
      v-for="(item, index) in porfolio"
      :key="index"
    >
      <div class="text-center shadow-xl porfolioItem">
        <div
          class="porfolioImg"
          :style="`background-image: url(${
            $configSet.baseUrl + item.porfolio_img.url
          })`"
        ></div>

        <div class="text-center w-full px-4">
          <div class="text-xl text-gray-500 p-2">{{ item.name }}</div>
          <div class="border-b border-gray-200"></div>
          <div class="font-light text-left py-4">
            {{ item.brief_introduction }}
          </div>

          <div class="font-light text-left overflow-hidden relative">
            <span href="" class="readmoreOuter">
              <span class="readmore">
                <nuxt-link :to="`/porfolio/${item.name}`"> Read More </nuxt-link>
              </span>
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      porfolio: [],
    };
  },
  loading: false,
  async asyncData(context) {
    // 拿取作品
    let res = await context.store.dispatch("user/getPorfolio");
    console.log("作品", res.data);
    return {
      porfolio: res.data,
    };
  },
  async fetch(context) {
    // 拿取個人資訊
    await context.store.dispatch("user/getUserData");
  },
  mounted() {
    this.$nextTick(() => {
      this.$nuxt.$loading.start();

      setTimeout(() => this.$nuxt.$loading.finish(), 1000);
    });
  },
  methods: {
    readmore(item) {
      this.$router.push({
        name: "porfolio-id",
        params: { id: sessionStorage.getItem("porfolio", item.name) },
      });
    },
  },
};
</script>