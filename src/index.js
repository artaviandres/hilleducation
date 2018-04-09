import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import './index.css'
import Landing from './pages/Landing';
import Login from './pages/Login';

ReactDOM.render(
  <BrowserRouter>
    <div>
      <Route exact path="/" component={Landing} />
      <Route exact path="/login" component={Login} />
    </div>
  </BrowserRouter>,
  document.getElementById('root'));
