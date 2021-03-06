import React from 'react';
import colors from '../variables';

export default class BlueBackgroundImg extends React.Component {
  render() {
    return (
      <div>
        <div className="section__1">
          <div className="divider" />
          <div className="section__1-text">
            <h1>{this.props.title}</h1>
            <p>{this.props.subtitle}</p>
          </div>
        </div>
        <style jsx>{`
          .section__1 {
            width: 100vw;
            height: 480px;
            background: url(${this.props.image});
            background-size: 100%;
            background-repeat: no-repeat;
            display: inline-flex;
            align-items: center;
            padding-left: 200px;
          }

          .section__1-text {
            display: inline-flex;
            flex-direction: column;
            color: white;
          }

          .section__1-text h1 {
            font-family: GothamProBold;
            font-size: 36px;
            text-transform: uppercase;
          }

          .divider {
            background-color: ${colors.red};
            width: 3px;
            height: 190px !important;
            margin-right: 30px;
          }

          .section__1-text p {
            width: ${this.props.width ? this.props.width : '600px'};
            font-size: 20px;
          }
        `}</style>
      </div>
    );
  }
}