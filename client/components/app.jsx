import React from 'react';
import Topbar from './topbar';
import Projects from './projects';
import Home from './home';
import Resume from './resume';
import Photos from './photos';
import Contact from './contact';
import About from './about';
import Skills from './skills';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.clickToScroll = this.clickToScroll.bind(this);
  }

  clickToScroll( header, e){
    $('html, body').animate(
    {
      scrollTop: $(header).offset().top - 135
    }, 500);
  }
  
  render () {
    return (
            <div className="app">
              <Topbar clickToScroll={this.clickToScroll}/>
              <Home clickToScroll={this.clickToScroll} />
              <div id="project-header" className="headers"><div>Projects</div></div>
              <Projects />
              <div id="resume-header" className="headers"><div>Resume</div></div>
              <Resume />
              <div id="skills-header" className="headers"><div>Skills</div></div>
              <Skills />
              <div id="photography-header" className="headers"><div>Photography</div></div>
              <Photos />
              <div id="contact-header" className="headers"><div>Contact Me</div></div>
              <Contact />
              <div id="about-header" className="headers"><div>About Me</div></div>
              <About />
            </div>);
  }
}