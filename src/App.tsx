import React from 'react';
import './App.css';

import { isEmpty } from './utils/util'
import MyRoute from './components/router/MyRoute'
import router from './routers'
import Menubox from './components/common/Menubox'
function App() {
  const userInfo = localStorage.getItem('user_info');
  const isLogin = !isEmpty(userInfo)
  return (
    <div className="App" >
      {
        isLogin && <Menubox multiple />
      }
      <MyRoute router={router}></MyRoute>
    </div>
  );
}

export default App;
