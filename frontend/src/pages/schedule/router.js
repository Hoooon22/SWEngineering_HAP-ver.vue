import Vue from "vue";
import VueRouter from "vue-router";
import Calendar from "../../components/layout/Calendar";
import Board from "../../components/layout/Board";

Vue.use(VueRouter);

const router = new VueRouter({
    mode : "history",
    routes: [{
        path:"/",
        component: Calendar
    },
    {
        path:"/board",
        component: Board
    }
    ]
});

export default router;