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
                <div><span>Hi!</span><br />My name is Humaid khan,  I am an enthusiastic Full Stack Developer that loves developing with the latest trends 
                <br />If you have any projects that I can help work on or any new technology you found interesting
                <br />Please leave me a message
                <br />Email:<a target="_blank" href="mailto:humaidk2@gmail.com">humaidk2@gmail.com</a>
                <br />Linkedin:<a target="_blank" href="linkedin.com/in/humaidk2">linkedin.com/in/humaidk2</a>
                <br />Github:<a target="_blank" href="github.com/humaidk2">github.com/humaidk2</a>
                </div>
              </div>
              <div className="about-logo"><img src="assets/logo9.png" /></div>
            </div>);
  }
}