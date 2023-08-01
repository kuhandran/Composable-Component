import {
  createBrowserRouter,
  createRoutesFromElements,
  Route
} from "react-router-dom";
import { Root } from "./Routes/Root";
import React, { lazy } from 'react';

export function createPath() {

  // const location = useLocation();
  // console.log(location);


  switch (path) {
    case "/":
      return (
        <Route path={path} element={<Root />} />
      )

    case "/login":
      return (
        <Route path= "/login" element={<Root />} />
      )
    default:
      return (
        <Route path={path} element={<Root />} />
      )
  }

}

export const App = createBrowserRouter(
  createRoutesFromElements(
    createPath("/")
  )
);
