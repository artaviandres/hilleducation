import React from 'react';
import { Alert, AlertContainer } from "react-bs-notifier";
import MdClose from 'react-icons/lib/md/close';

export default class Growl extends React.Component {
  render() {
    return (
      <div className="growl__container">
        <AlertContainer position="top-right">
          <Alert type={this.props.type}>
            <a onClick={this.props.close}><MdClose /></a>
            {this.props.children}
          </Alert>
        </AlertContainer>
        <style>{`
          .growl__container {
            visibility: ${this.props.isEnabled === true ? 'visible' : 'hidden'};
            transition: visibility 2s, linear;
          }
          .alert a {
            border: none;
            padding: 0;
          }
          .alert svg {
            color: black;
            position: absolute;
            left: 96%;
            top: 5px;
          }
        `}</style>
      </div>
    );
  }
}