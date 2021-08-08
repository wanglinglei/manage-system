/* eslint-disable import/no-anonymous-default-export */
import { home } from './home'
import { goodsManage } from './goods-manage'
import { orderManage } from './order-manage'
// import { marketingManage } from './marketing-manage'
import { user } from './user'
export default [
  ...home,
  ...user,
  ...goodsManage,
  ...orderManage,
  // ...marketingManage
]