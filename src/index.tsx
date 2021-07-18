import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from "react-router-dom";
import * as serviceWorker from "./serviceWorker";

import axios from 'axios'

axios.interceptors.request.use((config: any) => {
  const reg = RegExp(/manageServices/);
  if (!config.url.match(reg)) {
    config.url = "/manageServices" + config.url;
  }

  return config;
});
axios.interceptors.response.use(({ data }) => {
  console.log(data)
  if (data.status === 'success') {
    return [undefined, data.data]
  } else {
    return [data.msg, undefined]
  }
});


ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
serviceWorker.unregister()