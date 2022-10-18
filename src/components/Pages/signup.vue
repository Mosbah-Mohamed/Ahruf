<template>
  <div class="forgetPassword signup">
    <Navbar />
    <div class="forget-info">
      <div class="container">

        <div class="col-lg-6 col-12 text-center m-auto" v-if="messageText.length">
          <div class="alert" :class="'alert-' + alertType" v-html="messageText"></div>
        </div>

        <div class="row justify-content-center">
          <div class="col-lg-5 col-12">
            <div class="box" data-aos="fade-up">
              <h4>{{$t('createAccount')}}</h4>

              <form @submit.prevent="submit">
                <div class="form-group">
                  <label class="form__label">{{$t('name')}}</label>
                  <input :placeholder="$t('name')" class="form__input" type="text" v-model.trim.lazy="user.name"
                    required />
                </div>

                <div class="form-group">
                  <label class="form__label">{{$t('email')}}</label>
                  <input placeholder="example@test.com" class="form__input" type="email" v-model.trim.lazy="user.email"
                    required />
                </div>

                <div class="form-group">
                  <label class="form__label">{{$t('phone')}}</label>

                  <input type="tel" v-model="user.phone_number" placeholder="0x xxxx xxxx">

                  <span></span>

                  <!-- <vue-tel-input :inputOptions="inputOptions" :dropdownOptions="dropdownOptions" defaultCountry
                    v-model="user.phone_number"></vue-tel-input> -->
                </div>

                <div class="form-group position-relative">
                  <label class="form__label">{{$t('pass_word')}}</label>
                  <input :placeholder="$t('pass_word')" class="form__input" :type="[showPassword ? 'text' : 'password']"
                    v-model.trim.lazy="user.password" required />
                  <span class="eye" @click="showPassword = !showPassword">
                    <font-awesome-icon :icon="icon" />
                  </span>
                </div>

                <div class="form-group d-flex term">
                  <div class="check">
                    <input type="checkbox" name="remember" id="" v-model.trim.lazy="user.agree" />
                  </div>
                  <span>{{$t('agree')}}</span>
                  <router-link to="/terms"><span class="terms">{{$t('terms')}}</span></router-link>
                  <span>{{$t('ahruf')}}</span>
                </div>

                <button class="button main-btn" type="submit">
                  {{$t('createAccount')}}
                </button>

                <div class="form-group position-relative text-center mt-2 mb-3">
                  <span class="or">{{$t('or')}}</span>
                </div>

                <button class="button btn-google">
                  <img src="@/assets/images/google.png" alt="googlle img" />
                  <span>{{$t('Register with a Google email')}}</span>
                </button>

              </form>
            </div>
            <div class="call flex-center">
              <span>{{$t('Have_account')}}</span>
              <router-link to="login"><span class="contact">{{$t('log_in')}}</span></router-link>
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
  name: "login",
  data() {
    return {

      user: {
        name: "",
        email: "",
        phone_number: "",
        password: "",
        agree: false,
      },

      messageText: "",
      showPassword: false,

      // dropdownOptions: {
      //   showFlags: true,
      //   width: "480px",
      //   showDialCodeInSelection: true,
      // },
      // inputOptions: {
      //   placeholder: "01x xxxx xxx",
      // },
      // ignoredCountries: ["us", "uk", "sa"],
    };
  },
  // validations: {
  //   email: {
  //     required,
  //   },
  //   password: {
  //     required,
  //   },
  //   name: {
  //     required,
  //   },
  //   phone: {
  //     required,
  //   },
  // },
  computed: {
    icon() {
      if (this.showPassword) {
        return ["fa-regular", "fa-eye-slash"];
      } else {
        return ["fa-regular", "fa-eye"];
      }
    },
  },
  methods: {
    async submit() {

      await this.$http.post('register', this.user).then(res => {

        console.log(this.user)

        this.messageText = res.data.message;
        this.alertType = "success";

        // this.user.name = null;
        // this.user.email = null;
        // this.user.phone_number = null;
        // this.user.password = null;
        // this.user.agree = null;

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
  mounted() {
    window.scrollTo(0, 0);
    // this.submit();
  },
  components: { Navbar },
};
</script>

<style lang="scss" scoped>

</style>
