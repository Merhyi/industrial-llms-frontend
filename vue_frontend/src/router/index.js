import { createWebHistory, createRouter } from "vue-router"
import HomePage from "@/components/HomePage (Discarded)/HomePage.vue"
import ChatPage from "@/components/ChatPage/ChatPage.vue"
import KnowBase from "@/components/KnowbasePage/KnowBasePage.vue"


const routes = [
    {
        path: "/",
        name: "HomePage", 
        component: HomePage,
    },

    {
        path: "/chat",
        name: "ChatPage", 
        component: ChatPage,
    },

    {
        path: "/knowbase",
        name: "KnowBase", 
        component: KnowBase,
    },

]

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
