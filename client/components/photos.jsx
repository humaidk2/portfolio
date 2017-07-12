import React from 'react';

export default class Photos extends React.Component {
  constructor(props) {
    super(props);
    this.imageClick = this.imageClick.bind(this);
  }
  imageClick(wallpaperName){
    var photosStyle = document.getElementsByClassName('photos')[0];
    photosStyle.style.background = wallpaperName;
    photosStyle.style.backgroundSize = 'cover';
  }
  
  render () {
    return (<div className="photos">
              <div className="empty-photos" />
              <div className="images">
                <div className="all-pics">
                  <div className="all-pic"><img src="assets/wallpaper1.jpg" onClick={this.imageClick.bind(this, 'url(assets/wallpaper1.jpg) no-repeat center')} /></div>
                  <div className="all-pic"><img src="assets/wallpaper2.jpg" onClick={this.imageClick.bind(this, 'url(assets/wallpaper2.jpg) no-repeat center')} /></div>
                  <div className="all-pic"><img src="assets/wallpaper4.jpg" onClick={this.imageClick.bind(this, 'url(assets/wallpaper4.jpg) no-repeat center')} /></div>
                  <div className="all-pic"><img src="assets/wallpaper5.jpg" onClick={this.imageClick.bind(this, 'url(assets/wallpaper5.jpg) no-repeat center')} /></div>
                  <div className="all-pic"><img src="assets/wallpaper6.jpg" onClick={this.imageClick.bind(this, 'url(assets/wallpaper6.jpg) no-repeat center')} /></div>
                </div>
              </div>
            </div>)
  }
}