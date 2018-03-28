import React from 'react';
import colors from '../variables';

export default class Button extends React.Component {
  render() {
    return (
      <div className="button__container">
        <button>{this.props.children}</button>
        <style jsx>{`
          .button__container {
            display: inline-block;
          }
          button {
            background-color: ${this.props.bgColor ? this.props.bgColor : colors.blue};
            border: none;
            color: ${this.props.color ? this.props.color : colors.white};
            cursor: pointer;
            font-size: 18px;
            font-weight: 400;
            margin-left: ${this.props.marginLeft};
            height: 40px;
            outline: 0;
            width: 150px;
            -webkit-border-radius: 20px;
            -moz-border-radius: 20px;
            border-radius: 20px;
          }
        `}</style>
      </div>
    );
  }
}