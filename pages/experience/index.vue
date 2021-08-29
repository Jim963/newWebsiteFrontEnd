<template>
  <div class="main h-full flex items-center">
    <div
      class="
        w-full
        lg:px-28
        md:px-22
        sm:px-16
        px-6
        py-6
        flex flex-wrap
        justify-center
        items-stretch
      "
    >
      <div class="md:w-2/2 lg:w-6/12 w-full text-left px-6 py-6 lg:py-0">
        <h1 class="text-2xl font-medium text-left text-gray-600">Skills</h1>
        <div class="pt-6 font-normal text-sm text-gray-700 leading-7">
          <ul>
            <li>熟悉HTML5、CSS、JavaScript</li>
            <li>jQuery、AJAX 使用經驗</li>
            <li>使用 Bootstrap4 與格線系統進行開發</li>
            <li>tailwind 使用經驗</li>
            <li>使用 Vue Cli 進行開發</li>
            <li>使用 Vue 開發 Component 管理重複結構</li>
            <li>利用 Vuex 管理應用程式狀態</li>
            <li>結合 Vue 與 LIFF API 在 Line 上進行開發</li>
            <li>Google Map API 使用經驗</li>
            <li>使用 Nuxt框架進行 SSR 架構網站開發</li>
          </ul>
        </div>
      </div>

      <div class="md:w-2/2 lg:w-6/12 w-full text-left px-6 py-6 lg:py-0">
        <h1 class="text-2xl font-medium text-left text-gray-600">
          Experiences
        </h1>

        <div class="h-full relative">
          <!-- 中間線 -->
          <div id="experience_centerline"></div>
          <div class="experience_timeblock float-right">
            <div class="experience_mark"></div>
            <div class="experience_timecontent text-center">
              <p class="text-gray-600">前端工程師</p>
              <p class="text-sm">智谷系統</p>
              <p class="text-sm">(2020-4 ~ 2021-9)</p>
              <p class="text-sm">
                與後端協同開發、與PM以及美術溝通保持專案順利進行、維護專案、API介接、切版、資料渲染、頁面互動。
              </p>
            </div>
          </div>

          <!-- <div class="experience_timeblock float-left flex-row-reverse">
            <div class="experience_mark"></div>
            <div class="experience_timecontent text-center">
              <p class="text-gray-600">自學期間</p>
              <p class="text-sm">(2019-1 ~ 2020-3)</p>
              <p class="text-sm">
                前端相關基礎技能進修
              </p>
            </div>
          </div> -->

          <div class="experience_timeblock float-left flex-row-reverse">
            <div class="experience_mark"></div>
            <div class="experience_timecontent text-center">
              <p class="text-gray-600">製程工程師</p>
              <p class="text-sm">群創光電</p>
              <p class="text-sm">(2019-6 ~ 2019-12)</p>
              <p class="text-sm">
                設備維修以及故障排除、製程改善與監控、異常產品後續處理、緊急狀況處理及排除。
              </p>
            </div>
          </div>

          <div class="experience_timeblock float-right">
            <div class="experience_mark"></div>
            <div class="experience_timecontent text-center">
              <p class="text-gray-600">碩士</p>
              <p class="text-sm">淡江大學化學工程學系</p>
              <p class="text-sm">(2016-9 ~ 2018-2)</p>
            </div>
          </div>


          <div class="experience_timeblock float-left flex-row-reverse">
            <div class="experience_mark"></div>
            <div class="experience_timecontent text-center">
              <p class="text-gray-600">學士</p>
              <p class="text-sm">淡江大學化學工程學系</p>
              <p class="text-sm">(2012-9 ~ 2016-6)</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  loading: false,
  async fetch(context) {
    // 拿取個人資訊
    await context.store.dispatch("user/getUserData");
  },
  mounted() {
    this.$nextTick(() => {
      this.$nuxt.$loading.start();

      setTimeout(() => this.$nuxt.$loading.finish(), 1500);
    });
  },
};
</script>