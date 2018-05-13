import React from 'react';
import MdClose from 'react-icons/lib/md/close';
import FaDanger from 'react-icons/lib/fa/exclamation-triangle';
import FaCheck from 'react-icons/lib/fa/check';
import MdArrowLeft from 'react-icons/lib/md/arrow-back';
import firebase from 'firebase';
import Input from './Input';
import Button from './Button';
import Logo from '../assets/images/logo-hea.svg';
import colors from '../variables';

export default class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalType: 'login',
      showError: false,
      showSuccess: false,
      message: '',
      accounts: [],
      email: '',
      password: '',
      user: {},
    };
    this.submitRegister = this.submitRegister.bind(this);
    this.submitLogin = this.submitLogin.bind(this);
    this.checkStatus = this.checkStatus.bind(this);
    this.resetPassword = this.resetPassword.bind(this);
    this.closeForgot = this.closeForgot.bind(this);
    this.goBackForgot = this.goBackForgot.bind(this);
    this.goToForgot = this.goToForgot.bind(this);
  }

  checkStatus() {
    const auth = firebase.auth();
    auth.onAuthStateChanged((firebaseUser) => {
      if (firebaseUser) {
        console.log("logged", firebaseUser);
      }
      else {
        console.log("not logged");
      }
    })
  }

  submitRegister(e) {
    e.preventDefault();
    const auth = firebase.auth();
    const registerPromise = auth.createUserWithEmailAndPassword(this.state.email, this.uuidv4());
    registerPromise.catch((e) => console.log(e));
    registerPromise.then((response) => auth.sendPasswordResetEmail(this.state.email));
  }

  submitLogin(e) {
    e.preventDefault();
    const auth = firebase.auth();
    const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const regexResponse = emailRegex.test(this.state.email);
    if (regexResponse) {
      const loginPromise = auth.signInWithEmailAndPassword(this.state.email, this.state.password);
      loginPromise.catch((e) => {
        this.setState({ showError: true });
        switch(e.code) {
          case 'auth/invalid-email':
            this.setState({
              message: e.message
            });
            break;
          case 'auth/user-not-found':
            this.setState({
              message: 'The user does not exist in our database. Please contact hill@education.com for further instructions.'
            });
            break;
          case 'auth/wrong-password':
            this.setState({
              message: 'The user entered a wrong password',
            });
            break;
          default:
            this.setState({
              message: 'Unknown error',
            });
        }
      });
      loginPromise.then((response) => {
        this.props.onLogin(response)
        window.location.reload();
      });
    } else {
      this.setState({
        showError: true,
        error: 'Wrong email syntax'
      });
    }
  }

  uuidv4() {
    return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
      (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
    )
  }

  resetPassword(e) {
    e.preventDefault();
    const auth = firebase.auth();
    auth.sendPasswordResetEmail(this.state.email)
    .then((res) => {
      this.setState({ showError: false, showSuccess: true, message: 'Email correctly sent to ' + this.state.email + ' , please check your inbox for further instructions' });

    })
    .catch((e) => {
      this.setState({ showError: true });
        switch(e.code) {
          case 'auth/invalid-email':
            this.setState({
              message: e.message
            });
            break;
          case 'auth/user-not-found':
            this.setState({
              message: 'The user does not exist in our database. Please contact hill@education.com for further instructions.'
            });
            break;
          default:
        }
    })
  }

  closeForgot() {
    this.setState({
      modalType: 'login',
      showError: false,
      showSuccess: false,
      message: '',
    });
    this.props.onToggleModal();
  }

  goBackForgot() {
    this.setState({
      modalType: 'login',
      showError: false,
      showSuccess: false,
      message: '',
      email: '',
    });
  }
  
  goToForgot() {
    this.setState({
      modalType: 'forgot',
      showError: false,
      showSuccess: false,
      message: '',
    });
  }
  
  render() {
    return (
      <div className="modal__container">
          {this.state.modalType === 'login'
            ? <div className="modal__wrapper">
                <a className="modal__close" onClick={this.props.onToggleModal}><MdClose size={20} /></a>
                <h1>Welcome</h1>
                <img src={Logo} width="250px" alt="logo" />
                <form onSubmit={this.submitLogin} className="modal__form">
                  <Input
                    type="text"
                    id="input-email"
                    name="Email"
                    change={(e) => this.setState({ email: e.target.value })}
                    required="true"
                  />
                  <Input
                    type="password"
                    id="input-password"
                    name="Password"
                    maxLength={12}
                    marginTop="30px"
                    change={(e) => this.setState({ password: e.target.value })}
                    required="true"
                  />
                  {this.state.showError
                    ? <div className="danger__container">
                        <div className="danger__icon">
                          <FaDanger />
                        </div>
                        <div className="danger__text">
                          {this.state.message}
                        </div>
                      </div>
                    : null
                  }
                  <Button width="337px" marginTop="25px" type="white">
                    LOG IN
                  </Button>
                </form>
                <div className="forgot__container">
                  <p>Reset Password</p>
                  <a onClick={() => this.goToForgot()}>Click Here</a>
                </div>
              </div>
            : <div className="modal__wrapper--forgot">
                <a className="modal__close--forgot" onClick={() => this.closeForgot()}><MdClose size={20} /></a>
                <img src={Logo} width="250px" alt="logo" />
                <h1>Reset Password</h1>
                <p>We can help you reset your password using <br/> the email address linked to your account</p>
                <form onSubmit={this.resetPassword} style={{ width: '350' + 'px', height: '200' + 'px' }}>
                  <input
                    type="text"
                    id="input-email-forgot"
                    name="Email"
                    change={(e) => this.setState({ email: e.target.value })}
                    required="true"
                    className="forgot__input"
                    placeholder="Email"
                  />
                  {this.state.showError
                    ? <div className="danger__container">
                        <div className="danger__icon">
                          <FaDanger />
                        </div>
                        <div className="danger__text">
                          {this.state.message}
                        </div>
                      </div>
                    : this.state.showSuccess
                        ? <div className="danger__container">
                            <div className="danger__icon">
                              <FaCheck />
                            </div>
                            <div className="danger__text">
                              {this.state.message}
                            </div>
                          </div>
                        : null
                  }
                  <Button width="337px" marginTop="25px" type="white">
                    SUBMIT
                  </Button>
                </form>
                <div className="back__container">
                  <a className="modal__back" onClick={() => this.goBackForgot()}><MdArrowLeft size={20} style={{ marginTop: -2 + 'px', marginRight: 5 + 'px' }}/>Go Back</a>
                </div>
              </div>
          }
        <style>{`
          .modal__close {
            cursor: pointer;
            border: none;
            padding: 0;
            position: absolute;
            margin-left: 200px;
            margin-top: 5px;
          }
          
          .modal__close--forgot {
            cursor: pointer;
            border: none;
            padding: 0;
            position: absolute;
            margin-left: 200px;
            margin-top: -300px;
          }

          .back__container {
            display: inline-flex;
            justify-content: center;
            align-items: center;
          }

          .modal__back {
            cursor: pointer;
            border: none;
            padding: 0;
            color: ${colors.darkGray} !important;
            margin-top: 0px;
          }

          .modal__container {
            height: 100vh;
            width: 100vw;
            background-color: rgba(0, 0, 0, 0.7);
            display: ${this.props.show === false ? 'none' : 'flex'};
            justify-content: center;
            align-items: center;
            position: absolute;
            top: 0;
            left: 0;
            z-index: 1000;
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

          .modal__wrapper--forgot {
            height: 650px;
            width: 450px;
            background-color: rgba(255, 255, 255, 0.9);
            border-radius: 10px;
            box-shadow: 0 0 2px #000;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }

          .modal__wrapper--forgot img {
            margin-top: 40px;
          }

          .modal__wrapper--forgot h1 {
            font-weight: 600;
            color: ${colors.black};
            margin-top: 75px;
          }

          .modal__wrapper--forgot p {
            text-align: center;
            color: ${colors.darkGray};
            padding: 0 25px;
            font-size: 15px;
          }

          .danger__container {
            display: flex;
            margin-top: 25px;
            color: ${colors.inputFontColor};
            width: 340px;
          }

          .danger__icon {
            width: 5%;
            display: flex;
            align-items: center;
            margin-right: 15px;
          }

          .danger__text {
            width: 80%;
            font-size: 12px;
          }

          .modal__wrapper h1 {
            font-weight: 600;
            color: ${colors.black};
            margin-top: 40px;
          }

          .modal__wrapper img {
            margin: 15px 0;
          }

          .forgot__container {
            margin-top: 50px;
            display: flex;
            align-items: center;
            flex-direction: column;
          }

          .forgot__container a {
            border: 0;
            padding: 0;
            font-style: italic;
            margin-left: -7px;
          }

          .forgot__container p {
            margin-bottom: 5px;
          }

          .modal__form {
            width: 350px;
            height: 300px;
            padding: 20px 40px;
          }

          .forgot__input {
            background-color: #D6D6D6;
            color: ${colors.inputGray};
            border: none;
            margin-left: 35px;
            margin-bottom: 20px;
            padding-left: 20px;
            width: 80%;
            height: 40px;
          }

          .forgot__input:focus {
            outline: 0;
          }
        `}</style>
      </div>
    );
  }
}
