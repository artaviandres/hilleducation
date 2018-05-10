import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import firebase from 'firebase';
import Button from './Button';
import Modal from './Modal';
import Logo from '../assets/images/logo-hea.svg';
import colors from '../variables';
import * as UserActions from '../actions/user';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
    };
  }

  openModal = () => {
    this.setState({
      showModal: true,
    });
  }

  closeModal = () => {
    this.setState({
      showModal: false,
    });
  }

  logout = () => {
    this.props.actions.logout();
  }

  checkUserStatus = () => {
    if(this.props.user && this.props.user.length === 0) {
      return <Button click={() => this.openModal()} reverse={true}>LOG IN</Button>
    } else {
      return <Button click={() => this.logout()} reverse={true}>LOGOUT</Button>
    }
  }
  render() {
    return (
      <div className="header">
        <div className="header__container">
          <a href="/" style={{ border: 'none'}}><img src={Logo} width="200px" /></a>
          <a href="/" style={{ border: 'none'}} className={this.props.selected === "home" ? "selected" : null}>Home</a>
          <a href="/aboutUs" className={this.props.selected === "aboutUs" ? "selected" : null}>About us</a>
          <a href="/contactUs" className={this.props.selected === "contactUs" ? "selected" : null}>Contact us</a>
          <a href="/associates" className={this.props.selected === "associates" ? "selected" : null}>HEA Associates</a>
          <a href="/admin" className={this.props.selected === "admin" ? "selected" : null}>Administrator</a>
          {this.checkUserStatus()}
        </div>
        <Modal
          show={this.state.showModal}
          onToggleModal={() => this.closeModal()}
          onLogin={this.props.actions.addUser}
        />
        <style jsx>{`
          .header__container {
            display: flex;
            width: 100%;
            height: 100px;
            justify-content: center;
            align-items: center;
          }
          
          a {
            cursor: pointer;
            font-weight: 500;
            color: ${colors.black};
            padding-right: 20px;
            padding-left: 20px;
            border-left: 1px solid ${colors.gray};
          }
          
          a:hover {
            color: ${colors.blue};
            text-decoration: none;
          }

          .selected {
            color: ${colors.blue};
          }
        `}</style>
      </div>
    );
  }
}

function mapStatetoProps(state, props) {
  return {
    user: state.user
  }
}

function mapDispatchtoProps(dispatch) {
  return {
    actions: bindActionCreators(UserActions, dispatch)
  }
}

export default connect(mapStatetoProps, mapDispatchtoProps)(Header);
