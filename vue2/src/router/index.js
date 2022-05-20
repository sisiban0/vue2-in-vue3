
import Vue from "vue";

import VueRouter from "vue-router";

Vue.use(VueRouter)

const routes = [
    {
        path: "/about",
        component: () => import("../about.vue")
    }
]

export default new VueRouter({
    routes,
    mode: "history"
})

export {
    routes
}