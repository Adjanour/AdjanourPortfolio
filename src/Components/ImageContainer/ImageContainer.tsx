import React from 'react';
import PropTypes from 'prop-types';
import { cn } from '../../utilities/utils';


export type ImageContainerProps = {
  src: string;
  alt?: string;
  className?: string;
  style?: React.CSSProperties;
};

export const ImageContainer: React.FC<ImageContainerProps> = ({ src, alt, className, style }: ImageContainerProps) => {
  return (
    <div className={cn('relative overflow-hidden', className)} style={style}>
      <img src={src} alt={alt} className="w-full h-auto" />
    </div>
  );
};

ImageContainer.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
  className: PropTypes.string,
  style: PropTypes.object,
};

