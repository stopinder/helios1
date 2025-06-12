import { createRouter, createWebHistory } from 'vue-router'

import ClientView from '../views/ClientView.vue'
import ClinicianView from '../views/ClinicianView.vue'
import ReflectiveChat from '../views/ReflectiveChat.vue'
import SystemMap from '../views/SystemMap.vue'
import ClientPanel from '../views/ClientPanel.vue'

const routes = [
    { path: '/', component: ClientPanel },
    { path: '/client', component: ClientView },
    { path: '/clinician', component: ClinicianView },
    { path: '/chat', component: ReflectiveChat },
    { path: '/system', component: SystemMap },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router

