import React from 'react';
import SkillsBox from './skillsbox';

export default class Skills extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render () {
    return (
            <div className="skills">
              <div className="skills-container">
                <SkillsBox icon="A" skill="AngularJS" />
                <SkillsBox icon="B" skill="BabylonJS" />
                <SkillsBox icon="C" skill="CannonJS" />
                <SkillsBox icon="C" skill="CSS3" />
                <SkillsBox icon="D" skill="D3" />
                <SkillsBox icon="E" skill="ES6" />
                <SkillsBox icon="G" skill="Git/Github" />
                <SkillsBox icon="H" skill="HTML5" />
                <SkillsBox icon="J" skill="Javascript" />
                <SkillsBox icon="M" skill="MYSQL" />
                <SkillsBox icon="M" skill="MongoDB" />
                <SkillsBox icon="M" skill="Mongoose" />
                <SkillsBox icon="N" skill="NodeJS/Express" />
                <SkillsBox icon="R" skill="ReactJS" />
                <SkillsBox icon="R" skill="React-Native" />
                <SkillsBox icon="R" skill="Restful API" />
                <SkillsBox icon="S" skill="Sequelize" />
                <SkillsBox icon="S" skill="Sqlite3" />
                <SkillsBox icon="W" skill="Webpack" />
              </div>
            </div>);
  }
}