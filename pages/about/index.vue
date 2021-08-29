<template>
  <div class="main flex items-center">
    <div
      class="
        w-full
        h-full
        lg:px-28
        md:px-22
        sm:px-16
        px-6
        py-6
        flex flex-wrap
        justify-center
        items-center
      "
    >
      <!-- <div class="md:w-2/2 lg:w-2/2 w-full text-left px-6 py-6 lg:py-0">
        <img
          src="/images/background.jpg"
          alt=""
        />
      </div> -->

      <div class="md:w-2/2 lg:w-1/2 w-full text-left px-6 py-6">
        <!-- <div class="mx-auto w-max"> -->
          <h1 class="text-2xl font-medium text-left text-gray-600">
            劉繼允 {{userData[0].name}}
          </h1>

          <div class="py-2 text-left">
            <a
              href=""
              class="
                inline-block
                p-2
                mr-2
                border-2
                rounded-full
                border-black
                hover:bg-gray-200
              "
            >
              <img
                src="/images/github.png"
                alt=""
                width="20"
                height="20"
              />
            </a>

            <a
              href=""
              class="
                inline-block
                p-2
                mr-2
                border-2
                rounded-full
                border-black
                hover:bg-gray-200
              "
            >
              <img
                src="/images/instagram.png"
                alt=""
                width="20"
                height="20"
              />
            </a>

            <a
              href=""
              class="
                inline-block
                p-2
                mr-2
                border-2
                rounded-full
                border-black
                hover:bg-gray-200
              "
            >
              <img
                src="/images/facebook.png"
                alt=""
                width="20"
                height="20"
              />
            </a>
          </div>

          <div class="py-2">
            <img
              class="inline-block"
              src="/images/email.png"
              alt=""
              width="35"
              height="35"
            />

            <span>Email:</span>
            <span>jim19930127@gmail.com</span>
          </div>

          <div class="py-2">
            <img
              class="inline-block"
              src="/images/phone.png"
              alt=""
              width="35"
              height="35"
            />
            <span>Mobile:</span>
            <span>0911722743</span>
          </div>
        <!-- </div> -->
      </div>

      <div class="md:w-2/2 lg:w-1/2 w-full text-left px-6 py-6">
        <h1 class="text-2xl font-medium text-left text-gray-600">About Me</h1>
        <div class="pt-6 font-normal text-sm text-gray-700 leading-7">
          最初於電子業擔任製程工程師，經歷自學後轉職前端工程師。
          對前端領域有強烈的熱情，除了完成工作上之專案外，經常利用下班時間學習、進修新的技術，
          並將所學技術以及知識實作成新的side project ，以求檢視自身學習狀況以及精進實力。
          在工作中需要經常與美術、後端工程師、PM、客戶溝通以利專案順利進行，對於各方需求溝通具有一定熟悉度。
          期望未來自己能在前端領域持續深耕，並且持續精進自身實力與經驗，也希望能與未來合作夥伴打造出令使用者滿意的產品。
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userData:''
    };
  },
  loading: false,
  async asyncData(context) {
    // 拿取個人資訊
    let res = await context.store.dispatch("user/getUserData");
    console.log("個人資訊", res.data);
    return {
      userData: res.data,
    };
  },
  async fetch(context) {
    
  },
  mounted() {
    this.$nextTick(() => {
      this.$nuxt.$loading.start();

      setTimeout(() => this.$nuxt.$loading.finish(), 1000);
    });
  },
};
</script>
