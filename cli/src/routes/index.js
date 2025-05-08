import * as VueRouter from  'vue-router'

import IndexComponent  from '@/views/auth/IndexComponent.vue'
import LoginComponent  from '@/views/auth/LoginComponent.vue'

const adminRoutes = [
    {path: 'home', component: () => import('@/views/screens/HomeComponent.vue')},
    {path: 'divisions', component: () => import('@/views/screens/DivisionsComponent.vue')},
    //{path: 'users', component: () => import('@/views/admin/users/AdminUsersComponent.vue')},
    //{path: 'products', component: () => import('@/views/admin/products/AdminProductsComponent.vue')},
    //{path: 'services', component: () => import('@/views/admin/services/AdminServicesComponent.vue')},
    //{path: 'accesorios', component: () => import('@/views/admin/accesorios/AdminAccesoriosComponent.vue')},
    //{path: 'checkout', component: () => import('@/views/admin/products/CheckoutComponent.vue')},
    //{path: 'view', component: () => import('@/views/admin/products/ProductViewComponent.vue')},
    //{path: 'view-naked', component: () => import('@/views/admin/products/ProductViewNakedComponent.vue')},

]

const routes=[

    {path:'/auth/index',name:'index',component:IndexComponent},
    {path:'/auth/login',name:'login',component:LoginComponent},

    {path:'/auth/loginexample',name:'login',component:LoginComponent},

    

    {path:'/admin',name:'admin-home',
    component: import('@/views/layouts/AdminLayoutComponent.vue'),
    children: adminRoutes
    },

]

const router = VueRouter.createRouter({
    history:VueRouter.createWebHistory(),
    routes
})

export  default router