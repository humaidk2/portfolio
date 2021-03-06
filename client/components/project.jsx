import React from 'react';

export default class Project extends React.Component {
  constructor(props) {
    super(props);
    this.hoverImage = this.hoverImage.bind(this);
    this.state={
    	selected: "assets/" + this.props.projectName + "1.png"
    };
  }
  hoverImage(selected){
  	this.setState({selected: selected});
  }
  
  render () {
    return (
            <div className="project">
            	<div className="project-card" >
	            	<a className="project-image" target="_blank" href={this.props.projectLink.length ? this.props.projectLink: this.props.githubLink}>
	            		<img src={this.state.selected} />
	            	</a>
	            	<div className="project-photos">
	            		<div><img src={"assets/" + this.props.projectName + "1.png"} onMouseEnter={this.hoverImage.bind(this, 'assets/' + this.props.projectName + '1.png')}/></div>
	            		<div><img src={"assets/" + this.props.projectName + "2.png"} onMouseEnter={this.hoverImage.bind(this, 'assets/' + this.props.projectName + '2.png')}/></div>
	            		<div><img src={"assets/" + this.props.projectName + "3.png"} onMouseEnter={this.hoverImage.bind(this, 'assets/' + this.props.projectName + '3.png')}/></div>
	            		<div><img src={"assets/" + this.props.projectName + "4.png"} onMouseEnter={this.hoverImage.bind(this, 'assets/' + this.props.projectName + '4.png')}/></div>
	            	</div>
	            </div>
            	<div className="project-info">
	            	<a target="_blank" className="project-title-link" href={this.props.projectLink.length ? this.props.projectLink: this.props.githubLink}>
                  <div className="project-title">
  	            		<div>{this.props.projectName}</div>
  	            	</div>
                </a>
	            	<div className="project-details">
                  <div className="project-summary">
                    {this.props.functionality}<br />
                    My accomplishments:<br />
                    -{this.props.point1}<br />
                    -{this.props.point2}<br />
                    -{this.props.point3}<br />
                  </div>
                  <div className="project-links">
                    {this.props.projectLink.length !==0 && <a target="_blank" href={this.props.projectLink} className="project-link btn btn-primary btn-lg">Project Link</a>}
                    <a target="_blank" href={this.props.githubLink} className="project-link btn btn-primary btn-lg" >Github Link</a>
                  </div>
                  <div className="tech-stack">Tech Stack: {this.props.techStack}</div>
	            	</div> 
            	</div>
            </div>);
  }
}