import React from 'react';
import Logo from '../assets/images/logo-hea.svg';

export default class Footer extends React.Component {
  render() {
    return (
      <div>
        <div className="footerContainer">
          {this.props.legalInfo ?
            <div className="legalDisclaimer"><p>Securities and Investment Advisory Services offered through The Leaders Group, INC. Securities Dealer, Member FINRA/SIPC; 26 West Dry Creek Cr. Suite 800, Littleton, Co, 80120
            <br />Check your advisor's background at <a href="https://BrokerCheck.finra.org" target="_blank">Broker Check</a></p></div>
            : null
          }
          <img src={Logo} alt="logo" />
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

          .legalDisclaimer {
            height: 100%;
            display: flex;
            align-items: center;
          }

          .legalDisclaimer p {
            font-size: 11px;
            text-align: center;
            margin: 0 30px 0 0;
          }

          .legalDisclaimer a {
            border: 0;
            cursor: pointer;
            text-decoration: underline;
            font-weight: 500;
            color: #4D4D4D;
            padding: 0;
          }

          .legalDisclaimer a:hover {
            color: #D4472C;
          }
        `}</style>
      </div>
    );
  }
}