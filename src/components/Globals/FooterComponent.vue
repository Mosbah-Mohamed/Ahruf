<template>
  <div class="footer">
    <div class="content">

      <div class="col-sm-12 text-center" v-if="message.length">
        <div class="alert" :class="'alert-' + alertType" v-html="message"></div>
      </div>

      <div class="container">
        <div class="row">
          <div class="col-lg-3 col-md-6 col-12">
            <div class="image" data-aos="fade-up">
              <router-link to="/">
                <img :src="logo" alt="footer logo" width="260px" height="105px" loading="lazy" />
              </router-link>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 col-12">
            <ul data-aos="fade-up">
              <li>
                <a href="tel:0548762583">
                  <span>
                    <font-awesome-icon icon="fas fa-phone" />
                  </span>
                  <span> 0548762583 (966+)</span>
                </a>
              </li>

              <li>
                <a href="https://api.whatsapp.com/send?phone=966548762583">
                  <span>
                    <font-awesome-icon icon="fa-brands fa-whatsapp" />
                  </span>
                  <span> 0548762583 (966+)</span>
                </a>
              </li>
              <li>
                <a href="mailto:info@ahrufedu.com">
                  <span>
                    <font-awesome-icon icon="far fa-envelope" />
                  </span>
                  <span>info@ahrufedu.com</span>
                </a>
              </li>
              <li>
                <a href="https://www.twitter.com/">
                  <span>
                    <font-awesome-icon icon="fa-brands fa-twitter" />
                  </span>
                  <span> @ahrufedu1</span>
                </a>
              </li>
              <li>
                <a href="https://www.instgram.com/">
                  <span>
                    <font-awesome-icon icon="fa-brands fa-instagram" />
                  </span>
                  <span>@ahruf_edu</span>
                </a>
              </li>

            </ul>
          </div>
          <div class="col-lg-3 col-md-6 col-12">
            <ul class="neun" data-aos="fade-up">
              <li>
                <a href="#">
                  <router-link to="/about-us">
                    <span>{{$t('about_us')}}</span>
                  </router-link>
                </a>
              </li>
              <li>
                <a href="#">
                  <router-link to="/contact">
                    <span>{{$t('contact_us')}}</span>
                  </router-link>
                </a>
              </li>
              <!-- <li>
                <a href="#">
                  <router-link to="/about-us">
                    <span>{{$t('packages')}}</span>
                  </router-link>
                </a>
              </li> -->



            </ul>
          </div>
          <div class="col-lg-3 col-md-6 col-12">
            <ul class="neun" data-aos="fade-upt">
              <li>
                <a href="#">
                  <router-link to="/terms">
                    <span>{{$t('terms')}}</span>
                  </router-link>
                </a>
              </li>
              <li>
                <a href="#">
                  <router-link :to="{ name: 'programDetail' }">
                    <span>{{$t('ourPrograms')}}</span>
                  </router-link>
                </a>
              </li>

              <!-- <li>
                <a href="#">
                  <router-link to="/commonQuestion">
                    <span>{{$t('commonQuestions')}}</span>
                  </router-link>
                </a>
              </li> -->


            </ul>
          </div>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="copy">
        <p>{{$t("copyRight")}}</p>
        <div class="elryad">
          <a target="_balnk" href="https://elryad.com/ar/" title="تصميم مواقع">
            <img src="@/assets/images/elryad.png" alt="elryad logo" />
            <span style="font-size: 14px">{{$t('elryad')}}</span>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "footerComponent",
  data() {
    return {
      logo: '',
      message: '',
      alertType: "success",
      accounts: []
    };
  },

  mounted() {
    window.scrollTo(0, 0);
    this.getFooterLinks();
  },

  methods: {
    replaceByDefault(e) {
      e.target.src = img;
    },

    async getFooterLinks() {

      await this.$http.get('main_page/footer').then(res => {

        // console.log(res.data.data.accounts)
        this.message = '';
        this.logo = res.data.data.logo.image;
        this.accounts = res.data.data.accounts;


      }).catch(error => {
        this.message = error.response.data.message;
        this.alertType = "danger";
        setTimeout(() => {
          this.message = "";
          this.alertType = "success";
        }, 120000);
      })

    }
  },
};
</script>

<style lang="scss" scoped>
h1 {
  color: #000;
  font-size: 50px;
}
</style>
