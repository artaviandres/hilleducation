import React from 'react';
import Button from './Button';
import People from '../assets/images/people.jpg';
import Gradient from '../assets/images/gradient.png';
import colors from '../variables';

export default class ContactUsBlock extends React.Component {
  render() {
    return (
      <div className="contactContainer">
        <div className="contactContainer_1" />
        <div className="contactContainer_2">
          <div className="contactContainer_2-wrapper">
            <h1>Contact us today so that we can plan a seminar for your school district!</h1>
            <div className="contactButton">
              <Button type="contactBlock" width="200px"><a href="/contactUs" style={{ paddingTop: 15 + 'px' }}>CONTACT US</a></Button>
            </div>
          </div>
        </div>
        <style jsx>{`
          .contactContainer {
            width: 100vw;
            height: 400px;
            background: url(${People});
            background-size: 100%;
            background-repeat: no-repeat;
            display: flex;
          }

          .contactContainer_1 {
            height: 100%;
            width: 50%;
          }

          .contactContainer_2 {
            height: 100%;
            width: 50%;
            background-image: url("${Gradient}");
            background-size: 100% 100%;
            display: flex;
            align-items: center;
          }

          .contactContainer_2-wrapper {
            margin-top: -50px;
          }

          .contactContainer_2 h1 {
            color: ${colors.white};
            padding: 0 85px;
            font-size: 36px;
            font-weight: 500;
          }

          .contactButton {
            position: absolute;
            margin-left: 85px;
            margin-top: 20px;
          }

          .contactButton a {
            border: none;
            color: inherit;
            height: 100%;
            padding: 0;
          }
        `}</style>
      </div>
    );
  }
}
