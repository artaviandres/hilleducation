import React from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';
import Logo from '../assets/images/logo-hea.svg';
import colors from '../variables';

export default class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <div className="header__container">
          <a href="/" style={{ border: 'none'}}><img src={Logo} width="200px" /></a>
          <a style={{ border: 'none'}}>Home</a>
          <a>About us</a>
          <a>Contact us</a>
          <a>HEA Associates</a>
          <Button>
            <Link to='/login' style={{ textDecoration: 'none', border: 'none', color: 'white', fontSize: '16' + 'px', fontWeight: '400' }}>
              LOG IN
            </Link>
          </Button>
        </div>
        <style jsx>{`
          .header__container {
            display: flex;
            width: 100%;
            height: 100px;
            justify-content: center;
            align-items: center;
          }
          
          a {
            cursor: pointer;
            font-weight: 600;
            color: ${colors.black};
            padding-right: 20px;
            padding-left: 20px;
            border-left: 1px solid ${colors.gray};
          }
          
          a:hover {
            text-decoration: underline;
            text-decoration-color: ${colors.blue};
          }
        `}</style>
      </div>
    );
  }
}