import goodsType from '../pages/goods/goodsType'
import goodsInfo from '../pages/goods/goodsInfo'
export const goodsManage = [
  {
    path: "/goods",
    title: '商品管理',
    meta: {
      isAuthorization: true
    },
    children: [
      {
        path: "/",
        exact: true,
        title: '商品类型',
        component: goodsType,
        meta: {
          isAuthorization: true
        },
      },
      {
        path: "/goodsInfo",
        exact: true,
        title: '商品信息',
        component: goodsInfo,
        meta: {
          isAuthorization: true
        },
      },
    ]
  }
]