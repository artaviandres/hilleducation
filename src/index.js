import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom'
import './index.css';


import Landing from './components/Landing';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';

import { Provider } from 'react-redux';
import Store from './store';

const StoreInstance = Store();

ReactDOM.render(
  <BrowserRouter>
    <Provider store={StoreInstance}>
      <div>
        <Route path="/" exact component={Landing} />
        <Route path="/aboutUs" exact component={AboutUs} />
        <Route path="/contactUs" exact component={ContactUs} /> 
      </div>
    </Provider>
  </BrowserRouter>,
  document.getElementById('root'));
