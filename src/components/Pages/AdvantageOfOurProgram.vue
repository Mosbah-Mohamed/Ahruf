<template>
  <div class="advantageOfOurProgram our-program">
    <h4>مميزات برامجنا</h4>
    <div class="container">
      <div class="row">
        <div class="col-lg-4 col-md-6 col-12" v-for="(advan,index) in advantages" :key="index">


          <div class="box" data-aos="fade-right">
            <img :src="advan.icon" alt="advantage program img" width="" height="" loading="lazy" />
            <h3>{{advan.heading}}</h3>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "advantageOfOurProgram",
  data() {
    return {
      advantages: []
    }
  },

  mounted() {
    window.scrollTo(0, 0);
    this.AdvantageProgram();
  },
  methods: {

    async AdvantageProgram() {

      await this.$http.get('about_us/programs_features').then(res => {

        this.advantages = res.data.data;

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
