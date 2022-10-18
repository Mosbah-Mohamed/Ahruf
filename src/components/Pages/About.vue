<template>
  <div class="about-us">
    <Navbar />

    <div class="header">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-6 col-12">
            <div class="info">
              <h5>{{mainHeaderTitle}}</h5>
              <div class="title">
                <!-- <span class="first">مؤسسة تعليمية إفتراضية تستهدف</span>
                <span class="second">بناء طفل يجيد القرائة والكتابة</span> -->
                <span>{{mainHeaderTitle}}</span>
              </div>
              <div class="small-box" v-for="(feature,index) in features" :key="index">
                <div class="image flex-start">
                  <img :src="feature.icon" alt="header img" class="read" width="34px" height="34px" />
                  <span>{{feature.heading}}</span>
                </div>
                <p>
                  {{feature.paragraph}}
                </p>
              </div>
              <!-- <div class="small-box">
                <div class="image flex-start">
                  <img src="@/assets/images/bookmark.png" alt="header img" class="read" width="34px" height="34px" />
                  <span>وسيلة التعليم عن بعد</span>
                </div>
                <p>
                  لدينا اقسام ومستويات مختلفة لتناسب جميع الطلاب بمختلف
                  مستوياتهم وقدراتهم
                </p>
              </div> -->
            </div>
          </div>
          <div class="col-lg-6 col-12">
            <div class="image">
              <img v-for="(picture,index) in images" :key="index" :src="picture.image" alt="header img"
                class="img-child" width="215px" height="280px" />

            </div>
          </div>
        </div>
      </div>

      <img src="@/assets/svg/Group 708.svg" loading="lazy" alt="flower-1" class="flower-1" />
      <img src="@/assets/images/zoom (1).png" loading="lazy" alt="zoom" class="zoom" />
      <img src="@/assets/svg/Group 709.svg" loading="lazy" alt="flower-3" class="flower-3" />
    </div>

    <Vision />

    <Staticis />

    <AdvantageOfOurProgram />

    <CommonQuestions />
    <StudentShare />
    <FooterComponent />
  </div>
</template>

<script>
import axios from "axios";
import Navbar from "../Globals/Navbar.vue";
import Header from "../Globals/Header.vue";
import Staticis from "./Staticis.vue";
import StudentShare from "./StudentShare.vue";
import FooterComponent from "../Globals/FooterComponent.vue";
import CommonQuestions from "./CommonQuestions.vue";
import Vision from "./Vision.vue";
import AdvantageOfOurProgram from "./AdvantageOfOurProgram.vue";
export default {
  name: "about",

  data() {
    return {
      mainHeaderTitle: '',
      mainHeaderDesc: '',
      images: [],
      features: []
    };
  },
  mounted() {
    this.getData();
    this.getFeatures();
    window.scrollTo(0, 0);
  },
  methods: {
    getData() {
      this.$http
        .get("about_us")
        .then((res) => {
          this.mainHeaderTitle = res.data.data.title;
          this.mainHeaderDesc = res.data.data.description;
          this.images = res.data.data.images;
          console.log(res.data.data);
        })
        .catch((error) => {
          console.log(error);
        });
    },

    async getFeatures() {
      await axios.get('about_us/features').then(res => {
        this.features = res.data.data;
      }).catch(error => {
        console.log(error.response.data.message)
      })
    }
  },
  components: {
    Navbar,
    Header,
    Staticis,
    StudentShare,
    FooterComponent,
    CommonQuestions,
    Vision,
    AdvantageOfOurProgram,
  },
};
</script>

<style lang="scss" scoped>

</style>
