<template>
  <div class="h-full flex items-center justify-center main">
    <div class="w-full p-20 xl:p-0 flex flex-wrap">
      <!-- 圓形大頭貼 -->
      <!-- <div class="rounded-full mb-4 mx-auto personalImg"></div> -->

      <div class="w-full xl:w-1/3">
        <!-- 圓形大頭貼 -->
        <div class="rounded-full mb-4 mx-auto personalImg"></div>
      </div>

      <div class="w-full xl:w-2/4 flex items-center">
        <div class="mx-auto">
          <div class="text-5xl text-black-600 text-center font-extrabold py-4">
            HELLO, I'M {{ userData[0].name }}
          </div>
          <div class="text-3xl text-black-400 text-center font-bold py-4">
            <h1 class="ml6">
              <span class="text-wrapper">
                <span class="letters">Front-End Enginner</span>
              </span>
            </h1>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
// import { mapState } from "vuex";
export default {
  data() {
    return {
      userData: "",
    };
  },
  loading: false,
  async asyncData({ $axios, store }) {
    // 拿取個人資訊
    const api = `http://202.182.124.162:81/user-data`;
    let res = await $axios.get(api);
    console.log("個人資訊", res.data);

    // 個人資訊存進vuex
    await store.dispatch("user/setUserData", res.data);

    return {
      userData: res.data,
    };
  },
  async fetch() {},
  mounted() {
    this.$nextTick(() => {
      this.$nuxt.$loading.start();

      setTimeout(() => this.$nuxt.$loading.finish(), 1000);
    });

    this.letterAnimate();
    const api = `http://202.182.124.162:81/porfolios`;
    this.$axios.get(api).then((respons) => {
      console.log(respons);
    });
  },
  // computed: {
  //   ...mapState({
  //     userData: (state) => state.user.userData,
  //   }),
  // },
  methods: {
    letterAnimate() {
      var textWrapper = document.querySelector(".ml6 .letters");
      textWrapper.innerHTML = textWrapper.textContent.replace(
        /\S/g,
        "<span class='letter'>$&</span>"
      );

      this.$anime
        .timeline({ loop: true })
        .add({
          targets: ".ml6 .letter",
          translateY: ["1.1em", 0],
          translateZ: 0,
          duration: 1000,
          delay: (el, i) => 50 * i,
        })
        .add({
          targets: ".ml6",
          opacity: 0,
          duration: 1000,
          easing: "easeOutExpo",
          delay: 1000,
        });
    },
  },
};
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
</style>
