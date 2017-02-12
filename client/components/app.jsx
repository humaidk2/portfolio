import React from 'react';
import Topbar from './topbar';
import Projects from './projects';
import Intro from './intro';
import Footer from './footer';

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render () {
    return (
            <div className="app">
              <Topbar />
              <Intro />
              <Projects />
              <Footer />
            </div>);
  }
}