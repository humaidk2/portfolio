import React from 'react';

export default class LegendBox extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render () {
    return (<div className={"skills-legend-box " + this.props.selected} onClick={this.props.clickHandle}>
              <div className={"skills-legend-circle skills-legend-circle-" + this.props.symbol}></div>
              <div className="skills-legend-name"><div>{this.props.symbol}</div></div>
            </div>);
  }
}