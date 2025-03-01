import { createWebHistory, createRouter } from "vue-router"
import HomePage from "@/components/HomePage.vue"
import ChatPage from "@/components/ChatPage.vue"


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
    }

]

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;