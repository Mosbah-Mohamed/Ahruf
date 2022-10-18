<template>
  <div id="app">
    <!-- <h3>{{ $t("plugins") }}</h3> -->
    <!-- <select class="custom-select" v-model="lang" @change="handleChange($event)">
      <option value="en">En</option>
      <option value="ar">Ar</option>
    </select> -->

    <button v-show="scY > 600" class="up" @click="scrollToTop">
      <font-awesome-icon icon="fa-solid fa-plane-up" />
    </button>
    <NavbarView />
    <HeaderView />
    <OurProgramsView />
    <StaticisView />
    <PackagesView />
    <TestimonialsView />
    <CommonQuestionsView />
    <StudentsShareView />
    <FooterView />
    <router-view></router-view>
  </div>
</template>

<script>
import NavbarView from "./NavbarView.vue";
import HeaderView from "./HeaderView.vue";
import OurProgramsView from "../PagesView/OurProgramsView.vue";
import StaticisView from "../PagesView/StaticisView.vue";
import PackagesView from "../PagesView/PackagesView.vue";
import TestimonialsView from "../PagesView/TestimonialsView.vue";
import CommonQuestionsView from "../PagesView/CommonQuestionsView.vue";
import StudentsShareView from "../PagesView/StudentsShareView.vue";
import FooterView from "./FooterView.vue";
export default {
  name: "homeComp",
  data() {
    const lang = localStorage.getItem("lang") || "en";
    return {
      lang: lang,
      scTimer: 0,
      scY: 0,
    };
  },
  methods: {
    // changeLocale(locale) {
    //   i18n.locale = locale;
    // },
    handleChange(event) {
      localStorage.setItem("lang", event.target.value);
      window.location.reload();
    },
    scrollToTop() {
      window.scrollTo(0, 0);
    },
    handleScroll: function () {
      if (this.scTimer) return;
      this.scTimer = setTimeout(() => {
        this.scY = window.scrollY;
        clearTimeout(this.scTimer);
        this.scTimer = 0;
      }, 100);
    },
  },
  mounted() {
    switch (this.lang) {
      case "ar": {
        import("@/Scss/main.scss");
        break;
      }
      case "en": {
        import("@/Scss/main.scss");
        import("@/Scss/main-ltr.css");
        break;
      }
    }
    window.addEventListener("scroll", this.handleScroll);
  },
  components: {
    NavbarView,
    HeaderView,
    OurProgramsView,
    StaticisView,
    PackagesView,
    TestimonialsView,
    CommonQuestionsView,
    StudentsShareView,
    FooterView,
  },
};
</script>

<style></style>
