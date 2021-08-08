import homePage from '../pages/home/home'

export const home = [
  {
    path: "/",
    exact: true,
    title: '总览',
    component: homePage,
    meta: {
      isAuthorization: true
    }
  },
]