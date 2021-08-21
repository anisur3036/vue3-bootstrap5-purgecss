import { createWebHistory, createRouter } from "vue-router";

import Layout from "../layouts/Base.vue";

// routes

const routes = [
    {
        path: "/",
        component: Layout,
        children: [
            {
                path: "/",
                name: "home",
                component: () => import("../views/Home.vue"),
            },
            {
                path: "/about",
                name: "about",
                component: () => import("../views/About.vue"),
            },
        ],
    },
    { path: "/:pathMatch(.*)*", redirect: "/" },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
