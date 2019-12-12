import ImageGallery from 'react-image-gallery';

import Img1356 from '../images/firestation-blog/IMG_1356.jpg'
import Img1356thumb from '../images/firestation-blog/IMG_1356-thumb.jpg'

import Img1352 from '../images/firestation-blog/IMG_1352.jpg'
import Img1352thumb from '../images/firestation-blog/IMG_1352-thumb.jpg'


const images = [
  {
    original: {Img1356},
    thumbnail: {Img1356thumb},
  },
  {
    original: {Img1352},
    thumbnail: {Img1352thumb},
  },
  {/** 
    original: 'https://picsum.photos/id/1019/1000/600/',
    thumbnail: 'https://picsum.photos/id/1019/250/150/',
  **/},
];

class MyGallery extends React.Component {
  render() {
    return <ImageGallery items={images} />;
  }
}

export default MyGallery