import React from 'react';
import MdClose from 'react-icons/lib/md/close';
import Input from './Input';
import Logo from '../assets/images/logo-hea.svg';
import colors from '../variables';

export default class Modal extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <div className="modal__container">
        <div className="modal__wrapper">
          <a className="modal__close"><MdClose size={20} /></a>
          <h1>Welcome</h1>
          <img src={Logo} width="250px" />
          <Input type="text" id="input-email" name="Email" />
          <Input type="password" id="input-password" name="Password" />
        </div>
        <style>{`
          .modal__close {
            cursor: pointer;
            border: none;
            padding: 0;
            position: absolute;
            margin-left: 200px;
            margin-top: 5px;
          }
          .modal__container {
            height: 100vh;
            width: 100vw;
            background-color: rgba(0, 0, 0, 0.6);
            display: ${this.props.show === false ? 'none' : 'flex'};
            justify-content: center;
            align-items: center;
            position: absolute;
            top: 0;
            left: 0;
          }

          body {
            overflow-y: ${ this.props.show === true ? 'hidden !important;' : 'auto' }
          }

          .modal__wrapper {
            height: 650px;
            width: 450px;
            background-color: rgba(255, 255, 255, 0.9);
            border-radius: 10px;
            box-shadow: 0 0 2px #000;
            display: flex;
            align-items: center;
            flex-direction: column;
          }

          .modal__wrapper h1 {
            font-weight: 600;
            color: ${colors.black};
            margin-top: 40px;
          }

          .modal__wrapper img {
            margin: 25px 0;
          }
        `}</style>
      </div>
    );
  }
}