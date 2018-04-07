import React from 'react';
import colors from '../variables';

export default class Button extends React.Component {
  render() {
    return (
      <div className="button__container">
        <button className={this.props.reverse ? "reversed" : "regular"}>{this.props.children}</button>
        <style jsx>{`
          .button__container {
            display: flex;
            justify-content: center;
            align-items: center;
          }
          button {
            border: none;
            cursor: pointer;
            font-size: 16px;
            font-weight: 400;
            height: 40px;
            outline: 0;
            width: 150px;
            -webkit-border-radius: 20px;
            -moz-border-radius: 20px;
            border-radius: 20px;
          }

          .regular {
            background-color: ${colors.blue};
            color: ${colors.white};
          }

          .reversed {
            background-color: ${colors.white};
            color: ${colors.blue};
          }
        `}</style>
      </div>
    );
  }
}