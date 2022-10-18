import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

// start Vuelidate

import Vuelidate from "vuelidate";

Vue.use(Vuelidate);

// end Vuelidate

// start bootstrap

import { BootstrapVue, IconsPlugin } from "bootstrap-vue";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

// end bootstrap

// =================== start font awesome ===================

/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";

/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";

library.add(fas, far, fab);
/* add font awesome icon component */
Vue.component("font-awesome-icon", FontAwesomeIcon);

// ================ end font awesome =============================

// start ICountUp

import ICountUp from "vue-countup-v2";
Vue.component("ICountUp", ICountUp);

// end ICountUp

// start jquery

// import jQuery from "jQuery"; // used locally in component

// end jquery

// start carousel

import carousel from "vue-owl-carousel";
Vue.component("carousel", carousel);

// end carousel

// start animate.css

import AOS from "aos";
import "aos/dist/aos.css";

Vue.use(AOS);

require("vue2-animate/dist/vue2-animate.min.css");

// end animate.css

//start international phone

import VueTelInput from "vue-tel-input";
import "vue-tel-input/dist/vue-tel-input.css";

Vue.use(VueTelInput);

// end intel tel phone

// =================== start lazy image =========================

// =================== end lazy image ===========================

//=================  start import MultiSelect ======================

import Multiselect from "vue-multiselect";

Vue.component("multi-select", Multiselect);

import "vue-multiselect/dist/vue-multiselect.min.css";

//  =================  end import MultiSelect ======================

// start translation

import i18n from "@/Plugins/i18n.js";

// end translation

// start axios installation

// for api with need auth using axios

import "@/Services/axios.js";

// for api with need auth

// for api without need auth using this.$http

import http from "@/Services/axios.js";

Vue.use(http); 

// for api without need auth

// end axios installation

// start emoji

//end emoji

new Vue({
  router,
  store,
  i18n,
  render: (h) => h(App),
  // start animate.css
  mounted() {
    AOS.init();
  },
  // start animate.css
}).$mount("#app");
