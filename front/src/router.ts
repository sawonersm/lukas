import { createWebHistory, createRouter } from "vue-router"

import What from "@/view/What/What.vue"
import Bot from "@/view/Bot/Bot.vue"
import Roadmap from "@/view/Roadmap/Roadmap.vue"

const ROUTE_WHAT_PATH = "/what"
export const ROUTE_WHAT_NAME = "what"

const ROUTE_BOT_PATH = "/bot"
export const ROUTE_BOT_NAME = "bot"

const ROUTE_ROADMAP_PATH = "/roadmap"
export const ROUTE_ROADMAP_NAME = "roadmap"

const router = [
    {
        path: ROUTE_WHAT_PATH,
        name: ROUTE_WHAT_NAME,
        component: What
    },
    {
        path: ROUTE_BOT_PATH,
        name: ROUTE_BOT_NAME,
        component: Bot
    },
    {
        path: ROUTE_ROADMAP_PATH,
        name: ROUTE_ROADMAP_NAME,
        component: Roadmap
    },
    {
        path: "/:catchAll(.*)",
        redirect: () => {
            return {
                name: ROUTE_WHAT_NAME
            }
        }
    }
];

export default createRouter({
    history: createWebHistory(),
    routes: router
})
