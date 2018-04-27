import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'
import Landing from './components/Landing';
import AboutUs from './components/AboutUs';

import { Provider } from 'react-redux';
import Store from './store';

const StoreInstance = Store();

ReactDOM.render(
  <Provider store={StoreInstance}>
    <AboutUs />
  </Provider>,
  document.getElementById('root'));
