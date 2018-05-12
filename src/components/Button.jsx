import React from 'react';
import colors from '../variables';

export default class Button extends React.Component {
  render() {
    return (
      <div className="button__container">
        <button onClick={this.props.click} className={this.props.type === "reversed" ? "reversed" : this.props.type === "white" ? "whiteAndBlue" : this.props.type === "contactBlock" ? "contactBlock" : "regular"} style={{ width: this.props.width, marginTop: this.props.marginTop }}>{this.props.children}</button>
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

          button:focus {
            outline: 0;
          }

          .regular {
            background-color: ${colors.blue};
            color: ${colors.white};
            border: none;
          }

          .regular:hover {
            background-color: ${colors.white};
            color: ${colors.black};
            border: 1px solid ${colors.black};
          }

          .reversed {
            background-color: ${colors.white};
            color: ${colors.black};
            border: 1px solid ${colors.black};
          }

          .reversed:hover {
            background-color: ${colors.blue};
            color: ${colors.white};
          }

          .whiteAndBlue {
            background-color: transparent;
            color: ${colors.blue};
            border: 1px solid ${colors.blue};
          }

          .whiteAndBlue:hover {
            background-color: ${colors.blue};
            color: ${colors.white};
            border: 1px solid ${colors.blue};
          }

          .contactBlock {
            background-color: transparent;
            color: ${colors.white};
            border: 1px solid ${colors.white}
          }

          .contactBlock:hover {
            background-color: ${colors.white};
            color: ${colors.blue};
            border: 1px solid ${colors.blue};
          }
        `}</style>
      </div>
    );
  }
}


// .btn-2 {
//   $btn-color: random-color($max:200);
//   $btn-color-dark: shade($btn-color, 40%);
//   color: tint($btn-color);
  
//   &:before,
//   &:after {
//     content: '';
//     @include absolute(0,0,0,0);
//   }

//   &:before {
//     right: -50px;
//     border-right: 50px solid transparent;
//     border-bottom: $btn-height solid $btn-color-dark;
//     transform: translateX(-100%);
//   }
  
//   &:after {
//     left: -50px;
//     border-left: 50px solid transparent;
//     border-top: $btn-height solid $btn-color-dark;
//     transform: translateX(100%);
//   }

//   &:hover {
//     color: tint($btn-color, 75%);

//     &:before { transform: translateX(-49%); }
//     &:after { transform: translateX(49%); }
//   }
// }