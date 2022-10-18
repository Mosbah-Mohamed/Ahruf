<template>
  <div class="student-share">
    <img class="flower-5" src="@/assets/svg/Group 711.svg" alt="share image" loading="lazy" />
    <div class="content">
      <h2>{{title}}</h2>
      <span>{{description}}</span>
    </div>

    <div v-if="imagesCarousel.length > 0">

      <carousel :autoplay="true" :nav="false" :loop="true" :items="4" :stagePadding="150" :responsive="{
        0: { items: 1, nav: false, stagePadding: 10 },
        600: { items: 2, nav: false, stagePadding: 10 },
        900: { items: 3 },
        1100: { items: 4, stagePadding: 150 },
      }">
        <div class="image" v-for="(image,index) in imagesCarousel" :key="index">
          <img :src="image.image" alt="student share image" width="260px" height="105px" loading="lazy" />
        </div>
        <!-- <div class="image">
        <img src="@/assets/images/owl-2.png" alt="footer logo" width="260px" height="105px" loading="lazy" />
      </div>
      <div class="image">
        <img src="@/assets/images/owl-3.png" alt="footer logo" width="260px" height="105px" loading="lazy" />
      </div>
      <div class="image">
        <img src="@/assets/images/owl-4.png" alt="footer logo" width="260px" height="105px" loading="lazy" />
      </div>
      <div class="image">
        <img src="@/assets/images/owl-5.png" alt="footer logo" width="260px" height="105px" loading="lazy" />
      </div>
      <div class="image">
        <img src="@/assets/images/owl-6.png" alt="footer logo" width="260px" height="105px" loading="lazy" />
      </div> -->

        <template slot="prev"><span class="prev">
            <font-awesome-icon icon="fa-solid fa-chevron-right" />
          </span></template>
        <template slot="next"><span class="next">
            <font-awesome-icon icon="fa-solid fa-chevron-left" />
          </span></template>
      </carousel>
    </div>

  </div>
</template>

<script>
export default {
  name: "studentsShare",
  data() {
    return {
      title: "",
      description: "",
      imagesCarousel: []

    }
  },

  mounted() {
    window.scrollTo(0, 0);
    this.getShare();

  },

  methods: {
    async getShare() {

      await this.$http("main_page/shares").then(res => {
        // console.log(res.data.data.content.title)
        // console.log(res.data.data.content.description)

        this.title = res.data.data.content.title;
        this.description = res.data.data.content.description;
        this.imagesCarousel = res.data.data.shares;

      }).catch(error => {

        console.log(error)

      })

    }
  }
};
</script>

<style lang="scss" scoped>

</style>
