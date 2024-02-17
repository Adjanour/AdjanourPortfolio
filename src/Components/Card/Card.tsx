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
  link?: string;
};

const Card: React.FC<CardProps> = ({
  title,
  content,
  imageSrc,
  className,
  buttonText,
  link,
}: CardProps) => {
  return (
    <div
      className={cn(
        "flex flex-col bg-white-500 p-5 w-80 rounded-md shadow-lg",
        className
      )}
    >
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
        <a href={link} className="flex">
          <Button text={buttonText} className="p-2 font-semibold w-full text-white" />
        </a>
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
