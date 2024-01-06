import React from 'react';
import { Link } from 'react-router-dom'; // Adjust as needed
import { cn } from '../../utilities/utils';
import { NavItem } from './NavItems';
import Button from '../Elements/Button/Button';
import { ImageContainer } from '../ImageContainer/ImageContainer';
import pig from '../../assets/pig.png';

export type NavbarProps = {
  items: NavItem[];
  className?: string;
};

export const Navbar: React.FC<NavbarProps> = ({ items, className }: NavbarProps) => {
  return (
    <nav className={cn('shadow-md bg-white p-4 sticky backdrop:blur w-fit rounded-[25px] mx-auto top-2 z-10', className)}>
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-black text-xl font-bold mr-2">
         <ImageContainer src={pig} className="rounded-full" style={{width:"30px"}} />
        </Link>
        <div className="flex space-x-2">
          {items.map((item, index) => (
            <Link key={index} to={item.to} className="text-white">
              <Button text={item.text} className='px-2 rounded-[25px] py-1' />
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

