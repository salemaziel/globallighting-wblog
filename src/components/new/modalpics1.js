import React from 'react'
import ImageGallery from 'react-image-gallery';
import Img1body from '../../images/whiteled/1bodylightfront.jpg'
//import './modalpics1.css'
import "react-image-gallery/styles/css/image-gallery.css";
//import Img5indoor from '../images/whiteled/5indoorESLsolarLED.jpg'
//import Img6indoor from '../images/whiteled/6indoor.jpg'
//import Img75solar from '../images/whiteled/7.5solar.jpg'
//import Img7indoor from '../images/whiteled/7indoor.jpg'
//import Img1860 from '../images/whiteled/8IMG1860.jpg'
//import Img1862 from '../images/whiteled/10IMG1862.jpg'
//import Img1867 from '../images/whiteled/11IMG1867.jpg'

const PREFIX_URL = '../../images/whiteled/'
/*const images = [
  {
    original: {Img1body},
    thumbnail: {Img1body},
  },
  {
    original: 'url(../../images/whiteled/5indoorESLsolarLED.jpg)',
    thumbnail: '../../images/whiteled/5indoorESLsolarLED.jpg',
  },
  {
    original: '../../images/whiteled/6indoor.jpg',
    thumbnail: '../../images/whiteled/6indoor.jpg',
  },
];*/

class MyGallery extends React.Component {
  constructor() {
    super();
    this.state = {
      showIndex: true,
      showBullets: true,
      infinite: true,
      showThumbnails: true,
      showFullscreenButton: true,
      showGalleryFullscreenButton: true,
      showPlayButton: true,
      showGalleryPlayButton: true,
      showNav: true,
      isRTL: false,
      slideDuration: 450,
      slideInterval: 2000,
      slideOnThumbnailOver: false,
      thumbnailPosition: 'top',
      showVideo: {},
    };
  
  this.images = [
    {
      original: `https://res.cloudinary.com/dexdumfqy/image/upload/v1585214592/glp/whiteled/1bodylightfront_ul6z5v.jpg`,
      thumbnail: `https://res.cloudinary.com/dexdumfqy/image/upload/v1585214592/glp/whiteled/1bodylightfront_ul6z5v.jpg`,
    },
    {
      original: `https://res.cloudinary.com/dexdumfqy/image/upload/v1585214592/glp/whiteled/1bodylightfront_ul6z5v.jpg`,
      thumbnail: `https://res.cloudinary.com/dexdumfqy/image/upload/v1585214592/glp/whiteled/1bodylightfront_ul6z5v.jpg`,
      originalClass: 'featured-slide',
      thumbnailClass: 'featured-thumb',
      description: 'Custom class for slides & thumbnails'
    },
  ].concat(this._getStaticImages());
}

componentDidUpdate(prevProps, prevState) {
  if (this.state.slideInterval !== prevState.slideInterval ||
      this.state.slideDuration !== prevState.slideDuration) {
    // refresh setInterval
    this._imageGallery.pause();
    this._imageGallery.play();
  }
}

_onImageClick(event) {
  console.debug('clicked on image', event.target, 'at index', this._imageGallery.getCurrentIndex());
}

_onImageLoad(event) {
  console.debug('loaded image', event.target.src);
}

_onSlide(index) {
  this._resetVideo();
  console.debug('slid to index', index);
}

_onPause(index) {
  console.debug('paused on index', index);
}

_onScreenChange(fullScreenElement) {
  console.debug('isFullScreen?', !!fullScreenElement);
}

_onPlay(index) {
  console.debug('playing from index', index);
}

_handleInputChange(state, event) {
  this.setState({[state]: event.target.value});
}

_handleCheckboxChange(state, event) {
  this.setState({[state]: event.target.checked});
}

_handleThumbnailPositionChange(event) {
  this.setState({thumbnailPosition: event.target.value});
}

_getStaticImages() {
  let images = [];
  for (let i = 2; i < 12; i++) {
    images.push({
      original: `${PREFIX_URL}${i}.jpg`,
      thumbnail:`${PREFIX_URL}${i}t.jpg`
    });
  }

  return images;
}

_resetVideo() {
  this.setState({showVideo: {}});

  if (this.state.showPlayButton) {
    this.setState({showGalleryPlayButton: true});
  }

  if (this.state.showFullscreenButton) {
    this.setState({showGalleryFullscreenButton: true});
  }
}




  render() {
    return (
      <section className="modalpics1">
        <ImageGallery
          ref={i => this._imageGallery = i}
          items={this.images}
          lazyLoad={false}
          onClick={this._onImageClick.bind(this)}
          onImageLoad={this._onImageLoad}
          onSlide={this._onSlide.bind(this)}
          onPause={this._onPause.bind(this)}
          onScreenChange={this._onScreenChange.bind(this)}
          onPlay={this._onPlay.bind(this)}
          infinite={this.state.infinite}
          showBullets={this.state.showBullets}
          showFullscreenButton={this.state.showFullscreenButton && this.state.showGalleryFullscreenButton}
          showPlayButton={this.state.showPlayButton && this.state.showGalleryPlayButton}
          showThumbnails={this.state.showThumbnails}
          showIndex={this.state.showIndex}
          showNav={this.state.showNav}
          isRTL={this.state.isRTL}
          thumbnailPosition={this.state.thumbnailPosition}
          slideDuration={parseInt(this.state.slideDuration)}
          slideInterval={parseInt(this.state.slideInterval)}
          slideOnThumbnailOver={this.state.slideOnThumbnailOver}
          additionalClass="app-image-gallery"
          style={{
            height: '20%',
            width: 'auto'
          }}
        />

      </section>
    )
  }
}

export default MyGallery