<template>
  <div class="header">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-6 col-12">
          <div class="info">
            <div class="title">
              <!-- <span class="first">مرحبا بكم في</span> -->
              <span class="second">{{mainHeaderTitle}}</span>
            </div>
            <p>
              {{mainHeaderDesc}}
            </p>
            <button class="main-btn join">
              <router-link to="/signup">{{$t('join')}}</router-link>
            </button>
          </div>
        </div>
        <div class="col-lg-6 col-12">
          <div class="image">
            <img :src="mainHeaderImage" alt="header img" width="444px" height="427px" />
          </div>
        </div>
      </div>
    </div>

    <img src="@/assets/svg/Group 708.svg" loading="lazy" alt="flower-1" class="flower-1" />
    <img src="@/assets/svg/Path 1094.svg" loading="lazy" alt="flower-2" class="flower-2" />
    <img src="@/assets/svg/Group 709.svg" loading="lazy" alt="flower-3" class="flower-3" />
    <img src="@/assets/svg/Group 710.svg" loading="lazy" alt="flower-4" class="flower-4" />
  </div>
</template>

<script>
export default {
  name: "headerComp",

  data() {
    return {
      mainHeaderTitle: '',
      mainHeaderDesc: '',
      mainHeaderImage: ''
    }
  },
  mounted() {
    window.scrollTo(0, 0);
    this.headerInfo();
  },
  methods: {

    async headerInfo() {

      await this.$http.get('main_page/main').then(res => {

        this.mainHeaderTitle = res.data.data.content.title;
        this.mainHeaderDesc = res.data.data.content.description;
        this.mainHeaderImage = res.data.data.images.image;
        console.log(res.data.data.images.image)

      }).catch(error => {
        console.log(error)
      })

    }
  },
};
</script>

<style lang="scss" scoped>

</style>
