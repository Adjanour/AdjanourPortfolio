import Home from '../Pages/Home';
import React from 'react';
import Image from '../Pages/Images';
import Blog from '../Pages/Blog';
import {
  RouterProvider,
  createBrowserRouter
} from "react-router-dom";

import { ChakraProvider } from '@chakra-ui/react'


const router = createBrowserRouter([
    {
      path: "/",
      element:<Home/>,
    },
    {
      path: "/about",
      element: <Image/>,
    },
    {
      path: "/contact",
      element: <div>Contact</div>,
    },
    {path:"/blog",
     element:<Blog/>,
    },
]);




export const AppProvider = () => {
  return (
  <ChakraProvider>
    <React.Suspense
      fallback={
        <div className="flex items-center justify-center w-screen h-screen">
        </div>
      }
    >
        <RouterProvider router={router} />
    </React.Suspense> 
    </ChakraProvider>
  );
};
