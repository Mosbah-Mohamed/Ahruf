<template>
    <div class="student_profile">
        <!-- <Navbar /> -->

        <div class="container">
            <div class="profile-content">

                <b-card no-body>
                    <b-tabs pills card vertical v-model="step">
                        <b-tab disabled>
                            <template #title>

                                <router-link to="/">
                                    <div class="back-main">
                                        <span>
                                            <font-awesome-icon class="icon" icon="fa-solid fa-arrow-right" />
                                        </span>

                                        <span>{{$t('backMain')}}</span>
                                    </div>
                                </router-link>

                                <div class="img-profile flex-center">
                                    <img src="@/assets/profile images/student.png" alt="student img" loading="lazy" />
                                    <h3>
                                        <span>{{$t('hello')}} </span>
                                        <span>{{studentName}}</span>
                                    </h3>
                                </div>


                            </template>
                            <b-card-text>
                                <div class="box_profile">
                                    <div class="head_info">
                                        <div class="image flex-between">
                                            <h3>برنامج الروضة</h3>

                                            <div class="dates">
                                                <div class="date flex-column">
                                                    <img src="@/assets/Group 2153.png" alt="calendar" loading='lazy'>
                                                    <div class="info">
                                                        <span>12:00</span>
                                                        <span>AM</span>
                                                    </div>
                                                </div>
                                                <div class="time flex-column">
                                                    <img src="@/assets/calendar.png" alt="calendar" loading='lazy'>
                                                    <div class="info">
                                                        <span>12</span>
                                                        <span>sept</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>

                                    <!-- <div class="all_content">
                                        <div class="row">
                                            <div class="col-lg-4 col-12">
                                                <div class="next_lesson flex-center">
                                                    <img src="@/assets/profile images/computer-2.png" alt="student img"
                                                        loading="lazy" />
                                                    <h3>الحصة القادمة</h3>

                                                    <div class="date-lesson">
                                                        <span><img src="@/assets/profile images/stopwatch-1.png"
                                                                alt="student img" loading="lazy" /></span>
                                                        <span> يوم</span>
                                                        <span>9</span>
                                                        <span>سيبتمبر</span>
                                                    </div>
                                                    <div class="time-lesson date-lesson">
                                                        <span><img src="@/assets/profile images/stopwatch-1.png"
                                                                alt="student img" loading="lazy" /></span>
                                                        <span> الساعة</span>
                                                        <span>3:00</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-lg-4 col-12">
                                                <div class="next_lesson blue flex-center">
                                                    <img src="@/assets/profile images/computer-2.png" alt="student img"
                                                        loading="lazy" />
                                                    <h3>جدول الحصص</h3>
                                                    <button class="main-btn sheet">عرض الجدول</button>
                                                </div>
                                            </div>
                                            <div class="col-lg-4 col-12">
                                                <div class="next_lesson red flex-center">
                                                    <img src="@/assets/profile images/computer-2.png" alt="student img"
                                                        loading="lazy" />
                                                    <h3>واجب اليوم</h3>
                                                    <button class="main-btn sheet">حل الواجب</button>
                                                </div>
                                            </div>
                                            <div class="col-12">
                                                <div class="contact-others">
                                                    <div class="contact-info">
                                                        <img src="@/assets/profile images/teacher-2.png"
                                                            alt="student img" loading="lazy" />
                                                        <h3>واجب اليوم</h3>
                                                    </div>
                                                    <div class="contact-btn">
                                                        <button class="main-btn sheet">حل الواجب</button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-12">
                                                <div class="contact-others last">
                                                    <div class="contact-info">
                                                        <img src="@/assets/profile images/speak.png" alt="student img"
                                                            loading="lazy" />
                                                        <h3>محادثة زملائى في الفصل</h3>
                                                    </div>
                                                    <div class="contact-btn">
                                                        <button class="main-btn sheet">تحدث الان</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>


                                    </div> -->
                                </div>
                            </b-card-text>
                        </b-tab>

                        <b-tab>
                            <template #title>

                                <div class="side_link">
                                    <span class="num">
                                        <font-awesome-icon icon="fa-solid fa-bookmark" />
                                    </span>
                                    <span>{{$t('program')}}</span>
                                </div>

                            </template>
                            <b-card-text>
                                <div class="box_profile">
                                    <div class="head_info">
                                        <div class="image flex-between">
                                            <h3>{{courseName}}</h3>


                                            <h1 class="d-none">{{ hi }}</h1>


                                            <div class="dates">
                                                <div class="date flex-column">
                                                    <img src="@/assets/Group 2153.png" alt="calendar" loading='lazy'>
                                                    <div class="info">
                                                        <span>{{moment().format("h:mm") }}</span>
                                                        <span>{{moment().format("A") }}</span>
                                                    </div>
                                                </div>
                                                <div class="time flex-column">
                                                    <img src="@/assets/calendar.png" alt="calendar" loading='lazy'>
                                                    <div class="info">
                                                        <span>{{moment().format("MMM") }}</span>
                                                        <span>{{moment().format("Do") }}</span>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>

                                    </div>

                                    <div class="all_content">
                                        <div class="row">

                                            <div class="col-lg-4 col-12">

                                                <a :href="link" target="_blank">
                                                    <div class="next_lesson flex-center" data-aos="fade-left">
                                                        <img src="@/assets/profile images/computer-2.png"
                                                            alt="student img" loading="lazy" />
                                                        <h3>{{$t('nextLesson')}}</h3>

                                                        <div class="date-lesson" v-if="nextLessonDay">
                                                            <span><img src="@/assets/profile images/stopwatch-1.png"
                                                                    alt="student img" loading="lazy" /></span>
                                                            <span>{{$t('day')}}</span>
                                                            <span>{{nextLessonDay}}</span>
                                                            <span>{{nextLessonMonth}}</span>
                                                        </div>

                                                        <h4 style="color:#FFF" v-else>{{$t('NotFound')}}</h4>

                                                        <div class="time-lesson date-lesson" v-if="nextTime">
                                                            <span><img src="@/assets/profile images/stopwatch-1.png"
                                                                    alt="student img" loading="lazy" /></span>
                                                            <span> الساعة</span>
                                                            <span>{{nextTime}}</span>
                                                        </div>


                                                    </div>
                                                </a>
                                            </div>

                                            <div class="col-lg-4 col-12">
                                                <div class="next_lesson blue flex-center" data-aos="fade-up">
                                                    <img src="@/assets/profile images/computer-2.png" alt="student img"
                                                        loading="lazy" />
                                                    <h3>جدول الحصص</h3>
                                                    <button @click="step = 2" class="main-btn sheet">عرض الجدول</button>
                                                </div>
                                            </div>
                                            <div class="col-lg-4 col-12">
                                                <div class="next_lesson red flex-center" data-aos="fade-right">
                                                    <img src="@/assets/profile images/computer-2.png" alt="student img"
                                                        loading="lazy" />
                                                    <h3>{{$t('TodayHomework')}}</h3>

                                                    <p v-if="todayHomeWork == null" style="font-size:20px;color:#FFF">
                                                        {{$t('NotFound')}}</p>
                                                    <button @click="step = 3" v-else
                                                        class="main-btn sheet">{{$t('homework')}}</button>

                                                </div>
                                            </div>
                                            <div class="col-12">
                                                <div class="contact-others" data-aos="fade-up">
                                                    <div class="contact-info">
                                                        <img src="@/assets/profile images/teacher-2.png"
                                                            alt="student img" loading="lazy" />
                                                        <h3>{{$t('TodayHomework')}}</h3>
                                                    </div>
                                                    <div class="contact-btn">
                                                        <button @click="step = 3"
                                                            class="main-btn sheet">{{$t('homework')}}</button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-12">
                                                <div class="contact-others last" data-aos="fade-up">
                                                    <div class="contact-info">
                                                        <img src="@/assets/profile images/speak.png" alt="student img"
                                                            loading="lazy" />
                                                        <h3>محادثة زملائى في الفصل</h3>
                                                    </div>
                                                    <div class="contact-btn">
                                                        <button @click="step = 5" class="main-btn sheet">تحدث
                                                            الان</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>


                                    </div>
                                </div>
                            </b-card-text>
                        </b-tab>

                        <b-tab title="Step 1">
                            <template #title>

                                <div class="side_link">
                                    <span class="num">
                                        <font-awesome-icon icon="fa-solid fa-table" />
                                    </span>
                                    <span>{{$t('school_schedule')}}</span>
                                </div>

                            </template>
                            <b-card-text>
                                <div class="box_profile box_two">


                                    <img class="pens" src="@/assets/profile images/pens.png" alt="student img"
                                        loading="lazy" />

                                    <div class="head_info">
                                        <div class="image flex-between">
                                            <h3>{{$t('school_schedule')}}</h3>

                                            <h1 class="d-none">{{ hi }}</h1>


                                            <div class="dates">
                                                <div class="date flex-column">
                                                    <img src="@/assets/Group 2153.png" alt="calendar" loading='lazy'>
                                                    <div class="info">
                                                        <span>{{moment().format("h:mm") }}</span>
                                                        <span>{{moment().format("A") }}</span>
                                                    </div>
                                                </div>
                                                <div class="time flex-column">
                                                    <img src="@/assets/calendar.png" alt="calendar" loading='lazy'>
                                                    <div class="info">
                                                        <span>{{moment().format("MMM") }}</span>
                                                        <span>{{moment().format("Do") }}</span>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>

                                    </div>

                                    <div class="all_content">

                                        <div class="sheets">

                                            <div class="week_day" data-aos="fade-up" v-for="(lesson ,index) in lessons"
                                                :key="index">
                                                <div class="day_name">
                                                    <span>{{lesson.day}}</span>
                                                </div>
                                                <div class="day_sheets">
                                                    <h4 v-if="lesson.lesson_title">{{lesson.lesson_title}}</h4>
                                                    <h4 v-else>{{$t('NotFound')}}</h4>

                                                    <div class="image">
                                                        <img v-if="lesson.lesson_time"
                                                            src="@/assets/profile images/stopwatch.png"
                                                            alt="stop watch img" loading="lazy" />
                                                        <span>{{lesson.lesson_time}}</span>
                                                    </div>

                                                </div>
                                            </div>

                                        </div>

                                    </div>
                                </div>
                            </b-card-text>
                        </b-tab>

                        <b-tab title="Step 2">
                            <template #title>

                                <div class="side_link">
                                    <span class="num">
                                        <font-awesome-icon icon="fa-solid fa-bookmark" />
                                    </span>
                                    <span>{{$t('Curriculum')}}</span>
                                </div>

                            </template>
                            <b-card-text>
                                <div class="box_profile">
                                    <div class="head_info">
                                        <div class="image flex-between">
                                            <h3>{{$t('Curriculum')}}</h3>

                                            <h1 class="d-none">{{ hi }}</h1>


                                            <div class="dates">
                                                <div class="date flex-column">
                                                    <img src="@/assets/Group 2153.png" alt="calendar" loading='lazy'>
                                                    <div class="info">
                                                        <span>{{moment().format("h:mm") }}</span>
                                                        <span>{{moment().format("A") }}</span>
                                                    </div>
                                                </div>
                                                <div class="time flex-column">
                                                    <img src="@/assets/calendar.png" alt="calendar" loading='lazy'>
                                                    <div class="info">
                                                        <span>{{moment().format("MMM") }}</span>
                                                        <span>{{moment().format("Do") }}</span>
                                                    </div>
                                                </div>
                                            </div>


                                        </div>

                                    </div>

                                    <div class="all_content studies">
                                        <div class="" v-if="history.length">
                                            <div class="row justify-content-center align-items-center">

                                                <div class="col-lg-4 col-12" v-for="(hist,index) in history"
                                                    :key="index">
                                                    <a :href="hist.zoom_link" target="_blank" rel="noopener noreferrer">
                                                        <div class="study_box" data-aos="fade-left">
                                                            <div class="image">
                                                                <img src="@/assets/profile images/book-with-green-board-background.png"
                                                                    alt="book image" loading="lazy">
                                                                <font-awesome-icon class="icons"
                                                                    icon="fa-solid fa-play" />
                                                            </div>
                                                            <h4>{{hist.title}}</h4>

                                                            <div class="date">
                                                                <img src="@/assets/profile images/stopwatch.png"
                                                                    alt="stopwatcht" loading="lazy">
                                                                <span>{{$t('day')}}</span>
                                                                <span>:</span>
                                                                <span>{{hist.date.day}}</span>
                                                                <span>{{hist.date.month}}</span>
                                                            </div>

                                                        </div>
                                                    </a>
                                                </div>
                                            </div>

                                        </div>

                                        <h4 style="font-size:35px;text-align:center" v-else>{{$t('NotFound')}}</h4>




                                    </div>
                                </div>
                            </b-card-text>
                        </b-tab>

                        <b-tab>
                            <template #title>

                                <div class="side_link">
                                    <span class="num">
                                        <font-awesome-icon icon="fa-solid fa-book" />
                                    </span>
                                    <span>{{$t('homework')}}</span>
                                </div>

                            </template>
                            <b-card-text>
                                <div class="box_profile">
                                    <div class="head_info">
                                        <div class="image flex-between">
                                            <h3>{{$t('homework')}}</h3>

                                            <h1 class="d-none">{{ hi }}</h1>


                                            <div class="dates">
                                                <div class="date flex-column">
                                                    <img src="@/assets/Group 2153.png" alt="calendar" loading='lazy'>
                                                    <div class="info">
                                                        <span>{{moment().format("h:mm") }}</span>
                                                        <span>{{moment().format("A") }}</span>
                                                    </div>
                                                </div>
                                                <div class="time flex-column">
                                                    <img src="@/assets/calendar.png" alt="calendar" loading='lazy'>
                                                    <div class="info">
                                                        <span>{{moment().format("MMM") }}</span>
                                                        <span>{{moment().format("Do") }}</span>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>

                                    </div>

                                    <div class="all_content chat">
                                        <div class="all_all" v-for="(message,index) in teacherMessages"
                                            :key="'a'+index">
                                            <div class="row justify-content-end" v-if="message.sender === 0">

                                                <div class="col-lg-5 col-12">
                                                    <div class="sender">
                                                        <img class="sender_image"
                                                            src="@/assets/profile images/teacher-2.png"
                                                            alt="teacher image" loading="lazy">
                                                        <div class="message_sender d-flex flex-column">
                                                            <span class="message">{{message.message}}</span>
                                                            <span class="time_send">{{message.sent}}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="row justify-content-start" v-else>
                                                <div class="col-lg-5 col-12">
                                                    <div class="reciever flex-start">
                                                        <img class="reciever_image"
                                                            src="@/assets/profile images/student.png"
                                                            alt="teacher image" loading="lazy">
                                                        <div class="message_sender d-flex flex-column">
                                                            <span class="message">
                                                                {{message.message}}
                                                            </span>
                                                            <span class="time_recieve">{{message.sent}}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>

                                        <div class="row">
                                            <div class="col-12">
                                                <form action="">
                                                    <div class="form-group uploaded">
                                                        <input type="text" :placeholder="$t('write_here')"
                                                            v-model.trim="message">
                                                        <!-- <div class="icon">

                                                            <label for="uploadBtn">
                                                                <font-awesome-icon icon="fa-solid fa-paperclip" />
                                                                <input id="uploadBtn" class="d-none" type="file" />
                                                            </label>

                                                        </div> -->
                                                    </div>

                                                    <font-awesome-icon class="send" icon="fa-solid fa-paper-plane"
                                                        @click="sendHomeMessage" />

                                                </form>
                                            </div>
                                        </div>

                                    </div>

                                </div>
                            </b-card-text>
                        </b-tab>

                        <b-tab title="Step 3">
                            <template #title>

                                <div class="side_link">
                                    <span class="num">
                                        <font-awesome-icon icon="fa-solid fa-book" />
                                    </span>
                                    <span>{{$t('chatClass')}}</span>
                                </div>

                            </template>
                            <b-card-text>
                                <div class="box_profile">
                                    <div class="head_info">
                                        <div class="image flex-between">
                                            <h3>{{$t('chatClass')}}</h3>
                                            <h1 class="d-none">{{ hi }}</h1>


                                            <div class="dates">
                                                <div class="date flex-column">
                                                    <img src="@/assets/Group 2153.png" alt="calendar" loading='lazy'>
                                                    <div class="info">
                                                        <span>{{moment().format("h:mm") }}</span>
                                                        <span>{{moment().format("A") }}</span>
                                                    </div>
                                                </div>
                                                <div class="time flex-column">
                                                    <img src="@/assets/calendar.png" alt="calendar" loading='lazy'>
                                                    <div class="info">
                                                        <span>{{moment().format("MMM") }}</span>
                                                        <span>{{moment().format("Do") }}</span>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>

                                    </div>

                                    <div class="all_content chat">
                                        <div class="all_all" v-for="(message,index) in teacherMessages"
                                            :key="'a'+index">
                                            <div class="row justify-content-end" v-if="message.sender === 0">

                                                <div class="col-lg-5 col-12">
                                                    <div class="sender">
                                                        <img class="sender_image"
                                                            src="@/assets/profile images/teacher-2.png"
                                                            alt="teacher image" loading="lazy">
                                                        <div class="message_sender d-flex flex-column">
                                                            <span class="message">{{message.message}}</span>
                                                            <span class="time_send">{{message.sent}}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="row justify-content-start" v-else>
                                                <div class="col-lg-5 col-12">
                                                    <div class="reciever flex-start">
                                                        <img class="reciever_image"
                                                            src="@/assets/profile images/student.png"
                                                            alt="teacher image" loading="lazy">
                                                        <div class="message_sender d-flex flex-column">
                                                            <span class="message">
                                                                {{message.message}}
                                                            </span>
                                                            <span class="time_recieve">{{message.sent}}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>

                                        <div class="row">
                                            <div class="col-12">
                                                <form action="">
                                                    <div class="form-group uploaded">
                                                        <input type="text" :placeholder="$t('write_here')"
                                                            v-model.trim="message">
                                                        <!-- <div class="icon">

                                                            <label for="uploadBtn">
                                                                <font-awesome-icon icon="fa-solid fa-paperclip" />
                                                                <input id="uploadBtn" class="d-none" type="file" />
                                                            </label>

                                                        </div> -->
                                                    </div>

                                                    <font-awesome-icon class="send" icon="fa-solid fa-paper-plane"
                                                        @click="sendHomeMessage" />

                                                </form>
                                            </div>
                                        </div>

                                    </div>


                                </div>
                            </b-card-text>
                        </b-tab>

                    </b-tabs>
                </b-card>

            </div>
        </div>

    </div>
</template>

<script>

import axios from "axios"
import moment from "moment";
import Navbar from '../Globals/Navbar.vue';
export default {
    name: "studentProfile",
    data() {
        // const profile = localStorage.getItem("authToken");
        return {

            // profile: profile,
            hi: "",
            courseName: "",
            studentName: "",
            todayHomeWork: "",
            nextLessonDay: "",
            nextLessonMonth: "",
            nextTime: "",
            link: "",

            history: [],
            lessons: [],

            studentMessages: [],
            teacherMessages: [],
            message: null,
            step: 0

            // selected_tab_name: "",



        }
    },
    created() {
        setInterval(this.getNow, 1000);
        setInterval(this.moment, 1000);
    },
    methods: {
        moment() {
            return moment()
        },
        getNow() {
            const today = new Date();
            const date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
            const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
            const dateTime = date + ' ' + time;
            this.hi = dateTime;
        },

        async getStudent() {

            await axios.get('student').then(res => {

                this.courseName = res.data.data.course;
                this.studentName = res.data.data.student_name;
                this.todayHomeWork = res.data.data.todayHomeWork;
                this.nextLessonDay = res.data.data.nextLesson.date.day;
                this.nextLessonMonth = res.data.data.nextLesson.date.month;
                this.nextTime = res.data.data.nextLesson.time;
                this.link = res.data.data.nextLesson.link;

                // console.log(res.data.data.nextLesson.time)
                // console.log(res.data.data.nextLessonDay.date.month)

            }).catch(error => {
                console.log(error.response.data.message)

            })


        },

        async getHistory() {

            await axios.get('student/history').then(res => {

                this.history = res.data.data;

            }).catch(error => {
                console.log(error.response.data.message)

            })


        },

        async getDaysLesson() {

            await axios.get('student/lessons').then(res => {

                this.lessons = res.data.data;
                // console.log(res.data.data)

            }).catch(error => {
                console.log(error.response.data.message)

            })

        },

        async getTeacherMessage() {

            await axios.get('student/getMessages').then(res => {

                // this.studentMessages = res.data.data.studentMessages;
                // this.teacherMessages = res.data.data.teacherMessages;

                this.teacherMessages = res.data.data.messages;

                // console.log(res.data.data)

            }).catch(error => {
                console.log(error.response.data.message)

            })

        },

        async sendHomeMessage() {

            await axios.post('student/homeworkMessages', { message: this.message }).then(res => {

                this.message = null;

                window.location.reload();

                console.log(res.data.data)

            }).catch(error => {
                console.log(error.response.data.message)

            })

        },



    },
    mounted() {
        window.scrollTo(0, 0);
        this.getStudent();
        this.getHistory();
        this.getDaysLesson();
        this.getTeacherMessage();
        // this.sendHomeMessage();
    },
    components: { Navbar }
}
</script>

<style lang="scss" scoped>

</style>