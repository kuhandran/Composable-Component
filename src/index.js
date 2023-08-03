import React from 'react';
import { createRoot } from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import store from './Store/Store'
import { Provider } from 'react-redux';
import { App } from './App';
import { RouterProvider } from "react-router-dom";
import './index.css';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';

// ✅ correct ID passed
const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <Provider store={store}>
    <RouterProvider router={App} />
  </Provider>,
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();

reportWebVitals();
