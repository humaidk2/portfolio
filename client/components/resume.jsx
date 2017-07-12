import React from 'react';

export default class Resume extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render () {
    return (
            <div className="resume">
            	<iframe src="https://drive.google.com/file/d/0BzwPeY3JU8UMYm9VMTJnMVFVQ0U/preview" width="70%" height="80%"></iframe>
            	<a className="resume-button" href= "assets/resume.pdf" download>Download Resume</a>
            </div>);
  }
}