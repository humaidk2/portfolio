import React from 'react';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
  	$('.type-it div').typeIt({
      speed: 135,
      startDelete: false
    })
	  .tiType(' a Developer')
	  .tiDelete(9)
    .tiType('Designer')
    .tiDelete(9)
    .tiType('n Engineer')
    .tiDelete(11)
    .tiType('Humaid Khan');
  }
  
  render () {
    return (
            <div className="home">
              <div className="type-it"><div>I am</div></div>
              <div className="home-scroll" onClick={this.props.clickToScroll.bind(this,'#project-header')} ><div>Scroll for more<br />&#8964;</div></div>
            </div>);
  }
}