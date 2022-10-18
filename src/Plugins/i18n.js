import Vue from "vue";
import VueI18n from "vue-i18n";

Vue.use(VueI18n);

const messages = {
  en: {
    name: "Name",
    email: "Email",
    message: "Message",
    reason: "Reason for contact",
    write_here: "Write Here",
    send: "Send",
    contact: "Contact Us",
    send_now: "Send Now",
    hint: "Make sure that you did not get your questions answered before contacting us by visiting",
    contact_info: "Contact Info",
    about_us: "About Us",
    ourPrograms: "our Programs",
    contact_us: "Contact Us",
    commonQuestions: "Common Questions",
    packages: "Packages",
    terms: "Terms and Conditions",
    PageNot: "Page Not Found !",
    sorryPage: "The Page you were Looking For does not exist",
    copyRight: " Copyright 2022 © Ahruf",
    backMain: "Main Page",
    elryad: "Designed By Elryad",
    join: "Join Us",
    know_program: "Available Programs",
    grad_student: "Graduated Student",
    hour: "Educational Hour",
    achieve: "Completion Rate",
    teacher: "teacher",
    subsc: "Subscribe  Package",
    more_ques: "You have more inquiries! Connect with us",
    ready: "Are you ready to start now ",
    forget: "Forgot your password",
    recover: "Enter your email to send us a password recovery method",
    cant: "If you can't get your password back",
    createAccount: "Create Account",
    phone: "Phone",
    agree: "I agree to",
    ahruf: "Ahruf Platform Academy",
    pass_word: "Password",
    or: "Or",
    Have_account: "Do you have an account?",
    log_in: "Log in now",
    google: "Register with a Google email",
    login: "Log in",
    remember: "Remember Me",
    member: "Don't have a membership?",
    new_account: "Register a new account",
    hello: "Hello",
    NotFound: "Not Found",
    TodayHomework: "Today Homework",
    nextLesson: "Next Lesson",
    Curriculum: "Curriculum",
    homework: "Homework",
    day: "Day",
    program: "Program",
    school_schedule: "school schedule",
    Available_program: "Available Program",
    SAR: "SAR",
    month: "Month",
    myProfile: "My Profile",
    JoinFather: "Father Login",
    JoinStudent: "Login Student",
    logout: "Log out",
    chatClass:"chat with Class"
  },
  ar: {
    name: "الإسم",
    email: "البريد الإلكترونى",
    message: "الرسالة",
    reason: "سبب التواصل",
    write_here: "اكتب هنا",
    send: "ارسال",
    contact: "تواصل معنا",
    send_now: "راسلنا الان",
    hint: "تأكد من أنك لم تحصل على إجابة أسئلتك قبل التواصل معنا من خلال زيارة",
    contact_info: "بيانات التواصل",
    about_us: "من نحن",
    ourPrograms: "برامجنا التدريبية",
    contact_us: "اتصل بنا",
    commonQuestions: "الاسئلة الشائعة",
    packages: "باقات الاشتراك",
    terms: "الشروط والأحكام",
    PageNot: "لم يتم إيجاد الصفحة",
    sorryPage:
      "عزرا الصفحة التي تبحث عنها غير متاحة الان بسبب بعض المشاكل التقنية",
    copyRight: "جميع الحقوق محفوظة لدى اكاديمية منصة احرف",
    backMain: " الرجوع للصفحة الرئيسية ",
    elryad: "تصميم شركة الرياض",
    join: "انضم الينا",
    know_program: "تعرف على برامجنا المتاحة",
    grad_student: "طالب متخرج",
    hour: "ساعة تعليمية",
    achieve: "نسبة الإنجاز",
    teacher: "معلم ومعلمة",
    subsc: "الاشتراك في هذه الباقة",
    more_ques: "لديك المزيد من الاستفسارات ! تواصل معنا",
    ready: "انت الان جاهر للبدء ؟",
    forget: "نسيت كلمة المرور",
    recover:
      "ادخل البريد الإلكتروني لنقوم بإرسال طريقة استرجاع كلمة المرور من خلاله",
    cant: "إذا لم تتمكن من إرجاع كلم مرورك",
    createAccount: "إنشاء حساب",
    phone: "رقم الجوال",
    agree: "اوافق على",
    ahruf: "اكاديمية منصة احرف",
    pass_word: "كلمة المرور",
    or: "او",
    Have_account: "هل لديك حساب؟",
    log_in: "سجل دخول الان",
    google: "التسجيل بإستخدام إيميل جوجل",
    login: "تسجيل الدخول",
    remember: "تذكرنى",
    member: "ليس لديك عضوية؟",
    new_account: "سجل حساب جديد",
    hello: "مرحبا",
    NotFound: "لا يوجد",
    TodayHomework: "واجب اليوم",
    nextLesson: "الحصة القادمة",
    Curriculum: "المناهج",
    homework: "حل الواجب",
    day: "يوم",
    program: "البرنامج",
    school_schedule: "جدول الحصص",
    Available_program: "البرامج المتاحة",
    SAR: "ريال",
    month: "شهريا",
    myProfile: "بروفايل الطالب",
    JoinFather: "دخول ولي الامر",
    JoinStudent: " دخول الطالب",
    logout: "تسجيل خروج",
    chatClass:"شات مع الفصل"
  },
};

const i18n = new VueI18n({
  locale: localStorage.getItem("lang") || "en", // set locale
  fallbackLocale: "eg", // set fallback locale
  messages, // set locale messages
});

export default i18n;