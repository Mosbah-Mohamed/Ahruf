<template>
  <div class="common-question">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-8 col-12">
          <div class="common-content">
            <h3>{{mainHeaderTitle}}</h3>

            <b-card no-body class="cards" data-aos="fade-up" data-aos-duration="500" v-for="(ques,index) in questions"
              :key="index">
              <b-card-header header-tag="header" class="p-1" role="tab">
                <b-button class="collap-btn" block w-100 v-b-toggle.accordion-1>
                  <span v-html="ques.question"></span>
                  <span>
                    <font-awesome-icon icon="fa-solid fa-chevron-down" />
                  </span>
                </b-button>
              </b-card-header>
              <b-collapse id="accordion-1" visible accordion="my-accordion" role="tabpanel">
                <b-card-body>
                  <b-card-text>
                    <ul>
                      <li>
                        <span v-html="ques.answer"></span>
                      </li>

                    </ul>
                  </b-card-text>
                </b-card-body>
              </b-collapse>
            </b-card>

            <!-- <b-card no-body class="cards" data-aos="fade-up" data-aos-duration="600">
              <b-card-header header-tag="header" class="p-1" role="tab">
                <b-button class="collap-btn" block w-100 v-b-toggle.accordion-2>
                  <span>هل الدراسة حضوريةٌ أم عن بعد؟</span>
                  <span>
                    <font-awesome-icon icon="fa-solid fa-chevron-down" />
                  </span>
                </b-button>
              </b-card-header>
              <b-collapse id="accordion-2" accordion="my-accordion" role="tabpanel">
                <b-card-body>
                  <b-card-text>
                    <ul>
                      <li>
                        جميعٌ برامجنا الأكاديمٌةٌ عن بعد ، عبر برنامج zoom.
                      </li>
                      <li>
                        جميعٌ برامجنا الأكاديمٌةٌ عن بعد ، عبر برنامج zoom.
                      </li>
                      <li>
                        جميعٌ برامجنا الأكاديمٌةٌ عن بعد ، عبر برنامج zoom.
                      </li>
                    </ul>
                  </b-card-text>
                </b-card-body>
              </b-collapse>
            </b-card>

            <b-card no-body class="cards" data-aos="fade-up" data-aos-duration="700">
              <b-card-header header-tag="header" class="p-1" role="tab">
                <b-button class="collap-btn" block w-100 v-b-toggle.accordion-3>
                  <span>هل مبلغ الاشتراك لشهر واحد ؟</span>
                  <span>
                    <font-awesome-icon icon="fa-solid fa-chevron-down" />
                  </span>
                </b-button>
              </b-card-header>
              <b-collapse id="accordion-3" accordion="my-accordion" role="tabpanel">
                <b-card-body>
                  <b-card-text>
                    <ul>
                      <li>
                        جميعٌ برامجنا الأكاديمٌةٌ عن بعد ، عبر برنامج zoom.
                      </li>
                      <li>
                        جميعٌ برامجنا الأكاديمٌةٌ عن بعد ، عبر برنامج zoom.
                      </li>
                      <li>
                        جميعٌ برامجنا الأكاديمٌةٌ عن بعد ، عبر برنامج zoom.
                      </li>
                    </ul>
                  </b-card-text>
                </b-card-body>
              </b-collapse>
            </b-card>

            <b-card no-body class="cards" data-aos="fade-up" data-aos-duration="800">
              <b-card-header header-tag="header" class="p-1" role="tab">
                <b-button class="collap-btn" block w-100 v-b-toggle.accordion-4>
                  <span>كم عدد الحصص اسبوعيا ؟</span>
                  <span>
                    <font-awesome-icon icon="fa-solid fa-chevron-down" />
                  </span>
                </b-button>
              </b-card-header>
              <b-collapse id="accordion-4" accordion="my-accordion" role="tabpanel">
                <b-card-body>
                  <b-card-text>
                    <ul>
                      <li>
                        جميعٌ برامجنا الأكاديمٌةٌ عن بعد ، عبر برنامج zoom.
                      </li>
                      <li>
                        جميعٌ برامجنا الأكاديمٌةٌ عن بعد ، عبر برنامج zoom.
                      </li>
                      <li>
                        جميعٌ برامجنا الأكاديمٌةٌ عن بعد ، عبر برنامج zoom.
                      </li>
                    </ul>
                  </b-card-text>
                </b-card-body>
              </b-collapse>
            </b-card>

            <b-card no-body class="cards" data-aos="fade-up" data-aos-duration="1000">
              <b-card-header header-tag="header" class="p-1" role="tab">
                <b-button class="collap-btn" block w-100 v-b-toggle.accordion-5>
                  <span>هل يتم تعليم الطالب منفردا ؟</span>
                  <span>
                    <font-awesome-icon icon="fa-solid fa-chevron-down" />
                  </span>
                </b-button>
              </b-card-header>
              <b-collapse id="accordion-5" accordion="my-accordion" role="tabpanel">
                <b-card-body>
                  <b-card-text>
                    <ul>
                      <li>
                        جميعٌ برامجنا الأكاديمٌةٌ عن بعد ، عبر برنامج zoom.
                      </li>
                      <li>
                        جميعٌ برامجنا الأكاديمٌةٌ عن بعد ، عبر برنامج zoom.
                      </li>
                      <li>
                        جميعٌ برامجنا الأكاديمٌةٌ عن بعد ، عبر برنامج zoom.
                      </li>
                    </ul>
                  </b-card-text>
                </b-card-body>
              </b-collapse>
            </b-card> -->

            <p class="more">
              <router-link to="/contact">
                <span>{{$t('more_ques')}}</span>
              </router-link>

              <span>
                <font-awesome-icon icon="fa-solid fa-arrow-left" class="arrow_left" />
              </span>
            </p>
            <div class="ready">
              <h4>{{$t('ready')}}</h4>
              <button class="main-btn">{{$t('join')}}</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

  data() {
    return {
      mainHeaderTitle: '',
      mainHeaderDesc: '',
      questions: []
    }
  },
  mounted() {
    window.scrollTo(0, 0);
    this.common();
  },
  methods: {

    async common() {

      await this.$http.get('main_page/questions').then(res => {

        this.mainHeaderTitle = res.data.data.content.title;
        this.mainHeaderDesc = res.data.data.content.description;
        this.questions = res.data.data.questions;
        // console.log(res.data.data)

      }).catch(error => {
        console.log(error)
      })

    }
  },
  name: "commonQuestion",
};
</script>

<style lang="scss" scoped>

</style>
