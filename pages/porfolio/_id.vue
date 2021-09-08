<template>
  <div class="lg:px-28 md:px-22 sm:px-16 px-6 py-6 flex flex-wrap main">
    <div
      class="w-full md:w-2/2 lg:w-1/2 p-2 justify-center flex items-center"
      v-for="(item, index) in portfolioImg"
      :key="index"
    >
      <img :src="$configSet.baseUrl + item.url" />
    </div>

    <div class="w-full p-2">
      <div class="text-gray-700 leading-7">
        {{ title }}
      </div>
      <div class="text-gray-700 leading-7 pt-2">
        {{ motivation }}
      </div>
      <div class="text-gray-700 leading-7 pt-2">
        {{ describe }}
      </div>
      
      <div class="leading-7 pt-2">
        <a :href="link" target="_blank" class="hover:text-blue-500"
          >網站連結>></a
        >
      </div>

      <div class="text-gray-700 leading-7 pt-2">
        {{ warning }}
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      portfolioDetail: "",
      nowDetail: "",
      portfolioImg: [],
      title: "",
      motivation: "",
      describe: "",
      warning: "",
      link: "",
    };
  },
  loading: false,
  async fetch({ $axios, store }) {
    // 拿取個人資訊
    const api = `http://202.182.124.162:81/user-data`;
    let res = await $axios.get(api);
    console.log("個人資訊", res.data);

    // 個人資訊存進vuex
    await store.dispatch("user/setUserData", res.data);
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
        .get("http://202.182.124.162:81/details")
        .then((response) => {
          this.portfolioDetail = response.data;
          console.log("作品詳情", this.portfolioDetail);

          this.nowDetail = this.portfolioDetail.find(
            (value) => value.detail.name == this.$route.params.id
          );
          this.portfolioImg = this.nowDetail.detail.img_url;
          this.title = this.nowDetail.detail.title;
          this.motivation = this.nowDetail.detail.motivation;
          this.describe = this.nowDetail.detail.describe;
          this.warning = this.nowDetail.detail.warning;
          this.link = this.nowDetail.detail.link;
          console.log("選擇作品", this.nowDetail);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>