import React from 'react';
import * as firebase from 'firebase';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as UserActions from '../actions/user';

import Header from './Header';

class Admin extends React.Component {
  state = {
    existingUsers: [],
  };

  componentDidMount() {
    const andres = firebase.auth().currentUser;
    if(andres) {
      console.log("sure! here's your user: ", andres);
    } else {
      console.log("no user logged!");
    }
  }

  render() {
    return (
      <div>
        <Header selected="admin" />
        Hey! here are the existing users:
        <table></table>
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

export default connect(mapStatetoProps, mapDispatchtoProps)(Admin);