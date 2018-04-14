import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'
import Landing from './components/Landing';

import { Provider } from 'react-redux';
import Store from './store';

const StoreInstance = Store();

ReactDOM.render(
  <Provider store={StoreInstance}>
    <Landing />
  </Provider>,
  document.getElementById('root'));
