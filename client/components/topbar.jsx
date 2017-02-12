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
                <img src="assets/profile.jpg" />
              </div>
              <div className="name">Humaid Khan</div>
            </div>);
  }
}