<template>
  <div class="vision">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-8 col-12">
          <div class="box" data-aos="fade-up">
            <h3>{{visionTitle}}</h3>
            <p>{{visionDesc}}</p>
          </div>
          <img class="flower-5" src="@/assets/svg/Group 711.svg" alt="share image" loading="lazy" />
        </div>
      </div>
    </div>

    <div class="goals">
      <div class="container">
        <div class="row">
          <div class="col-lg-6 col-12">
            <div class="image-goal" data-aos="fade-left">
              <img class="tablet" :src="image" alt="share image" loading="lazy" />
            </div>
          </div>
          <div class="col-lg-6 col-12">
            <h4>أهدافنا</h4>

            <div class="single-goal" data-aos="fade-up" v-for="(goal,index) in goals" :key="index">
              <img class="check" src="@/assets/images/check-mark.png" alt="share image" loading="lazy" />
              <span>{{goal.goal}}</span>
            </div>


          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "vision",

  data() {
    return {
      visionTitle: '',
      visionDesc: "",
      goals: [],
      image: ''
    }
  },

  mounted() {
    window.scrollTo(0, 0);
    this.Vision();
  },
  methods: {

    async Vision() {

      await this.$http.get('about_us/goals').then(res => {
        this.visionTitle = res.data.data.vision.title;
        this.visionDesc = res.data.data.vision.description;
        this.image = res.data.data.images.image;
        this.goals = res.data.data.goals;
        // console.log(res.data.data)

      }).catch(error => {
        console.log(error)
      })

    }
  },
};
</script>

<style lang="scss" scoped>

</style>
