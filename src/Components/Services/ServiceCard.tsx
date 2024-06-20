import React from 'react';

interface ServiceProps {
  title: string;
  description: string;
  imageUrl?: string; // Optional image
}

const ServiceCard: React.FC<ServiceProps> = ({ title, description, imageUrl }) => {
  return (
    <div className="bg-white  dark:bg-black dark:text-white w-full mx-auto mt-4 rounded-lg shadow-md p-4 justify-between"> 
    <h2 className="text-lg  font-bold mb-2">{title}</h2>
      {imageUrl && (
        <img src={imageUrl} alt={title} className="w-full h-36 object-cover rounded-t-lg mb-2" />
      )}
      <p className="text-gray-600 dark:text-white">{description}</p>
    </div>
  );
};

export default ServiceCard;
