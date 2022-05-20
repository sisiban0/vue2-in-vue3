const routes = [
    {
        path: "/",
        name: "home",
        component: () => import("../home.vue"),
    },
];

export default routes