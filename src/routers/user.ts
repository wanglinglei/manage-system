import login from '../pages/user/login'
import register from '../pages/user/register'

export const user = [
  {
    path: "/login",
    exact: true,
    component: login
  },
  {
    path: '/register',
    exact: true,
    component: register
  }
]