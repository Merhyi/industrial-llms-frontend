import { createWebHistory, createRouter } from "vue-router"
import HomePage from "@/components/HomePage (Discarded)/HomePage.vue"
import ChatPage from "@/components/ChatPage/ChatPage.vue"
import KnowBase from "@/components/KnowbasePage/KnowBasePage.vue"
import KnowBaseConfigurationPage from "@/components/KnowbasePage/KnowBaseConfigurationPage.vue"

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

    {
        path: "/knowbase/configuration",
        name: "Knowbase Configuration",
        component: KnowBaseConfigurationPage,
    },

    {
        path:"/knowbase/configuration/edititem",
        name: "Knowbase Dataitem Configuration", 
        component: null
    }

]

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
