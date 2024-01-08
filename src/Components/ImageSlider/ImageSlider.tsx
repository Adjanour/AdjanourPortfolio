import React, { useState } from 'react';

interface ImageSliderProps {
  images: string[];
}

export const ImageSlider: React.FC<ImageSliderProps> = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="image-slider-container">
      <button onClick={prevImage} className="btn">Previous</button>
      <img src={images[currentImageIndex]} alt={`Image ${currentImageIndex + 1}`} className="slider-image" />
      <button onClick={nextImage} className="btn">Next</button>
    </div>
  );
};