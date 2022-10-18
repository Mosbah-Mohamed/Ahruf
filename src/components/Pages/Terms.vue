<template>
  <div class="terms">
    <Navbar />

    <div class="content-terms" data-aos="fade-up">
      <img src="@/assets/svg/Group 711.svg" alt="share image" loading="lazy" class="hide-img" />



      <div class="container">
        <div class="row justify-content-center">



          <div class="col-lg-8 col-12">
            <div class="all_info">
              <h3>{{$t('terms')}}</h3>

              <div class="flex-center" v-if="!loading">
                <strong>Loading...</strong>
                <b-spinner></b-spinner>
              </div>


              <div class="box" v-for="(term,index) in terms" :key="index">

                <h4>{{term.title}}</h4>
                <ul>
                  <li>
                    <div class="term_desc" v-html="term.description"></div>
                  </li>
                </ul>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>

    <FooterComponent />
  </div>
</template>

<script>
import FooterComponent from "../Globals/FooterComponent.vue";
import Navbar from "../Globals/Navbar.vue";
export default {
  name: "terms",
  data() {
    return {
      loading: false,
      terms: []
    }
  },
  mounted() {
    window.scrollTo(0, 0);
    this.contactMessage();
  },
  methods: {

    async contactMessage() {

      await this.$http.get('polices').then(res => {
        this.loading = true;
        this.terms = res.data.data;
        console.log(res.data.data)

      }).catch(error => {
        console.log(error)
      })

    }
  },
  components: { FooterComponent, Navbar },
};
</script>

<style lang="scss" scoped>

</style>
