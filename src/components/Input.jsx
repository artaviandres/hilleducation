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
    let counter = 0;
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
        <span>{this.props.name}</span>
        <input type={type} id={this.props.id} maxLength={this.props.maxLength} onChange={this.props.change} required={this.props.required} />

        {type === 'password' ? <a onClick={() => this.toggleVisibility()}><MdEye size={20} color={colors.inputGray} /></a> : null }
        <style>{`
          .input__container {
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }

          .input__container input {
            width: 95%;
            background-color: transparent;
            border: 0;
            border-bottom: 2px solid ${colors.inputGray};
            font-size: 18px;
            color: ${colors.inputFontColor};
            height: 45px;
            margin: 0 auto;
          }

          .input__container span {
            color: ${colors.inputGray};
            margin-left: 9px;
            font-weight: 100;
          }

          .input__container a {
            padding: 0;
            border: 0;
            position: absolute;
            margin-top: 33px;
            margin-left: 300px;
          }

          input:focus {
            outline: none;
          }
        `}</style>
      </div>
    );
  }
}