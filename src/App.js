import {
  createBrowserRouter,
  createRoutesFromElements,
  Route
} from "react-router-dom";
import { Root } from "./Routes/Root";
import React, { lazy } from 'react'

export const App = createBrowserRouter(
  createRoutesFromElements(
      <Route path="/" element={<Root />}/>
  )
);
              