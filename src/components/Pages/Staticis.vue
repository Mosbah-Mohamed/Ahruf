<template>
  <div class="static">
    <div class="container">
      <div class="row">
        <div class="col-lg-3 col-md-6 col-12">
          <div class="iCountUp">
            +
            <ICountUp :delay="delay" :endVal="students" :options="options" />
            <!-- <IOdometer class="iOdometer" :value="numbers['teachers']" :theme="digital" /> -->
            <h4>{{$t('grad_student')}}</h4>
          </div>
        </div>
        <div class="col-lg-3 col-md-6 col-12">
          <div class="iCountUp">
            +
            <ICountUp :delay="delay" :endVal="hours" :options="options" />
            <h4>{{$t('hour')}}</h4>
          </div>
        </div>
        <div class="col-lg-3 col-md-6 col-12">
          <div class="iCountUp">
            %
            <ICountUp :delay="delay" :endVal="percentage" :options="options" />
            <h4>{{$t('achieve')}}</h4>
          </div>
        </div>
        <div class="col-lg-3 col-md-6 col-12">
          <div class="iCountUp">
            +
            <ICountUp :delay="delay" :endVal="teachers" :options="options" />
            <h4>{{$t('teacher')}}</h4>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "staticis",
  data() {
    return {
      delay: -1,
      endVal: 120500,
      options: {
        useEasing: true,
        useGrouping: true,
        enableScrollSpy: true,
        scrollSpyDelay: 200,
        separator: ",",
        decimal: ".",
        prefix: "",
        suffix: "",
      },

      numbers: [],
      hours: '',
      students: '',
      percentage: '',
      teachers: ''

    };
  },
  mounted() {
    window.scrollTo(0, 0);
    this.Staticis();
  },
  methods: {

    async Staticis() {

      await this.$http.get('main_page/numbers').then(res => {
        this.hours = res.data.data['hours'];
        this.students = res.data.data['students'];
        this.percentage = res.data.data['percentage'];
        this.teachers = res.data.data['teachers'];
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
