import React from 'react';
import Project from './project';

export default class Projects extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render () {
    return (
            <div className="projects">
            <Project projectName="Vrpacman"
            functionality="VRPacman is a first person virtual reality version of the classic game, Pac-man." 
            point1="Integrated BabylonJS and CannonJS to achieve smooth game physics"
            point2="Developed a ghost ai system that actively chases user"
            point3="Architected maze builder algorithm using ReactJS and BabylonJS to produce playable mazes"
            techStack="ReactJS, Webpack, BabylonJS, CannonJS, NodeJS, Express, Socket.io, MySql"
             />
            <Project projectName="Lifecraft" 
            functionality="Lifecraft is an android pet simulation game that promotes exercise through mini-games." 
            point1="Redesigned existing web app to mobile app"
            point2="Developed User authentication system"
            point3="Adopted React Native sensor/sound module to make for a fun user friendly experience"
            techStack="ReactJS, React-Native, MySql, NodeJS, Express"
            />
            <Project projectName="Money-io"
            functionality="Money-io is A financing app that allows users to keep track of their spendings as well as debts and loans" 
            point1="Designed mobile friendly front-end using React and Bootstrap to target users on multiple devices"
            point2="Structured various routes with Node/Express for specialization"
            point3="Saved each user’s transactions on Sqlite3 database to help users identify their owings"
            techStack="React.js, Bootstrap, Node.js/Express, SQLite3, Bookshelf.js/Knex.js"
             />
            </div>);
  }
}