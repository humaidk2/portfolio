import React from 'react';

export default class SkillsBox extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render () {
    return (<div className="skills-box">
              <div className={"skills-circle skill-" + this.props.skillType}><div>{this.props.icon}</div></div>
              <div className="skills-name">{this.props.skill}</div>
            </div>);
  }
}