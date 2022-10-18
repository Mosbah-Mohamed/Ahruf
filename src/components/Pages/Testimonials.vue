<template>
  <div class="student-share testimonials">
    <img class="flower-5" src="@/assets/svg/Group 711.svg" alt="share image" loading="lazy" />
    <div class="content">
      <h2>{{mainHeaderTitle}}</h2>
      <font-awesome-icon class="quote" icon="fa-solid fa-quote-left" />
    </div>

    <div v-if="quotes.length > 0 ">
      <carousel :autoplay="true" :nav="false" :loop="true" :margin="30" :dots="false" :stagePadding="150" :responsive="{
        0: { items: 1, nav: false, stagePadding: 50 },
        600: { items: 1, nav: false, stagePadding: 100 },
        900: { items: 2 },
        1100: { items: 3, stagePadding: 150 },
      }">
        <div class="info-cont" v-for="(quote,index) in quotes" :key="index">
          <p>
            {{quote.content}}
          </p>
          <h4>{{quote.author}}</h4>
        </div>

        <!-- <div class="info-cont">
        <p>
          اعتقد ان احرف كنز علم اولادي مبادئ اللغة العربية في وقت قياسي ، بعد
          محاولات سابقة غير ناجحة مع منصات اخرى ، والافضل انه كل الدورات اونلاين
          .
        </p>
        <h4>زينب الكريع</h4>
      </div>

      <div class="info-cont">
        <p>
          اكاديمية احرف ساعدتني في وصول بنتي لمستوى مميز جدا في قرائة القرآن
          وتعلم مبادئ اللغة العربية ، عانيت كثير من تعليم بنتي اللغة العربية
          وخصوصا القرائة
        </p>
        <h4>فريدة المطيري</h4>
      </div>

      <div class="info-cont">
        <p>
          لاحظت التطور السريع الواضح على ابني منذ الاسبوع الاول له في الكورسات
          والسبب في العدد الاقصى للطلاب في كل مجموعة وهو 10 فقط
        </p>
        <h4>سمية الشهري</h4>
      </div>

      <div class="info-cont">
        <p>
          اعتقد ان احرف كنز علم اولادي مبادئ اللغة العربية في وقت قياسي ، بعد
          محاولات سابقة غير ناجحة مع منصات اخرى ، والافضل انه كل الدورات اونلاين
          .
        </p>
        <h4>زينب الكريع</h4>
      </div>

      <div class="info-cont">
        <p>
          اكاديمية احرف ساعدتني في وصول بنتي لمستوى مميز جدا في قرائة القرآن
          وتعلم مبادئ اللغة العربية ، عانيت كثير من تعليم بنتي اللغة العربية
          وخصوصا القرائة
        </p>
        <h4>فريدة المطيري</h4>
      </div>

      <div class="info-cont">
        <p>
          لاحظت التطور السريع الواضح على ابني منذ الاسبوع الاول له في الكورسات
          والسبب في العدد الاقصى للطلاب في كل مجموعة وهو 10 فقط
        </p>
        <h4>سمية الشهري</h4>
      </div>

      <div class="info-cont">
        <p>
          اعتقد ان احرف كنز علم اولادي مبادئ اللغة العربية في وقت قياسي ، بعد
          محاولات سابقة غير ناجحة مع منصات اخرى ، والافضل انه كل الدورات اونلاين
          .
        </p>
        <h4>زينب الكريع</h4>
      </div>

      <div class="info-cont">
        <p>
          اكاديمية احرف ساعدتني في وصول بنتي لمستوى مميز جدا في قرائة القرآن
          وتعلم مبادئ اللغة العربية ، عانيت كثير من تعليم بنتي اللغة العربية
          وخصوصا القرائة
        </p>
        <h4>فريدة المطيري</h4>
      </div> -->

        <template slot="prev"><span class="prev-one">
            <font-awesome-icon icon="fa-solid fa-arrow-right" />
          </span></template>
        <template slot="next"><span class="next-one">
            <font-awesome-icon icon="fa-solid fa-arrow-left" />
          </span></template>
      </carousel>
    </div>
  </div>
</template>

<script>
export default {


  data() {
    return {
      mainHeaderTitle: '',
      quotes: []
    }
  },
  mounted() {
    window.scrollTo(0, 0);
    this.testimonials();
  },
  methods: {

    async testimonials() {

      await this.$http.get('main_page/quotes').then(res => {

        this.mainHeaderTitle = res.data.data.content.title;
        this.quotes = res.data.data.quotes;
        console.log(res.data.data.quotes)

      }).catch(error => {
        console.log(error)
      })

    }
  },
  name: "testimonials",
};
</script>

<style lang="scss" scoped>

</style>
