import React from 'react';
import { AlertList, Alert, AlertContainer } from "react-bs-notifier";
import MdClose from 'react-icons/lib/md/close';

export default class Growl extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        {this.props.isEnabled === true
          ? <AlertContainer position="top-right">
              <Alert type={this.props.type}>
                <a onClick={this.props.close}><MdClose /></a>
                {this.props.children}
              </Alert>
            </AlertContainer>
          : null
        }
        <style>{`
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