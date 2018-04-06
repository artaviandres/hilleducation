import React from 'react';
import Logo from '../assets/images/logo-hea.svg';

export default class Footer extends React.Component {
  render() {
    return (
      <div>
        <div className="footerContainer">
          <img src={Logo} />
        </div>
        <style jsx>{`
          .footerContainer {
            display: flex;
            width: 100%;
            height: 100px;
            justify-content: center;
            align-items: center;
          }

          .footerContainer img {
            width: 200px;
          }
        `}</style>
      </div>
    );
  }
}