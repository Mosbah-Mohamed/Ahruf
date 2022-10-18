<template>
  <div class="contact-page">
    <Navbar />



    <div class="info">
      <div class="container">

        <div class="col-lg-6 col-12 text-center m-auto" v-if="messageText.length">
          <div class="alert" :class="'alert-' + alertType" v-html="messageText"></div>
        </div>

        <h3 class="text-center">{{$t('contact')}}</h3>
        <div class="row">



          <div class="col-lg-6 col-12">
            <div class="abber" data-aos="fade-up">
              <span>{{$t('hint')}}</span>
              <span class="blue-link">{{$t('commonQuestions')}}</span>
            </div>

            <div class="list-contact" data-aos="fade-up">
              <h4>{{$t('contact_info')}}</h4>
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
          </div>
          <div class="col-lg-6 col-12">
            <div class="box" data-aos="fade-up">
              <h4>{{$t('send_now')}}</h4>

              <form action="" ref="contact" @submit.prevent="contactMessage()">
                <div class="form-group">
                  <label class="form__label">{{$t('name')}}</label>
                  <input :placeholder="$t('name')" class="form__input" type="text" v-model.trim="content.name"
                    required />
                </div>

                <div class="form-group">
                  <label class="form__label">{{$t("email")}}</label>
                  <input :placeholder="$t('email')" class="form__input" type="email" v-model.trim="content.email"
                    required />
                </div>

                <div class="form-group">
                  <label class="form__label">{{$t('reason')}}</label>
                  <input :placeholder="$t('reason')" class="form__input" type="text" v-model.trim="content.reason"
                    required />
                </div>

                <div class="form-group">
                  <label class="form__label">{{$t('message')}}</label>
                  <textarea :placeholder="$t('write_here')" class="form__input"
                    v-model.trim="content.message"></textarea>
                </div>
                <button class="button main-btn" type="submit">
                  {{$t('send')}}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>

    <FooterComponent />
  </div>
</template>

<script>
import { required } from "vuelidate/lib/validators";
import Navbar from "../Globals/Navbar.vue";
import FooterComponent from "../Globals/FooterComponent.vue";
export default {
  name: "contact",
  data() {
    return {
      alertType: "success",

      content: {
        email: "",
        name: "",
        reason: "",
        message: ""
      },

      submitStatus: null,
      messageText: ""

    };
  },
  validations: {
    email: {
      required,
    },
    reason: {
      required,
    },
    name: {
      required,
    },
    message: {
      required,
    },
  },
  mounted() {
    window.scrollTo(0, 0);
  },
  methods: {

    async contactMessage() {

      await this.$http.post('contacts', this.content).then(res => {

        this.messageText = res.data.message;
        this.alertType = "success";

        this.content.name = null;
        this.content.email = null;
        this.content.reason = null;
        this.content.message = null;

        setTimeout(() => {
          this.messageText = "";
          this.alertType = "success";
        }, 3000);


      }).catch(error => {
        this.messageText = error.response.data.message;
        this.alertType = "danger";

        setTimeout(() => {
          this.messageText = "";
          this.alertType = "success";
        }, 3000);
      })

    }
  },

  components: { Navbar, FooterComponent },
};
</script>

<style lang="scss" scoped>

</style>
