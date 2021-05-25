import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import List from "../views/List.vue";
import Login from "../views/Login.vue";
import Signup from "../views/Signup.vue";


const routes = [{
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/list",
        name: "List",
        component: List,
    },
    {
        path: "/login",
        name: "Login",
        component: Login,
    },
    {
        path: "/signup",
        name: "Signup",
        component: Signup,
    },
    {
        path: "/about",
        name: "About",
        component: About,
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;