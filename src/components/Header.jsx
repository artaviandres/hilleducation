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
          <a className="margin">About us</a>
          <a className="margin">Contact us</a>
          <a className="margin">HEA Associates</a>
          <Button marginLeft="20px">LOG IN</Button>
        </div>
        <style jsx>{`
          .header {
            width: 100vw;
            background-color: ${colors.white};
          }
          .header__container {
            height: 100px;
            line-height: 100px;
            width: 950px;
            margin: 0 auto;
          }

          .header__container div {
            margin-top: -30px;
          }

          .header__container img {
            margin-right: 90px;
          }
          
          a {
            cursor: pointer;
            font-weight: 600;
            color: ${colors.black};
            padding-right: 20px;
          }
          
          a:hover {
            text-decoration: underline;
            text-decoration-color: ${colors.blue};
          }
          
          .margin {
            padding-left: 20px;
            border-left: 1px solid ${colors.gray};
          }
        `}</style>
      </div>
    );
  }
}