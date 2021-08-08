import orders from '../pages/order/orders'
import refundReason from '../pages/order/refundReason'
export const orderManage = [
  {
    path: "/orders",
    title: '订单管理',
    meta: {
      isAuthorization: true
    },
    children: [
      {
        path: "/",
        exact: true,
        title: '订单列表',
        component: orders,
        meta: {
          isAuthorization: true
        },
      },
      {
        path: "/goodsInfo",
        exact: true,
        title: '商品信息',
        component: refundReason,
        meta: {
          isAuthorization: true
        },
      },
    ]
  }
]