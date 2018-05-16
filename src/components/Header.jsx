import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Button from './Button';
import Modal from './Modal';
import Logo from '../assets/images/logo-hea.svg';
import LogoWhite from '../assets/images/logo-white.svg'
import colors from '../variables';
import * as UserActions from '../actions/user';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      admin: false,
      user: [],
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
    this.setState({
      admin: false,
    });
  }

  componentDidMount() {
    if (this.props.user.length > 0 && this.props.admins) {
      this.props.admins.forEach(item => {
        if (item === this.props.user[0].uid) {
          this.setState({
            admin: true,
          });
        }
      })
    }
  }

  checkUserStatus = () => {
    if(this.props.user && this.props.user.length === 0) {
      return <Button click={() => this.openModal()} type={this.props.selected === 'home' ? 'contactBlock' : 'reversed'}>LOG IN</Button>
    } else {
      return <Button click={() => this.logout()} type={this.props.selected === 'home' ? 'contactBlock' : 'reversed'}>LOGOUT</Button>
    }
  }

  render() {
    return (
      <div className="header">
        <div className="header__container">
          <a href="/" style={{ border: 'none'}}><img src={this.props.transparent ? LogoWhite : Logo} width="200px" alt="logo" /></a>
          <a href="/" style={{ border: 'none'}} className={this.props.selected === "home" ? "selected" : null}>Home</a>
          <a href="/aboutUs" className={this.props.selected === "aboutUs" ? "selected" : null}>About us</a>
          <a href="/contactUs" className={this.props.selected === "contactUs" ? "selected" : null}>Contact us</a>
          {this.props.user.length > 0 ? <a href="/associates" className={this.props.selected === "associates" ? "selected" : null}>HEA Associates</a> : null}
          {this.state.admin === true ? <a href="/admin" className={this.props.selected === "admin" ? "selected" : null}>Administrator</a> : null}
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
            background-color: ${this.props.transparent ? 'transparent' : 'white'};
            z-index: 1000;
          }
          
          a {
            cursor: pointer;
            font-weight: 500;
            color: ${this.props.selected === 'home' ? colors.white : colors.black};
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
    user: state.user,
    admins: state.admins,
  }
}

function mapDispatchtoProps(dispatch) {
  return {
    actions: bindActionCreators(UserActions, dispatch)
  }
}

export default connect(mapStatetoProps, mapDispatchtoProps)(Header);
