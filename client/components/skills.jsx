import React from 'react';
import SkillsBox from './skillsbox';
import LegendBox from './legendbox';
import { CSSTransitionGroup } from 'react-transition-group';

export default class Skills extends React.Component {
  constructor(props) {
    super(props);
    this.skills = [['front-end', ['Angular.js', 'Babylon.js', 'Jquery', 'React.js', 'React-Native']],
                ['back-end', ['Authentication', 'Node/Express', 'Restful API']],
                ['databases', ['MYSQL', 'MongoDB', 'Mongoose', 'Sequelize', 'Sqlite3']],
                ['languages', ['ES6 Javascript', 'C', 'HTML5', 'CSS3']],
                ['libraries', ['Jquery', 'Underscore', 'CannonJS']],
                ['others', ['Agile/Scrum', 'Git/Github', 'Gulp/Grunt', 'Mocha/Chai', 'Webpack']]];
    this.state = {
      skills:  [['front-end', ['Angular.js', 'Babylon.js', 'Jquery', 'React.js', 'React-Native']],
                ['back-end', ['Authentication', 'Node/Express', 'Restful API']],
                ['databases', ['MYSQL', 'MongoDB', 'Mongoose', 'Sequelize', 'Sqlite3']],
                ['languages', ['ES6 Javascript', 'C', 'HTML5', 'CSS3']],
                ['libraries', ['Jquery', 'Underscore', 'CannonJS']],
                ['others', ['Agile/Scrum', 'Git/Github', 'Gulp/Grunt', 'Mocha/Chai', 'Webpack']]],

      selected: ['front-end', 'back-end', 'databases', 'languages', 'libraries', 'others']
    };
    this.legendClick = this.legendClick.bind(this);
  }
  legendClick(symbol, e){
    let selected = this.state.selected.slice(0);
    let skills = this.skills.slice(0);
    if(selected.indexOf(symbol) === -1) {
      selected.push(symbol);
    } else {
      selected.splice(selected.indexOf(symbol), 1);
    }
    for(let i = skills.length - 1; i >= 0; i--) {
      if(selected.indexOf(skills[i][0]) === -1) {
        skills.splice(i, 1);
      }
    }
    this.setState({
      skills: skills,
      selected: selected
    });
  }
  
  render () {
    return (
            <div className="skills">
              <div className="skills-container">
                  {this.state.skills.map((skillType, i) => (
                    skillType[1].map((skill, index) => (
                    <SkillsBox key={skill} icon={skill[0]} skillType={skillType[0]} skill={skill} />
                    ))
                  ))}
              </div>
              <div className="legend">
                <a className="resume-button" href= "assets/resume.pdf" target="_blank">Open Resume in new tab</a>
                <div className="skills-legend">
                  <LegendBox symbol="front-end" selected={this.state.selected.indexOf("front-end") !== -1 ? "skills-legend-box-selected" : ""} clickHandle={this.legendClick.bind(this, 'front-end')} />
                  <LegendBox symbol="back-end" selected={this.state.selected.indexOf("back-end") !== -1 ? "skills-legend-box-selected" : ""} clickHandle={this.legendClick.bind(this, 'back-end')} />
                  <LegendBox symbol="databases" selected={this.state.selected.indexOf("databases") !== -1 ? "skills-legend-box-selected" : ""} clickHandle={this.legendClick.bind(this, 'databases')} />
                  <LegendBox symbol="languages" selected={this.state.selected.indexOf("languages") !== -1 ? "skills-legend-box-selected" : ""} clickHandle={this.legendClick.bind(this, 'languages')} />
                  <LegendBox symbol="libraries" selected={this.state.selected.indexOf("libraries") !== -1 ? "skills-legend-box-selected" : ""} clickHandle={this.legendClick.bind(this, 'libraries')} />
                  <LegendBox symbol="others" selected={this.state.selected.indexOf("others") !== -1 ? "skills-legend-box-selected" : ""} clickHandle={this.legendClick.bind(this, 'others')} />
                </div>
                <a className="resume-button" href= "assets/resume.pdf" download>Download Resume</a>
              </div>
            </div>);
  }
}