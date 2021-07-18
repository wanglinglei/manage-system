import React from 'react';
import './App.css';

import MyRoute from './components/router/MyRoute'
import router from './routers'

function App() {
  return (
    <div className="App">
      <MyRoute router={router}></MyRoute>
    </div>
  );
}

export default App;
