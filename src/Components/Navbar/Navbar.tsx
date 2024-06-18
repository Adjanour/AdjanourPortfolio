import React from 'react';
import { Link } from 'react-router-dom'; // Adjust as needed
import { cn } from '../../utilities/utils';
import { NavItem } from './NavItems';
import Button from '../Elements/Button/Button';
import { ImageContainer } from '../ImageContainer/ImageContainer';
import me from '../../assets/DSC_8462~2.jpg'
import { motion } from 'framer-motion';
export type NavbarProps = {
  items: NavItem[];
  className?: string;
};

export const Navbar: React.FC<NavbarProps> = ({ items, className }: NavbarProps) => {
  return (
    <>
    <nav className={cn('shadow-md bg-white p-4 sticky backdrop:blur w-fit rounded-[25px] mx-auto top-2 z-10', className)}>
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-black text-xl font-bold mr-2">
         <ImageContainer src={me} className="rounded-full" style={{width:"32px",height:"32px"}} />
        </Link>
        <div className="flex space-x-2">
          {items.map((item, index) => (
             <motion.button
             whileHover={{
               scale: 1.2,
               originY: 0
             }}
             transition={{ type: "spring", stiffness: 150 }}
             key={index}
           >
            {item.to == "blog" ? <Link to="/blog">
              <Button text={item.text} className='px-2 bg-white dark:text-black text-black py-1 text-sm' />
              </Link> : <a href={item.text}>
              <Button text={item.text} className='px-2 bg-white dark:text-black text-black py-1 text-sm' />
            </a>}
            </motion.button>
          ))}
        </div>
      </div>
    </nav>
    </>
  );
};

