import React from 'react';

export default class Introduction extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render () {
    return (
            <div className="introduction">
              <div className="title">Introduction</div>
              <div className="myself">
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam interdum, erat sed dapibus dignissim, nulla diam accumsan risus, eu porttitor odio felis eu nisi. Nulla facilisi. Maecenas erat lorem, elementum ornare finibus non, placerat sed turpis. Praesent et sapien erat. Nulla blandit scelerisque purus eget auctor. Donec viverra ante vitae elit congue aliquet. Sed fringilla sodales congue. In placerat in sapien non hendrerit. Donec aliquam tempus enim vitae congue. Aenean et nunc scelerisque, congue nunc quis, volutpat diam. Cras varius fringilla efficitur. Proin ac tincidunt mi, ut dignissim libero. Aenean vitae neque id orci molestie fringilla ut ac mauris. Nam accumsan justo nec ligula molestie, nec iaculis nibh aliquam.
                </p>
              </div>
            </div>);
  }
}