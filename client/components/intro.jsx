import React from 'react';
import Introduction from './introduction';

export default class Intro extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render () {
    return (
            <div className="intro">
            <Introduction />
            </div>);
  }
}