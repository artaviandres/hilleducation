import React from 'react';
import MdClose from 'react-icons/lib/md/close';
import FaDanger from 'react-icons/lib/fa/exclamation-triangle';
import FaCheck from 'react-icons/lib/fa/check';
import firebase from 'firebase';
import Input from './Input';
import Button from './Button';
import Logo from '../assets/images/logo-hea.svg';
import colors from '../variables';
import fire from '../fire';

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
    this.logout = this.logout.bind(this);
    this.resetPassword = this.resetPassword.bind(this);
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
        }
      });
      loginPromise.then((response) => console.log("logged in!!!!", response));
    } else {
      this.setState({
        showError: true,
        error: 'Wrong email syntax'
      });
    }
  }

  logout() {
    const auth = firebase.auth();
    auth.signOut();
    this.setState({ email: '', password: '', user: {} });
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
              error: e.message
            });
            break;
          case 'auth/user-not-found':
            this.setState({
              error: 'The user does not exist in our database. Please contact hill@education.com for further instructions.'
            });
            break;
        }
    })
  }
  
  render() {
    return (
      <div className="modal__container">
          {this.state.modalType === 'login'
            ? <div className="modal__wrapper">
                <a className="modal__close" onClick={this.props.onToggleModal}><MdClose size={20} /></a>
                <h1>Welcome</h1>
                <img src={Logo} width="250px" />
                <form onSubmit={this.submitLogin} style={{ width: '340' + 'px' }}>
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
                  <Button width="337px" marginTop="25px">
                    LOG IN
                  </Button>
                </form>
                <div className="forgot__container">
                  <p>Forgot Password?</p>
                  <a onClick={() => this.setState({ modalType: 'forgot' })}>Click Here</a>
                </div>
              </div>
            : <div className="modal__wrapper--forgot">
                <h1>Forgot Password?</h1>
                <form onSubmit={this.resetPassword} style={{ width: '340' + 'px' }}>
                  <Input
                    type="text"
                    id="input-email-forgot"
                    name="Email"
                    change={(e) => this.setState({ email: e.target.value })}
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
                  <Button width="337px" marginTop="25px">
                    SUBMIT
                  </Button>
                </form>
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
            height: 500px;
            width: 450px;
            background-color: rgba(255, 255, 255, 0.9);
            border-radius: 10px;
            box-shadow: 0 0 2px #000;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }

          .modal__wrapper--forgot h1 {
            margin-top: 0;
          }

          .danger__container {
            display: flex;
            margin-top: 25px;
            color: ${colors.inputFontColor};
            width: 340px;
          }

          .danger__icon {
            width: 20%;
            display: flex;
            align-items: center;
            justify-content: flex-end;
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
            margin: 25px 0;
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
        `}</style>
      </div>
    );
  }
}