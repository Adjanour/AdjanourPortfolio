import Home from '../Pages/Home';
import React from 'react';
import Image from '../Pages/Images';
import {
  RouterProvider,
  createBrowserRouter
} from "react-router-dom";


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
]);


export const AppProvider = () => {
  return (
    <React.Suspense
      fallback={
        <div className="flex items-center justify-center w-screen h-screen">
        </div>
      }
    >
        <RouterProvider router={router} />
    </React.Suspense>
  );
};
