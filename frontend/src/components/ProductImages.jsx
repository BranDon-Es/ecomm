// src/components/ProductImages.jsx
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import '../styles/ProductImages.css';

const ProductImages = ({ images }) => {
  return (
    <div className="product-images">
      <Carousel showThumbs={false} infiniteLoop useKeyboardArrows>
        {images.map((image, index) => (
          <div key={index} className="carousel-image-container">
            <img src={image.image} alt={`Product Image ${index + 1}`} />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default ProductImages;
