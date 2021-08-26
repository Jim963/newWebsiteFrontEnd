<template>
  <div class="lg:px-28 md:px-22 sm:px-16 px-6 py-6 flex flex-wrap main">
    <div
      class="w-full md:w-2/2 lg:w-1/2 p-2"
      v-for="(item, index) in portfolioImg"
      :key="index"
    >
      <img :src="$configSet.baseUrl + item.url" alt="" />
    </div>

    <div class="w-full p-2 pt-6">

      <div class="text-gray-700 leading-7">
        {{describe}}
      </div>
      <a :href="link" target="_blank" class="">網站連結>></a>
    </div>
  </div>
</template>

<script>
import axios from "../../assets/axios/index";

export default {
  data() {
    return {
      portfolioDetail: "",
      nowDetail: "",
      portfolioImg: [],
      describe:'',
      link:''
    };
  },
  loading: false,
  async fetch(context) {
    // 拿取個人資訊
    await context.store.dispatch("user/getUserData");
  },
  mounted() {
    this.getdetail();

    this.$nextTick(() => {
      this.$nuxt.$loading.start();
      setTimeout(() => this.$nuxt.$loading.finish(), 1000);
    });
  },
  methods: {
    async getdetail() {
      await axios
        .get("/details")
        .then((response) => {
          this.portfolioDetail = response.data;
          console.log("作品詳情", this.portfolioDetail);

          this.nowDetail = this.portfolioDetail.find(
            (value) => value.detail.name == this.$route.params.id
          );
          this.portfolioImg = this.nowDetail.detail.img_url;
          this.link = this.nowDetail.detail.link;
          this.describe = this.nowDetail.detail.describe;
          console.log("選擇作品", this.nowDetail);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>