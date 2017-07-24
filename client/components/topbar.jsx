import React from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';
import 'typeit';

export default class topbar extends React.Component {
  constructor(props) {
    super(props);
    this.count = 0;
    this.state = {
      github: '',
      linkedin: '',
      twitter: '',
      px: '',
      copymail: '',
      mail: ''
    }
    this.hover = this.hover.bind(this);
  }
  componentDidMount() {
    document.addEventListener('scroll', function (event) {
      if($('body').scrollTop() !== 0 && this.count === 0) {
        $('.topbar').toggleClass('connect');
        this.count = 1;
      } else if($('body').scrollTop() === 0 && this.count === 1){
        $('.topbar').toggleClass('connect');
        this.count = 0;
      }
    }.bind(this), true);
  }

  hover(e) {
    let link = e.target.src;
    let obj = {};
    let iconName = link.slice(link.indexOf('assets/') + 7, link.indexOf('-'));
    if(this.state[iconName].length === 0) {
      obj[iconName] = 'topbar-link-grey';
    } else {
      obj[iconName] = '';
    }
    this.setState(obj);
  }

  
  render () {
    return (
            <div className="topbar">
              <div className="pic"><img className="picture" src="assets/profile.jpg" /></div>
              <div className="nameContainer">
                <div className="topbar-headers" onClick={this.props.clickToScroll.bind(this,'.home')}><span>Home</span></div>
                <div className="topbar-headers" onClick={this.props.clickToScroll.bind(this,'#project-header')}><span>Projects</span></div>
                <div className="topbar-headers" onClick={this.props.clickToScroll.bind(this,'#resume-skills-header')}><span>Resume/Skills</span></div>
                <img className="name" src="assets/logo7.svg" />
                <div className="topbar-headers" onClick={this.props.clickToScroll.bind(this,'#photography-header')}><span>Photography</span></div>
                <div className="topbar-headers" onClick={this.props.clickToScroll.bind(this,'#contact-header')}><span>Contact</span></div>
                <div className="topbar-headers" onClick={this.props.clickToScroll.bind(this,'#about-header')}><span>About</span></div>
              </div>
              <div className="all-links">
                <div className="links">
                  <div className="icon"><a target="_blank" className={this.state.github} href="https://github.com/humaidk2"><img onMouseOver={this.hover} onMouseLeave={this.hover} src='assets/github-black.png' /></a></div>
                  <div className="icon"><a target="_blank" className={this.state.linkedin} href="https://linkedin.com/in/humaidk2"><img onMouseOver={this.hover} onMouseLeave={this.hover} src='assets/linkedin-black.png' /></a></div>
                  <div className="icon"><a target="_blank" className={this.state.twitter} href="https://twitter.com/humaidk2"><img onMouseOver={this.hover} onMouseLeave={this.hover} src='assets/twitter-black.png' /></a></div>
                </div>
                <div className="links">
                  <div className="icon"><a target="_blank" className={this.state.px} href="https://500px.com/humaidk2"><img onMouseOver={this.hover} onMouseLeave={this.hover} src='assets/px-black.png' /></a></div>
                  <div className="icon"><CopyToClipboard text="humaidk2@gmail.com"><a className={this.state.copymail} ><img onMouseOver={this.hover} onMouseLeave={this.hover} src='assets/copymail-black.png' /></a></CopyToClipboard></div>
                  <div className="icon"><a className={this.state.mail} href="mailto:humaidk2@gmail.com"><img onMouseOver={this.hover} onMouseLeave={this.hover} src='assets/mail-black.png' /></a></div>
                </div>
              </div>  
            </div>);
  }
}
