import React from 'react';
import Topbar from './topbar';
import Projects from './projects';
export default class App extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render () {
    return (
            <div className="app">
            <Topbar />
            <Projects />
            </div>);
  }
}