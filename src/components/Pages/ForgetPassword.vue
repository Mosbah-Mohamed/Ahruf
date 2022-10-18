<template>
  <div class="forgetPassword">
    <Navbar />
    <div class="forget-info">
      <div class="container">

        <div class="col-lg-6 col-12 text-center m-auto" v-if="messageText.length">
          <div class="alert" :class="'alert-' + alertType" v-html="messageText"></div>
        </div>

        <div class="row justify-content-center">
          <div class="col-lg-5 col-12">
            <div class="box" data-aos="fade-up">
              <h4>{{$t('forget')}} </h4>
              <p>
                {{$t('recover')}}
              </p>

              <form @submit.prevent="submit">
                <div class="form-group">
                  <label class="form__label">{{$t('email')}}</label>
                  <input placeholder="example@test.com" class="form__input" type="email" v-model.trim="info.email" />
                </div>

                <button class="button main-btn" type="submit">
                  {{$t('send')}}
                </button>

              </form>
            </div>
            <div class="call flex-center">
              <span>{{$t('cant')}}</span>
              <router-link to="/contact">
                <span class="contact">{{$t('contact_us')}}</span>
              </router-link>
            </div>
          </div>
        </div>
      </div>

      <img src="@/assets/svg/Group 708.svg" loading="lazy" alt="flower-1" class="flower-1" />
      <img src="@/assets/svg/Group 709.svg" loading="lazy" alt="flower-3" class="flower-3" />
      <img src="@/assets/svg/Group 710.svg" loading="lazy" alt="flower-4" class="flower-4" />
    </div>
  </div>
</template>

<script>
// import { required } from "vuelidate/lib/validators";
import Navbar from "../Globals/Navbar.vue";
export default {
  name: "forgetPassword",
  data() {
    return {
      info: {
        email: "",
      },
      messageText: ''

    };
  },

  methods: {
    //   async submit() {

    //     await this.$http.post('forgetPassword', this.info).then(res => {

    //       this.messageText = res.data.message;
    //       this.alertType = "success";

    //       this.info.email = null;

    //       setTimeout(() => {
    //         this.messageText = "";
    //         this.alertType = "success";
    //       }, 3000);

    //       localStorage.setItem("authToken", res.data.token)
    //       this.$store.dispatch('user', res.data.user)


    //       // this.$router.push('/');

    //     }).catch(error => {
    //       this.messageText = error.response.data.message;
    //       this.alertType = "danger";

    //       setTimeout(() => {
    //         this.messageText = "";
    //         this.alertType = "success";
    //       }, 3000);
    //     })

    //   }
  },
  mounted() {
    window.scrollTo(0, 0);
    this.submit();
  },
  components: { Navbar },
};
</script>

<style lang="scss" scoped>

</style>
