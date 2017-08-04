import React from 'react';

export default class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      message: '',
      nameRequired: 'contact-required',
      emailRequired: 'contact-required',
      messageRequired: 'contact-required',
      sent: false
    };
    this.changeHandle = this.changeHandle.bind(this);
    this.submitHandle = this.submitHandle.bind(this);
    this.enterHandle = this.enterHandle.bind(this);
  }
  changeHandle(e){
    let obj = {
      nameRequired: '',
      emailRequired: '',
      messageRequired: ''
    };
    obj[e.target.name] = e.target.value;
    if(this.state.name.trim().length === 0 || this.state.email.trim().length === 0 || this.state.message.trim().length === 0 || !this.validateEmail(this.state.email) || !this.validateName(this.state.name)) {
      if(this.state.name.trim().length === 0) {
        obj['nameRequired'] = 'contact-required';
      }
      if(this.state.email.trim().length === 0) {
        obj['emailRequired'] = 'contact-required';
      }
      if(this.state.message.trim().length === 0) {
        obj['messageRequired'] = 'contact-required';
      }
      if(!this.validateEmail(this.state.email)) {
        obj['emailRequired'] = 'contact-required';
      } 
      if(!this.validateName(this.state.name)) {
        obj['nameRequired'] = 'contact-required';
      }
    }
    this.setState(obj);
  } 
  validateEmail(email) {
    const re =  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }
  validateName(name) {
    const re = /^[a-z ,.'-]+$/i
    return re.test(name);
  }
  submitHandle(){
    let obj = {
      nameRequired: '',
      emailRequired: '',
      messageRequired: ''
    };
    if(this.state.name.trim().length === 0 || this.state.email.trim().length === 0 || this.state.message.trim().length === 0 || !this.validateEmail(this.state.email) || !this.validateName(this.state.name)) {
      if(this.state.name.trim().length === 0) {
        obj['nameRequired'] = 'contact-required';
      }
      if(this.state.email.trim().length === 0) {
        obj['emailRequired'] = 'contact-required';
      }
      if(this.state.message.trim().length === 0) {
        obj['messageRequired'] = 'contact-required';
      }
      if(!this.validateEmail(this.state.email)) {
        obj['emailRequired'] = 'contact-required';
      } 
      if(!this.validateName(this.state.name)) {
        obj['nameRequired'] = 'contact-required';
      }
      this.setState(obj);
    }else {
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
      }).then((response)=>{
        console.log(response.status);
        if(response.status === 200) {
          obj['sent'] = true;
          this.setState(obj);
          setTimeout(function(){this.setState({'sent': false})}.bind(this), 3000);
        }
      });
    }

  }
  enterHandle(e) {
    if(e.key === 'Enter') {
      this.submitHandle();
    } else{
      this.changeHandle(e);
    }
  }
  render () {
    return (
            <div className="contact">
              <div className="form">
                <div className="form-input">
                    <div className="contact-name">
                      <div className="contact-title">Name:</div>
                      <input name="name" type="text" onKeyUp={this.enterHandle} onKeyPress={this.changeHandle} className={this.state.nameRequired}/>
                    </div>
                    <div className="contact-email">
                      <div className="contact-title">Email:</div>
                      <input name="email" type="text" onKeyUp={this.enterHandle} onKeyPress={this.changeHandle} className={this.state.emailRequired}/>
                    </div>
                    <div className="contact-message">
                      <div className="message-box-title"><span>Message:</span> <span className="message-required">
                      {this.state.name.length  && this.state.email.length  && this.state.message.length  && !this.state.nameRequired.length && !this.state.emailRequired.length && !this.state.messageRequired.length ? '' : 
                      ('Please add a ' + (this.state.nameRequired.length  ? 'valid name, ': '') + 
                        (this.state.emailRequired.length ? 'valid email, ': '') + 
                        (this.state.messageRequired.length ? 'valid message ': ''))
                      } </span>
                      <span className="message-sent">
                        {this.state.sent ? 'Sent' : ''}</span></div>
                      <textarea id="message-box" className={this.state.messageRequired} name="message" onKeyPress={this.changeHandle} />
                    </div>
                </div>
                <div className="form-submit"><div className="btn btn-xl" onClick={this.submitHandle}>Submit</div></div>
              </div>
            </div>);
  }
}