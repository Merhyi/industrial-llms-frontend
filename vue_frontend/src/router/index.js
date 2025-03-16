import { createWebHistory, createRouter } from "vue-router"
import HomePage from "@/components/HomePage (Discarded)/HomePage.vue"
import ChatPage from "@/components/ChatPage/ChatPage.vue"
import KnowBase from "@/components/KnowbasePage/KnowBasePage.vue"
import AgentsPage from "@/components/AgentsPage/AgentsPage.vue"
import KnowBaseConfigurationPage from "@/components/KnowbasePage/KnowBaseConfigurationPage.vue"
import CreateItemPage from "@/components/KnowbasePage/CreateItemPage.vue"
import AgentsConfigurationPage from "@/components/AgentsPage/AgentsConfigurationPage.vue"
import FinetunePage from "@/components/FinetunePage/FinetunePage.vue"


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
        path: "/agents",
        name: "AgentsPage", 
        component: AgentsPage,
    },

    {
        path: "/knowbase/configuration",
        name: "Knowbase Configuration",
        component: KnowBaseConfigurationPage,
    },

    {
        path: "/knowbase/configuration/create_item",
        name: "Create Knowbase Dataitem", 
        component: CreateItemPage
    }, 

    {
        path: "/agents/configuration",
        name: "agents Configuration",
        component: AgentsConfigurationPage,
    },

    {
        path: "/finetune",
        name: "Fine-tuning",
        component: FinetunePage,
    },

]

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
