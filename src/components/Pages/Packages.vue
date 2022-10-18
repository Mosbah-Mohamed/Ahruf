<template>
  <div class="package">
    <div class="container">
      <div class="row">
        <div class="col-lg-4 col-6 col-12">
          <div class="box_after">
            <h3>{{mainHeaderTitle}}</h3>
            <p>
              {{mainHeaderDesc}}
            </p>
          </div>
        </div>

        <div class="col-lg-4 col-6 col-12" v-for="(pack,index) in packages" :key="index">

          <div class="box red-bord" data-aos="zoom-in" data-aos-duration="1500">
            <div class="head">
              <span class="price">{{pack.price}}</span>
              <span class="currency">{{$t('SAR')}}</span> /
              <span class="period">{{$t('month')}}</span>
              <h4>{{pack.title}}</h4>
            </div>
            <hr />
            <div class="list-advantage">
              <ul>
                <li>
                  <!-- <span>
                    <font-awesome-icon class="right" icon="fa-solid fa-check" />
                  </span> -->
                  <span v-html="pack.description"
                    style="display:flex;flex-direction:column;align-items:flex-start"></span>
                </li>

              </ul>
              <button class="main-btn d-block">{{$t('subsc')}}</button>
            </div>
          </div>
        </div>

        <!-- <div class="col-lg-4 col-6 col-12">
          <div class="box green-bord" data-aos="zoom-in" data-aos-duration="1500">
            <div class="head">
              <span class="price">499</span>
              <span class="currency">ريال</span> /
              <span class="period">شهريا</span>
              <h4>الباقة الفردية</h4>
            </div>
            <hr />
            <div class="list-advantage">
              <ul>
                <li>
                  <span>
                    <font-awesome-icon class="right" icon="fa-solid fa-check" />
                  </span>
                  <span>طالب واحد فقط داخل المجموعة</span>
                </li>
                <li>
                  <span>
                    <font-awesome-icon class="right" icon="fa-solid fa-check" />
                  </span>
                  <span>4 ايام تدريس في الاسبوع</span>
                </li>
                <li>
                  <span>
                    <font-awesome-icon class="right" icon="fa-solid fa-check" />
                  </span>
                  <span>مدة الدورة التدريبية شهرين</span>
                </li>
                <li>
                  <span>
                    <font-awesome-icon class="right" icon="fa-solid fa-check" />
                  </span>
                  <span>ساعة تدريس يوميا</span>
                </li>
              </ul>
              <button class="main-btn d-block">الاشتراك في هذه الباقة</button>
            </div>
          </div>
        </div> -->
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
      packages: [],
    }
  },
  mounted() {
    window.scrollTo(0, 0);
    this.ourPackages();
  },
  methods: {

    async ourPackages() {

      await this.$http.get('main_page/packages').then(res => {

        this.mainHeaderTitle = res.data.data.content.title;
        this.mainHeaderDesc = res.data.data.content.description;
        this.packages = res.data.data.packages;
        // console.log(res.data.data.images.image)

      }).catch(error => {
        console.log(error)
      })

    }
  },
  name: "package",
};
</script>

<style lang="scss" scoped>

</style>
