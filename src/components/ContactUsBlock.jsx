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
          <div>
            <h1>Contact us today so that<br /> we can plan a seminar<br /> for your school district!</h1>
            <Button reverse={true}>CONTACT US</Button>
          </div>
        </div>
        <style jsx>{`
          .contactContainer {
            width: 100vw;
            height: 580px;
            background: url(${People});
            background-size: 100%;
            background-repeat: no-repeat;
            display: flex;
            margin-top: 30px;
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
            justify-content: center;
            align-items: center;
          }

          .contactContainer_2 h1 {
            color: ${colors.white};
            padding: 0 85px;
            font-size: 44px;
            font-weight: 500;
          }
        `}</style>
      </div>
    );
  }
}
