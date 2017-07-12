import React from 'react';

export default class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      message: ''
    };
    this.changeHandle = this.changeHandle.bind(this);
    this.submitHandle = this.submitHandle.bind(this);
  }
  changeHandle(e){
    this.setState({[e.target.name]: e.target.value})
  }
  submitHandle(){
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
  render () {
    return (
            <div className="contact">
              <div className="form">
                <div className="form-input">
                    <div>
                      <div>Name:</div>
                      <textarea name="name" onChange={this.changeHandle}/>
                    </div>
                    <div>
                      <div>Email:</div>
                      <textarea name="email" onChange={this.changeHandle}/>
                    </div>
                    <div id="message-box">
                      <div>Message: </div>
                      <textarea id="message-box" name="message" onChange={this.changeHandle}/>
                    </div>
                </div>
                <div className="form-submit"><div onClick={this.submitHandle}>Submit</div></div>
              </div>
            </div>);
  }
}