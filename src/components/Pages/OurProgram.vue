<template>
  <div class="our-program">
    <div class="container">
      <div class="row">
        <div class="col-lg-4 col-12">
          <div class="info">
            <h2>{{mainHeaderTitle}}</h2>
            <p>
              {{mainHeaderDesc}}
            </p>
            <button class="main-btn join">{{$t('know_program')}}</button>
          </div>
        </div>

        <div class="col-lg-8 col-12">

          <div class="all_info">
            <div class="box" data-aos="fade-right" v-for="(program ,index) in programs" :key="index">
              <div class="image-box">
                <img :src="program.image" alt="program img" width="" height="" loading="lazy" />
                <h3>{{program.title}}</h3>
              </div>
              <!-- <div class="doty">
              <p>
                يناسب الأطفال من عمر 6 الى 7 سنوات مدة البرنامج: 4 اسابيع، ساعة
                ٌومٌا من الأحد إلى الأربعاء بإمكان الطفل التعلم عبر الجوال،
                ايباد ، او الاب توب
              </p>
              <a href="#" class="d-flex gap-1 align-items-center">
                <span>عرض تفاصيل البرنامج</span>
                <span>
                  <font-awesome-icon icon="fa-solid fa-arrow-left-long" />
                </span>
              </a>
            </div> -->
            </div>
          </div>

        </div>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ourProgram",

  data() {
    return {
      mainHeaderTitle: '',
      mainHeaderDesc: '',
      programs: []
    }
  },
  mounted() {
    window.scrollTo(0, 0);
    this.ourProgram();
  },
  methods: {

    async ourProgram() {

      await this.$http.get('main_page/ourPrograms').then(res => {

        this.mainHeaderTitle = res.data.data.content.title;
        this.mainHeaderDesc = res.data.data.content.description;
        this.programs = res.data.data.courses;
        // console.log(res.data.data.images.image)

      }).catch(error => {
        console.log(error)
      })

    }
  },
};
</script>

<style lang="scss" scoped>

</style>
