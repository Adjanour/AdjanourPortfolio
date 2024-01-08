import React from 'react';
import {ImageSlider} from '../Components/ImageSlider';
import pig from '../assets/pig.png';
import me from  '../assets/IMG-20230804-WA0065.jpg'
import another from '../assets/IMG-20230804-WA0065-removebg.png'
const Image: React.FC = () => {
  const images = [
    'https://images.unsplash.com/photo-1602524466997-3e8e3e1a5f7b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cG9ydHJhaXR8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80',
    'https://images.unsplash.com/photo-1602524466997-3e8e3e1a5f7b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cG9ydHJhaXR8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80',
    me,
    pig,
another
    // Add more image URLs as needed
  ];

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">React Image Slider Example</h1>
      <ImageSlider images={images} />
    </div>
  );
};

export default Image;
