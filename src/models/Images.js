
const images = require.context('../images/ducks', false);
const imageList = images.keys().map(image => images(image));

function ImageGallery() {
  return (
    imageList.map((image, index) => (image.default))
  );
}

export default ImageGallery;
