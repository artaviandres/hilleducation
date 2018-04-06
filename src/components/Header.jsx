import React from 'react';
import Button from './Button';
import Logo from '../assets/images/logo-hea.svg';
import colors from '../variables';

export default class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <div className="header__container">
          <img src={Logo} width="200px" />
          <a>Home</a>
          <a>About us</a>
          <a>Contact us</a>
          <a>HEA Associates</a>
          <Button>LOG IN</Button>
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