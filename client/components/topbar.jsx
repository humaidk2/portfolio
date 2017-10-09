import React from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';
import 'typeit';

export default class topbar extends React.Component {
  constructor(props) {
    super(props);
    this.count = 0;
    this.state = {
      scrolled: 'home'
    }
  }
  componentDidMount() {
    document.addEventListener('scroll', function (event) {
      if($('html, body').scrollTop() !== 0 && this.count === 0) {
        $('.topbar').toggleClass('connect');
        this.count = 1;
      } else if($('html, body').scrollTop() === 0 && this.count === 1){
        $('.topbar').toggleClass('connect');
        this.count = 0;
      }
      const offsetHeader = 50;
      if($('html, body').scrollTop() > $('.home').offset().top - offsetHeader && this.state.scrolled !== 'home') {
        this.setState({scrolled: 'home'});
      }
      if($('html, body').scrollTop() > $('#project-header').offset().top - offsetHeader && this.state.scrolled !== 'projects') {
        this.setState({scrolled: 'projects'});
      }
      if($('html, body').scrollTop() > $('#resume-skills-header').offset().top - offsetHeader && this.state.scrolled !== 'skills') {
        this.setState({scrolled: 'skills'});
      }
      if($('html, body').scrollTop() > $('#photography-header').offset().top - offsetHeader && this.state.scrolled !== 'photos') {
        this.setState({scrolled: 'photos'});
      }
      if($('html, body').scrollTop() > $('#contact-header').offset().top - offsetHeader && this.state.scrolled !== 'contact') {
        this.setState({scrolled: 'contact'});
      }
    }.bind(this), true);
  }

  
  render () {
    return (
            <div className="topbar">
              <div className="nameContainer">
                <div className="name"><img src="assets/logo7.png" /></div>
                <div className={this.state.scrolled === 'home' ? "btn btn-xl topbar-new-headers": "topbar-headers"} onClick={this.props.clickToScroll.bind(this,'.home')}><span>Home</span></div>
                <div className={this.state.scrolled === 'projects' ? "btn btn-xl topbar-new-headers": "topbar-headers"} onClick={this.props.clickToScroll.bind(this,'#project-header')}><span>Projects</span></div>
                <div className={this.state.scrolled === 'skills' ? "btn btn-xl topbar-new-headers": "topbar-headers"} onClick={this.props.clickToScroll.bind(this,'#resume-skills-header')}><span>Skills</span></div>
                <div className={this.state.scrolled === 'photos' ? "btn btn-xl topbar-new-headers": "topbar-headers"} onClick={this.props.clickToScroll.bind(this,'#photography-header')}><span>Photography</span></div>
                <div className={this.state.scrolled === 'contact' ? "btn btn-xl topbar-new-headers": "topbar-headers"} onClick={this.props.clickToScroll.bind(this,'#contact-header')}><span>Contact</span></div>
              </div>
              <div className="all-links">
                <div className="icon"><a target="_blank" className="icon-link fa-stack fa-lg" href="https://angel.co/humaidk2"><i className="fa fa-stack-1x fa-angellist fa-inverse"></i></a></div>
                <div className="icon"><a target="_blank" className="icon-link fa-stack fa-lg" href="https://github.com/humaidk2"><i className="fa fa-stack-1x fa-github fa-inverse"></i></a></div>
                <div className="icon"><a target="_blank" className="icon-link fa-stack fa-lg" href="https://linkedin.com/in/humaidk2"><i className="fa fa-stack-1x fa-linkedin fa-inverse"></i></a></div>
                <div className="icon"><a target="_blank" className="icon-link fa-stack fa-lg" href="https://twitter.com/humaidk2"><i className="fa fa-stack-1x fa-twitter fa-inverse"></i></a></div>
                <div className="icon"><a target="_blank" className="icon-link fa-stack fa-lg" href="https://500px.com/humaidk2"><i className="fa fa-stack-1x fa-500px fa-inverse"></i></a></div>
                <div className="icon"><CopyToClipboard text="humaidk2@gmail.com"><a className="icon-link fa-stack fa-lg" ><i className="fa fa-stack-1x fa-clipboard fa-inverse"></i></a></CopyToClipboard></div>
                <div className="icon"><a className="icon-link fa-stack fa-lg" href="mailto:humaidk2@gmail.com"><i className="fa fa-stack-1x fa-envelope fa-inverse"></i></a></div>
              </div>
            </div>);
  }
}
