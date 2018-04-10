import React from 'react';
import firebase from 'firebase';
import fire from '../fire';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      accounts: [],
      email: '',
      password: '',
      user: {},
    }; // <- set up react state
    this.submitRegister = this.submitRegister.bind(this);
    this.submitLogin = this.submitLogin.bind(this);
    this.checkStatus = this.checkStatus.bind(this);
    this.logout = this.logout.bind(this);
  }
  // componentWillMount(){
  //   /* Create reference to accounts in Firebase Database */
  //   let accountsRef = fire.database().ref('accounts').orderByKey().limitToLast(100);
  //   accountsRef.on('child_added', snapshot => {
  //     /* Update React state when account is added at Firebase Database */
  //     let account = { email: snapshot.val().email, passwordChanged: snapshot.val().passwordChanged, id: snapshot.key };
  //     this.setState({ accounts: [account].concat(this.state.accounts) });
  //   })
  // }
  // addAccount(e){
  //   e.preventDefault(); // <- prevent form submit from reloading the page
  //   /* Send the account to Firebase */
  //   const tempPass = this.uuidv4();
  //   fire.database().ref('accounts').push( { email: this.inputEl.value, pass: tempPass, passwordChanged: false } );
  //   this.inputEl.value = ''; // <- clear the input
  // }

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
    const loginPromise = auth.signInWithEmailAndPassword(this.state.email, this.state.password);
    loginPromise.catch((e) => console.log(e));
    loginPromise.then((response) => console.log("logged in!!!!", response));
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

  render() {
    return (
      <div>
        <form onSubmit={this.submitRegister}>
          <input type="text" onChange={(e) => this.setState({ email: e.target.value })} />
          <input type="submit" />
        </form>
        <form onSubmit={this.submitLogin}>
          <input type="text" onChange={(e) => this.setState({ email: e.target.value })} />
          <input type="password" onChange={(e) => this.setState({ password: e.target.value })} />
          <input type="submit" />
        </form>

        <button onClick={() => this.logout()}>
          logout
        </button>
      </div>
    );
  }
}

export default Login;
