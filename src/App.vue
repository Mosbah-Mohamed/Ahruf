<template>
  <div id="app">
    <!-- <h3>{{ $t("plugins") }}</h3>
    <select class="custom-select" v-model="lang" @change="handleChange($event)">
      <option value="en">En</option>
      <option value="ar">Ar</option>
    </select> -->

    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "app",
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
};
</script>

<style></style>
