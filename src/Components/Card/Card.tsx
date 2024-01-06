import React, { ReactNode } from "react";
import PropTypes from "prop-types";
import { cn } from "../../utilities/utils";
import Button from "../Elements/Button/Button";

export type CardProps = {
  title: string;
  content: ReactNode;
  imageSrc?: string;
  className?: string;
  buttonText: string;
};

const Card: React.FC<CardProps> = ({
  title,
  content,
  imageSrc,
  className,
  buttonText,
}: CardProps) => {
  return (
    <div className={cn("flex flex-col bg-white-500 p-4 w-64 rounded-md shadow-lg", className)}>
      {imageSrc && (
        <img
          src={imageSrc}
          alt={title}
          className="w-full h-32 object-cover mb-4 rounded-md"
        />
      )}
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      <div className="flex-grow">{content}</div>
      <div className="mt-2">
        <Button text={buttonText} className="p-2 w-full" />
      </div>
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.node.isRequired,
  imageSrc: PropTypes.string,
  className: PropTypes.string,
  buttonText: PropTypes.string.isRequired,
};

export default Card;
