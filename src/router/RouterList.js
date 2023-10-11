import HomeView from "@/views/HomeView.vue";

export const routesUser = [
    {
        path: '/dashboard',
        name: 'Dashboard',
        component: ()=>{},
        current: false
    },
    {
        path: '/your-profile',
        name: 'Your Profile',
        component: ()=>{},
        current: false
    },
    {
        path: '/settings',
        name: 'Settings',
        component: () => {},
        current: false
    },
    {
        path: '/sign-out',
        name: 'Sign Out',
        component: () => {},
        current: false
    },
]

export const routes = [
    {
        path: '/home',
        name: 'Home',
        label: 'Hoteles disponibles',
        component: HomeView,
        current: false
    },
    {
        path: '/list',
        name: 'List Hotel',
        label: 'Listado general de hoteles',
        component: () => import('@/views/ListHotelView.vue'),
        current: false
    },
    {
        path: '/hotel-sexta-avenida',
        name: 'Hotel Sexta Avenida',
        label: 'Hotel Sexta Avenida',
        component: () => import('@/views/HotelSextaAvenidaView.vue'),
        current: false
    },
    {
        path: '/florida-sinu',
        name: 'Florida Sinú',
        label: 'Florida Sinú',
        component: () => import('@/views/FloridaSinuView.vue'),
        current: false
    },
    {
        path: '/hotel-sites',
        name: 'Hotel Sites',
        label: 'Hotel Sites',
        component: () => import('@/views/HotelSitesView.vue'),
        current: false
    },
    // {
    //     path: '/create-hotel',
    //     name: 'Registrar Hotel',
    //     label: 'Registrar Hotel',
    //     component: () => import('@/views/RegisterHotelView.vue'),
    //     current: false
    // }
]

