import React from 'react';
import { createRoot } from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import store from './Store/Store'
import { Provider } from 'react-redux';
import { App } from './App';
import { RouterProvider } from "react-router-dom";
import './index.css';

// ✅ correct ID passed
const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <Provider store={store}>
    <RouterProvider router={App} />
  </Provider>,
);

reportWebVitals();
