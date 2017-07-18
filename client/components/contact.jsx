import React from 'react';

export default class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      message: '',
      nameRequired: '',
      emailRequired: '',
      messageRequired: ''

    };
    this.changeHandle = this.changeHandle.bind(this);
    this.submitHandle = this.submitHandle.bind(this);
  }
  changeHandle(e){
    this.setState({[e.target.name]: e.target.value})
  }
  submitHandle(){
    var obj = {
      nameRequired: '',
      emailRequired: '',
      messageRequired: ''
    };
    if(this.state.name.length === 0 || this.state.email.length === 0 || this.state.message.length === 0) {
      if(this.state.name.length === 0) {
        obj['nameRequired'] = 'contact-required';
      }
      if(this.state.email.length === 0) {
        obj['emailRequired'] = 'contact-required';
      }
      if(this.state.message.length === 0) {
        obj['messageRequired'] = 'contact-required';
      }
    } else {
      fetch('/contact/', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: this.state.name,
          email: this.state.email,
          message: this.state.message

        })
      });
    }
    this.setState(obj);

  }
  render () {
    return (
            <div className="contact">
              <div className="form">
                <div className="form-input">
                    <div className="contact-name">
                      <div className="contact-title">Name:</div>
                      <textarea name="name" className={this.state.nameRequired} onChange={this.changeHandle}/>
                    </div>
                    <div className="contact-email">
                      <div className="contact-title">Email:</div>
                      <textarea name="email" className={this.state.emailRequired} onChange={this.changeHandle}/>
                    </div>
                    <div className="contact-message">
                      <div className="message-box-title"><span>Message:</span> <span className="message-required">{this.state.name.length !== 0 && this.state.email.length !== 0 && this.state.message.length !== 0 ? '' : ('Please add a ' + (!this.state.name.length ? 'name ': '') + (!this.state.email.length ? 'email ': '') + (!this.state.message.length ? 'message ': ''))} </span></div>
                      <textarea id="message-box" className={this.state.messageRequired} name="message" onChange={this.changeHandle}/>
                    </div>
                </div>
                <div className="form-submit"><div onClick={this.submitHandle}>Submit</div></div>
              </div>
            </div>);
  }
}