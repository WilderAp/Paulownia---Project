import { HomePage, ItemsDetail } from '@/pages'
import Items from '@/pages/Items'

export const publicRoutes = [
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/corporativo',
    element: <Items />,
  },
  {
    path: '/corporativo/:id',
    element: <ItemsDetail />,
  },
  {
    path: '/login',
    element: <div className="w-[1440px] h-100">Login</div>,
  },
  {
    path: '/register',
    element: <div className="w-[1440px] h-100">Register</div>,
  },
]
