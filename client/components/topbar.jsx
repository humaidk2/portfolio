import React from 'react';

export default class topbar extends React.Component {
  constructor(props) {
    super(props);
    this.count = 0;
  }
  componentDidMount() {
    $('.app').scroll(function() {
      console.log($('.app').scrollTop() );
      console.log(this.count);
      if($('.app').scrollTop() !== 0 && this.count === 0) {
        $('.topbar').toggleClass('connect');
        this.count = 1;
      } else if($('.app').scrollTop() === 0 && this.count === 1){
        $('.topbar').toggleClass('connect');
        this.count = 0;
      }
    }.bind(this))
  }
  
  render () {
    return (
            <div className="topbar">
              <div className="pic">
                <img id="profile" src="assets/profile.JPG" />
              </div>
              <div className="name">Humaid Khan</div>
              <div className="links"> 
                <div className="link">
                  <img className="image" src='assets/github1.png' />
                  <a href="http://github.com/humaidk2">https://github.com/humaidk2</a>
                </div>
                <div className="link">
                  <img className="image"  src='assets/linkedin1.png' />
                  <a href="http://github.com/humaidk2">https://www.linkedin.com/in/humaidk2/</a>
                </div>
                <div className="link">
                  <img className="image"  src='assets/twitter3.png' />
                  <a href="http://github.com/humaidk2">https://twitter.com/humaidk2</a>
                </div>
              </div>
            </div>);
  }
}