import React from 'react';
import fire from '../fire';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = { accounts: [] }; // <- set up react state
  }
  componentWillMount(){
    /* Create reference to accounts in Firebase Database */
    let accountsRef = fire.database().ref('accounts').orderByKey().limitToLast(100);
    accountsRef.on('child_added', snapshot => {
      /* Update React state when account is added at Firebase Database */
      let account = { email: snapshot.val().email, passwordChanged: snapshot.val().passwordChanged, id: snapshot.key };
      this.setState({ accounts: [account].concat(this.state.accounts) });
    })
  }
  addAccount(e){
    e.preventDefault(); // <- prevent form submit from reloading the page
    /* Send the account to Firebase */
    const tempPass = this.uuidv4();
    fire.database().ref('accounts').push( { email: this.inputEl.value, pass: tempPass, passwordChanged: false } );
    this.inputEl.value = ''; // <- clear the input
  }

  uuidv4() {
    return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
      (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
    )
  }

  render() {
    return (
      <div>
        <form onSubmit={this.addAccount.bind(this)}>
          <input type="text" ref={ el => this.inputEl = el }/>
          <input type="submit"/>
          <ul>
            { /* Render the list of accounts */
              this.state.accounts.map( account => <li key={account.id}>{account.email}</li> )
            }
          </ul>
        </form>
      </div>
    );
  }
}

export default Login;
