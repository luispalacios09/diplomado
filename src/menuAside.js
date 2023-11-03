import {
  mdiAccountCircle,
  mdiMonitor,
  mdiLock,
  mdiSquareEditOutline,
  mdiTable,
  mdiCityVariant,
  mdiHomeModern,
  mdiBed
} from '@mdi/js'

export default [
  {
    to: '/dashboard',
    icon: mdiMonitor,
    label: 'Dashboard'
  },
  {
    to: '/hotels',
    label: 'Hotels',
    icon: mdiHomeModern
  },
  {
    to: '/rooms',
    label: 'Rooms',
    icon: mdiBed
  },
  {
    to: '/cities',
    label: 'Cities',
    icon: mdiCityVariant
  },
  {
    to: '/users',
    label: 'Users',
    icon: mdiTable
  },
  // {
  //   to: '/forms',
  //   label: 'Forms',
  //   icon: mdiSquareEditOutline
  // },
  {
    to: '/profile',
    label: 'Profile',
    icon: mdiAccountCircle
  },
  // {
  //   to: '/login',
  //   label: 'Login',
  //   icon: mdiLock
  // },


]
