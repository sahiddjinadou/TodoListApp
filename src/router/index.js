import { createRouter, createWebHistory } from "vue-router"

import TodoApp from "@/components/TodoApp.vue"
import Galleryart from "@/components/Galleryart.vue"
import StepNavigation from "@/components/Formulaire/StepNavigation.vue"
import Step1 from "@/components/Formulaire/Step1.vue"
import Step2 from "@/components/Formulaire/Step2.vue"
import Step3 from "@/components/Formulaire/Step3.vue"
import Step4 from "@/components/Formulaire/Step4.vue"



const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: TodoApp },
        { path: '/galleryart', component: Galleryart },
        {
            path: '/mutiStepForm',
            component: StepNavigation,
            // redirect: '/mutiStepForm/etap1',
            children: [
                {
                    path: '',
                    redirect: '/mutiStepForm/etap1'
                },
                {
                    path: 'etap1',
                    component: Step1
                },
                {
                    path: 'etap2',
                    component: Step2
                },
                {
                    path: 'etap3',
                    component: Step3
                },
                {
                    path: 'etap4',
                    component: Step4
                },
            ]
        }
    ]
})
export default router
