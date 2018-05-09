import React from 'react';

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

          .divider {
            background-color: white;
            width: 3px;
            height: 150px;
            margin-right: 30px;
          }

          .section__1-text p {
            width: 500px;
          }
        `}</style>
      </div>
    );
  }
}