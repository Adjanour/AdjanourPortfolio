import ServiceCard from "./ServiceCard";
import { servicesData } from "./data";
import React from 'react'


export const ServicesList: React.FC = () => (
    <div className="services-list grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 md:gap-24 gap-12  mx-auto justify-around">
      {servicesData.map((service, index) => (
        <ServiceCard
          key={index}
          title={service.title}
          description={service.description}
          imageUrl={service.imageUrl}
        />
      ))}
    </div>
  );
  