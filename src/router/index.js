import TodoApp from "@/components/TodoApp.vue"
import Galleryart from "@/components/Galleryart.vue"
import { createRouter, createWebHistory } from "vue-router"
const router = createRouter({
    history: createWebHistory(),
    routes: [
        { 
            path: '/', 
            component: TodoApp
        },
        { 
            path: '/galleryart', 
            component: Galleryart,
            children: [
                { 
                    path: '/cars',
                    component: () => import("@/components/CarsComponent.vue")
                },
                { 
                    path: '/Motars',
                    component: () => import("@/components/MotarsComponent.vue")
                },
                { 
                    path: '/Country',
                    component: () => import("@/components/CountryComponent.vue")
                },
                { 
                    path: '/githubUsers',
                    component: () => import("@/components/GithubUsersComponent.vue")
                }

            ]
        },
    ]
})
export default router
