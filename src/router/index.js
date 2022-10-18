import Vue from "vue";
import VueRouter from "vue-router";
// import FooterView from "@/views/GlobalView/FooterView";
import ErrorView from "@/views/GlobalView/ErrorView";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: () =>
      import(/* webpackChunkName: "home" */ "@/views/GlobalView/HomeView.vue"),
  },
  {
    path: "/navbar",
    name: "navbar",
    component: () =>
      import(
        /* webpackChunkName: "studentShare" */ "@/views/GlobalView/NavbarView.vue"
      ),
  },
  {
    path: "/header",
    name: "header",
    component: () =>
      import(
        /* webpackChunkName: "header" */ "@/views/GlobalView/HeaderView.vue"
      ),
  },
  {
    path: "/ourProgram",
    name: "ourProgram",
    component: () =>
      import(
        /* webpackChunkName: "ourProgram" */ "@/views/PagesView/OurProgramsView.vue"
      ),
  },
  {
    path: "/statics",
    name: "statics",
    component: () =>
      import(
        /* webpackChunkName: "statics" */ "@/views/PagesView/StaticisView.vue"
      ),
  },
  {
    path: "/studentShare",
    name: "studentShare",
    component: () =>
      import(
        /* webpackChunkName: "studentShare" */ "@/views/PagesView/StudentsShareView.vue"
      ),
  },
  {
    path: "/packages",
    name: "packages",
    component: () =>
      import(
        /* webpackChunkName: "packages" */ "@/views/PagesView/PackagesView.vue"
      ),
  },
  {
    path: "/commonQuestion",
    name: "commonQuestion",
    component: () =>
      import(
        /* webpackChunkName: "commonQuestion" */ "@/views/PagesView/CommonQuestionsView.vue"
      ),
  },
  {
    path: "/testimonials",
    name: "testimonials",
    component: () =>
      import(
        /* webpackChunkName: "testimonials" */ "@/views/PagesView/TestimonialsView.vue"
      ),
  },
  {
    path: "/terms",
    name: "terms",
    component: () =>
      import(/* webpackChunkName: "terms" */ "@/views/PagesView/TermsView.vue"),
  },
  {
    path: "/forgetPassword",
    name: "forgetPassword",
    component: () =>
      import(
        /* webpackChunkName: "forgetPassword" */ "@/views/PagesView/ForgetPasswordView.vue"
      ),
  },
  {
    path: "/login",
    name: "login",
    component: () =>
      import(/* webpackChunkName: "login" */ "@/views/PagesView/LoginView.vue"),
    meta: { disallowAuthed: true },
  },
  {
    path: "/signup",
    name: "signup",
    component: () =>
      import(
        /* webpackChunkName: "signup" */ "@/views/PagesView/SignUpView.vue"
      ),
  },
  {
    path: "/contact",
    name: "contact",
    component: () =>
      import(
        /* webpackChunkName: "contact" */ "@/views/PagesView/ContactView.vue"
      ),
  },
  {
    path: "/vision",
    name: "vision",
    component: () =>
      import(
        /* webpackChunkName: "vision" */ "@/views/PagesView/VisionView.vue"
      ),
  },
  {
    path: "/advantageOfOurProgram",
    name: "advantageOfOurProgram",
    component: () =>
      import(
        /* webpackChunkName: "advantageOfOurProgram" */ "@/views/PagesView/AdvantageOfOurProgramView.vue"
      ),
  },
  {
    path: "/programDetail",
    name: "programDetail",
    component: () =>
      import(
        /* webpackChunkName: "programDetail" */ "@/views/PagesView/ProgramDetailView.vue"
      ),
  },
  {
    path: "/about-us",
    name: "about-us",
    component: () =>
      import(/* webpackChunkName: "about" */ "@/views/PagesView/AboutView.vue"),
  },
  {
    path: "/student-profile",
    name: "student-profile",
    component: () =>
      import(
        /* webpackChunkName: "about" */ "@/views/PagesView/StudentProfileView.vue"
      ),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/footer",
    name: "footer",
    component: () =>
      import(
        /* webpackChunkName: "footer" */ "@/views/GlobalView/FooterView.vue"
      ),
  },
  {
    path: "/:catchAll(.*)",
    name: "ErrorPage",
    component: ErrorView,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  // console.log(to);

  let AllTitle = `${process.env.VUE_APP_TITLE} | ${to.name}`;

  if (to.params.pageTitle) {
    AllTitle += ` | ${to.params.pageTitle}`;
  }

  document.title = AllTitle;

  // for not enter pages if else user login first

  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (localStorage.getItem("authToken")) {
      next();
    } else {
      next("/");
    }
  } else {
    next();
  }

  // for disallow user from back to login page after login

  if (to.meta.disallowAuthed && localStorage.getItem("authToken")) {
    return next({ path: "/" });
  }

  // next();
});

export default router;
