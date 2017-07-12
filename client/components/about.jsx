import React from 'react';

export default class About extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render () {
    return (
            <div className="about">
              <div className="about-photo"><img src="assets/profile2.jpg" /></div>
              <div className="about-bio">
                <div>Humaid Khan is a curious and enthusiastic Software engineer that is keen on developing with the latest technology
                </div>
              </div>
              <div className="about-logo"><img src="assets/logo9.png" /></div>
            </div>);
  }
}