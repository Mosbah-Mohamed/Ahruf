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
              <h4>{{$t('login')}}</h4>

              <form @submit.prevent="submit">
                <div class="form-group">
                  <label class="form__label">{{$t('name')}}</label>
                  <input :placeholder="$t('name')" class="form__input" type="text"
                    v-model.trim.lazy="info.login_username" />
                </div>

                <div class="form-group position-relative">
                  <label class="form__label">{{$t('pass_word')}}</label>
                  <input :placeholder="$t('pass_word')" class="form__input" :type="[showPassword ? 'text' : 'password']"
                    v-model.trim.lazy="info.password" />
                  <span class="eye" @click="showPassword = !showPassword">
                    <font-awesome-icon :icon="icon" />
                  </span>
                </div>

                <div class="form-group flex-between">
                  <div class="check">
                    <input type="checkbox" name="remember" id="" v-model.trim.lazy="info.remember_me" />
                    <span>{{$t('remember')}}</span>
                  </div>
                  <router-link to="/forgetpassword">
                    <span>{{$t('forget')}}</span>
                  </router-link>
                </div>

                <button class="button main-btn" type="submit">
                  {{$t('login')}}
                </button>

                <div class="form-group position-relative text-center mt-2 mb-3">
                  <span class="or">أو</span>
                </div>

                <button class="button btn-google">
                  <img src="@/assets/images/google.png" alt="googlle img" />
                  <span>{{$t('google')}}</span>
                </button>

              </form>
            </div>
            <div class="call flex-center">
              <span>{{$t('member')}}</span>
              <router-link to="signup"><span class="contact">{{$t('new_account')}}</span></router-link>
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
      info: {
        login_username: "",
        password: "",
        remember_me: ""
      },
      showPassword: false,
      messageText: "",
    };
  },
  // validations: {
  //   email: {
  //     required,
  //   },
  //   password: {
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

      await this.$http.post('student/login', this.info).then(res => {

        this.messageText = res.data.message;
        this.alertType = "success";

        this.info.login_username = null;
        this.info.password = null;
        this.info.remember_me = null;

        setTimeout(() => {
          this.messageText = "";
          this.alertType = "success";
        }, 3000);

        localStorage.setItem("authToken", res.data.token)
        localStorage.setItem("student_name", res.data.student.name)
        // this.$store.dispatch('user', res.data.user)

        this.$router.push('/student-profile');

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
