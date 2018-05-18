import React from 'react';
import MdEye from 'react-icons/lib/md/remove-red-eye';
import colors from '../variables';

export default class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      type: this.props.type,
    };
    this.toggleVisibility = this.toggleVisibility.bind(this);
  }

  toggleVisibility() {
    const input = document.getElementById(this.props.id);
    if(input.type === 'password') {
      input.type = 'text';
    } else {
      input.type = 'password';
    }
  }
  
  render() {
    const { type } = this.state;
    return (
      <div className="input__container" style={{ marginTop: this.props.marginTop }}>
        <input type={type} id={this.props.id} maxLength={this.props.maxLength} onChange={this.props.change} required={this.props.required} placeholder={this.props.placeholder} />

        {type === 'password' ? <a onClick={() => this.toggleVisibility()}><MdEye size={20} color={colors.inputGray} /></a> : null }
        <style>{`
          .input__container {
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }

          .input__container input {
            background-color: #D6D6D6;
            color: ${colors.inputGray};
            border: none;
            margin-bottom: 20px;
            padding-left: 20px;
            width: 100%;
            height: 40px;
          }

          .input__container a {
            padding: 0;
            border: 0;
            position: absolute;
            margin-top: 7px;
            margin-left: 240px;
          }

          input:focus {
            outline: none;
          }
        `}</style>
      </div>
    );
  }
}