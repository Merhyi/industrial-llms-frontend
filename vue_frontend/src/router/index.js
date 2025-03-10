<<<<<<< HEAD
<<<<<<< HEAD
import { createWebHistory, createRouter } from "vue-router"
import HomePage from "@/components/HomePage (Discarded)/HomePage.vue"
import ChatPage from "@/components/ChatPage/ChatPage.vue"
import KnowBase from "@/components/KnowbasePage/KnowBasePage.vue"
import CreateItemPage from "@/components/KnowbasePage/CreateItemPage.vue"
import KnowBaseConfigurationPage from "@/components/KnowbasePage/KnowBaseConfigurationPage.vue"
import AgentsPage from "@/components/AgentsPage/AgentsPage.vue"
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
=======
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
>>>>>>> 73fe00a0d1ee4a311c8991434055d48344dadf01
=======
import { createWebHistory, createRouter } from "vue-router"
import HomePage from "@/components/HomePage (Discarded)/HomePage.vue"
import ChatPage from "@/components/ChatPage/ChatPage.vue"
import KnowBase from "@/components/KnowbasePage/KnowBasePage.vue"
import CreateItemPage from "@/components/KnowbasePage/CreateItemPage.vue"
import KnowBaseConfigurationPage from "@/components/KnowbasePage/KnowBaseConfigurationPage.vue"
import AgentsPage from "@/components/AgentsPage/AgentsPage.vue"
import AgentsConfigurationPage from "@/components/AgentsPage/AgentsConfigurationPage.vue"


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

]

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
>>>>>>> a3c94eb75914e974b7ccc1c6dab513d32b163c3b
