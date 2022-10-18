<template>
  <div class="navbar-top">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-2 col-4">
          <div class="logo">
            <router-link to="/"><img src="@/assets/images/Logo.png" alt="logo" width="214px" height="84px" />
            </router-link>
          </div>
        </div>
        <div class="col-lg-5 hide">
          <ul>
            <li>
              <router-link to="/about-us"><a href="#">{{$t('about_us')}}</a></router-link>
            </li>
            <li class="dropdown dropdown-6">
              <span>{{$t('Available_program')}}</span>
              <span>
                <font-awesome-icon icon="fa-solid fa-chevron-down" class="chev" />
              </span>
              <ul class="dropdown_menu dropdown_menu--animated dropdown_menu-6">
                <li class="dropdown_item-1" v-for="(pro,index) in programs" :key="index">
                  <router-link :to="{ name: 'programDetail' }">
                    {{pro.title}}
                  </router-link>
                </li>
                <!-- <li class="dropdown_item-2">Item 2</li>
                <li class="dropdown_item-3">Item 3</li>
                <li class="dropdown_item-4">Item 4</li>
                <li class="dropdown_item-5">Item 5</li> -->
              </ul>
            </li>
            <!-- <li>
              <a href="#">باقات الاشتراك</a>
            </li> -->
            <li>
              <router-link to="/contact">
                <a href="#">{{$t('contact_us')}}</a>
              </router-link>
            </li>
          </ul>
        </div>
        <div class="col-lg-5 col-8">
          <div class="content">
            <div class="lang">
              <a href="#">
                <!-- <span><font-awesome-icon icon="fa-solid fa-globe" /></span>
                <span>English</span> -->
                <select class="custom-select" v-model="lang" @change="handleChange($event)">
                  <option value="en">English</option>
                  <option value="ar"> Arabic</option>
                </select>
              </a>
            </div>
            <div class="btns">

              <button class="main-btn father" v-if="!authToken">
                <router-link to="/login">{{$t('JoinStudent')}}</router-link>
              </button>

              <button class="main-btn father" v-else>
                <router-link to="/student-profile">{{$t('myProfile')}}</router-link>
              </button>

              <button class="main-btn join" v-if="!authToken">
                <!-- <router-link to="/signup">{{$t('JoinFather')}}</router-link> -->
                <a href="https://a-ibrahem.azq1.com/Ahruf/Dashboards/parent/login" target="_blank"
                  rel="noopener noreferrer">{{$t('JoinFather')}}</a>
              </button>

              <button class="main-btn join" @click="logout" v-if="authToken">
                {{$t('logout')}}
              </button>
            </div>
            <div class="sidebar-h">
              <b-button class="openSide" v-b-toggle.sidebar-backdrop>
                <font-awesome-icon icon="fa-solid fa-align-left" />
              </b-button>

              <b-sidebar id="sidebar-backdrop" :backdrop-variant="variant" backdrop shadow>
                <div class="px-3 py-2"></div>
              </b-sidebar>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "navbar",
  data() {
    const lang = localStorage.getItem("lang") || "en";
    const authToken = localStorage.getItem("authToken");
    return {

      programs: [],
      variant: "dark",
      authToken: authToken,
      lang: lang,
      scTimer: 0,
      scY: 0,
    };
  },
  methods: {

    async Programs() {

      await this.$http.get('nav-programs').then(res => {
        this.programs = res.data.data;

      }).catch(error => {
        console.log(error.response.data.message)
      })

    },

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

    logout() {
      localStorage.removeItem('authToken')
      window.location.reload();
    }
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

    this.Programs();
  },
};
</script>

<style lang="scss" scoped>

</style>
