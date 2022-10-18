<template>
  <div class="programDetail">
    <Navbar />

    <div class="program-tabs">
      <div class="container">
        <h3>برنامج الروضة</h3>
        <b-breadcrumb :items="items"></b-breadcrumb>

        <div class="row">
          <div class="col-12">
            <b-tabs pills card vertical end>
              <b-tab title="ترتيب البرامج" disabled></b-tab>

              <b-tab active v-for="(program,index) in allPrograms" :key="index">
                <template #title>
                  <span class="num">{{index+1}}</span>
                  <span>{{program.title}}</span>
                </template>
                <b-card-text>
                  <div class="box">
                    <div class="head">
                      <div class="info flex-start">
                        <img src="@/assets/images/online-learning.png" alt="lesson image" />
                        <h4>تفاصيل البرنامج</h4>
                      </div>

                      <ul>
                        <li class="flex-start">
                          <!-- <img class="check" src="@/assets/images/check-mark.png" alt="share image" loading="lazy" /> -->

                          <div class="program-course_outcomes" v-html="program.description"></div>
                        </li>

                      </ul>
                    </div>
                    <div class="head mar">
                      <div class="info flex-start">
                        <img src="@/assets/images/student.png" alt="lesson image" />
                        <h4>المخرجات المتوقعة</h4>
                      </div>

                      <ul>
                        <li class="flex-start">
                          <!-- <img class="check" src="@/assets/images/check-mark.png" alt="share image" loading="lazy" /> -->

                          <div v-html="program.course_outcomes" class="program-course_outcomes"></div>
                        </li>


                      </ul>
                    </div>

                    <button class="main-btn">{{$t('join')}}</button>
                  </div>
                </b-card-text>
              </b-tab>



            </b-tabs>
          </div>
        </div>
      </div>

      <img src="@/assets/svg/Group 708.svg" loading="lazy" alt="flower-1" class="flower-1" />

      <img src="@/assets/svg/Group 709.svg" loading="lazy" alt="flower-3" class="flower-3" />
    </div>

    <AdvantageOfOurProgram />

    <CommonQuestions />

    <StudentShare />

    <FooterComponent />
  </div>
</template>

<script>
import Navbar from "../Globals/Navbar.vue";
import AdvantageOfOurProgram from "./AdvantageOfOurProgram.vue";
import CommonQuestions from "./CommonQuestions.vue";
import StudentShare from "./StudentShare.vue";
import FooterComponent from "../Globals/FooterComponent.vue";
export default {
  name: "programDetail",

  data() {
    return {
      items: [
        {
          text: "الرئيسية ",
          to: { name: "home" },
        },
        {
          text: "البرامج المتاحة",
          to: { name: "home" },
        },
        {
          text: "برنامج الروضة",
          to: { name: "home" },
          //   active: true,
        },
      ],

      allPrograms: []

    };
  },

  mounted() {
    window.scrollTo(0, 0);
    this.ProgramDetails();
  },
  methods: {

    async ProgramDetails() {

      await this.$http.get(`programs`).then(res => {

        this.allPrograms = res.data.data;

        console.log(res.data.data)

      }).catch(error => {
        console.log(error)
      })

    }
  },
  components: {
    Navbar,
    AdvantageOfOurProgram,
    CommonQuestions,
    StudentShare,
    FooterComponent,
  },
};
</script>

<style lang="scss" scoped>

</style>
