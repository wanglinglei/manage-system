import React, { Component } from 'react'
import { home } from '../../routers/home'
import { goodsManage } from '../../routers/goods-manage';
import { orderManage } from '../../routers/order-manage';

import menuboxCSs from '../../assets/css/components/common/menubox.module.scss'

import { isEmpty } from '../../utils/util'

interface Imenu {
  path: string,
  exact?: boolean,
  title: string,
  slected?: boolean,
  actived?: boolean
  meta: {
    isAuthorization: boolean
  },
  children?: Array<Imenu>
}
interface Iprops {
  onSelectSubmenu?: Function,//选中一级菜单时回调
  onSelectSubitem?: Function,//选中二级菜单时回调
  multiple?: boolean,//是否支持展开多个 默认false
}
const menuList = [...home, ...goodsManage, ...orderManage].map((item: any, index) => {
  if (item.children && item.children.length > 0) {
    return {
      ...item,
      slected: false,
      children: item.children.map((child: any, childIndex: any) => {
        return {
          ...child,
          slected: false,
          actived: false
        }
      })
    }
  } else {
    return {
      ...item,
      slected: false,
      actived: false
    }
  }
})


export default class Menubox extends Component<Iprops>{
  constructor(props: any) {
    super(props)
  }
  state = {
    menuList
  }
  //点击一级菜单栏  
  selectSubMenu(subindex: number) {
    const { multiple, onSelectSubmenu } = this.props;
    const menuList = this.state.menuList;
    menuList.forEach((submenu, index) => {
      if (multiple) {
        // submenu.slected = true
        menuList[subindex].slected = !menuList[subindex].slected
      } else {
        submenu.slected = subindex === index ? !menuList[subindex].slected : false
      }
      if (submenu.children && submenu.children.length > 0) {
        submenu.actived = false;
      } else {
        submenu.actived = subindex === index ? true : false
      }
    })
    this.setState({
      menuList
    })
    onSelectSubmenu && onSelectSubmenu()
  }
  //点击二级菜单
  selectSubitem(subindex: number, menuindex: number, e) {
    e.stopPropagation();
    const { onSelectSubitem } = this.props;
    const menuList = this.state.menuList;
    for (let i = 0; i < menuList.length; i++) {
      if (menuList[i].children && menuList[i].children.length > 0) {
        menuList[i].children.forEach((childMenu: Imenu, childIndex: number) => {
          if (i === subindex && childIndex === menuindex) {
            childMenu.actived = true
          } else {
            childMenu.actived = false
          }
        })
      }
    }
    this.setState({
      menuList
    })
    onSelectSubitem && onSelectSubitem()
  }
  render() {
    return (
      <div className={menuboxCSs.mainMenu}>
        {
          this.state.menuList.map((subitem: Imenu, subindex: number) => {
            return (
              <div className={`${menuboxCSs.submenu} ${subitem.slected ? menuboxCSs.submenuSlected : ''} ${subitem.actived ? menuboxCSs.actived : ''}`}
                onClick={this.selectSubMenu.bind(this, subindex)}
                key={'sub' + subindex}>
                <div className={menuboxCSs.submenuInfo}>{subitem.title}</div>
                {
                  subitem.children && subitem.children.length > 0 ? <div className={menuboxCSs.menuitemBox}>
                    {
                      subitem.children.map((menuitem, menuindex) => {
                        return (
                          <div className={`${menuboxCSs.menuitem} ${menuitem.actived ? menuboxCSs.actived : ''}`}
                            key={'menu' + menuindex}
                            onClick={this.selectSubitem.bind(this, subindex, menuindex)}>
                            <div className={menuboxCSs.menuitemInfo}>{menuitem.title}</div>
                          </div>
                        )
                      })
                    }
                  </div> : ''

                }
              </div>
            )
          })
        }
      </div>
    )
  }
}

