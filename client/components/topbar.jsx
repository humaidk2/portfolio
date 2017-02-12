import React from 'react';

export default class topbar extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    $('.app').scroll(function() {
      console.log($('.app').scrollTop() );
      if($('.app').scrollTop() === 0) {
        $('.topbar').css('background-color', 'steelblue');
      } else {
        $('.topbar').css('background-color', 'black');
      }
    })
  }
  
  render () {
    return (
            <div className="topbar">
              <div className="pic">
                <img src="assets/profile.jpg" />
              </div>
            </div>);
  }
}