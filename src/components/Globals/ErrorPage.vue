<template>
  <div class="error_page footer text-center">
    <img src="@/assets/svg/Group 711.svg" alt="share image" loading="lazy" class="hide-img" />
    <div class="image-logo flex-start">
      <router-link to="/">
        <img src="@/assets/images/Logo.png" width="auto" height="300px" alt="Logo image" loading="lazy" />
      </router-link>
    </div>
    <div class="container">
      <div class="content">
        <div class="row">
          <div class="col-md-6 col-12">
            <div class="info-content" data-aos="fade-left">
              <h2>{{$t('PageNot')}}</h2>

              <p>
                {{$t('sorryPage')}}
              </p>
              <button class="main-btn" @click="goBack">
                {{$t('backMain')}}
              </button>
            </div>
          </div>
          <div class="col-md-6 col-12">
            <div class="image" data-aos="fade-right">
              <img src="@/assets/images/error.png" width="auto" height="300px" alt="error image" loading="lazy" />
            </div>
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
  name: "Errorpage",

  methods: {
    goBack() {
      this.$router.push({ name: "home" });
    },
  },
};
</script>

<style lang="scss" scoped>

</style>
