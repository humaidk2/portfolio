import React from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';
import 'typeit';

export default class topbar extends React.Component {
  constructor(props) {
    super(props);
    this.count = 0;
    this.state = {
      github: 'assets/github-black.png',
      linkedin: 'assets/linkedin-black.png',
      twitter: 'assets/twitter-black.png',
      px: 'assets/px-black.png',
      copymail: 'assets/copymail-black.png',
      mail: 'assets/mail-black.png'
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
    for(let iconName in this.state) {
      let res = link.split(iconName + '-');
      if(res.length !== 1) {
        if(res[1] === 'black.png') {
          obj[iconName] = 'assets/' + iconName + '-grey.png';
        } else if(res[1] === 'grey.png') {
          obj[iconName] = 'assets/' + iconName + '-black.png';
        }
      }
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
                  <div className="icon"><a target="_blank" href="https://github.com/humaidk2"><img onMouseOver={this.hover} onMouseLeave={this.hover} src={this.state.github} /></a></div>
                  <div className="icon"><a target="_blank" href="https://linkedin.com/in/humaidk2"><img onMouseOver={this.hover} onMouseLeave={this.hover} src={this.state.linkedin} /></a></div>
                  <div className="icon"><a target="_blank" href="https://twitter.com/humaidk2"><img onMouseOver={this.hover} onMouseLeave={this.hover} src={this.state.twitter} /></a></div>
                </div>
                <div className="links">
                  <div className="icon"><a target="_blank" href="https://500px.com/humaidk2"><img onMouseOver={this.hover} onMouseLeave={this.hover} src={this.state.px} /></a></div>
                  <div className="icon"><CopyToClipboard text="humaidk2@gmail.com"><a ><img onMouseOver={this.hover} onMouseLeave={this.hover} src={this.state.copymail} /></a></CopyToClipboard></div>
                  <div className="icon"><a href="mailto:humaidk2@gmail.com"><img onMouseOver={this.hover} onMouseLeave={this.hover} src={this.state.mail} /></a></div>
                </div>
              </div>  
            </div>);
  }
}
