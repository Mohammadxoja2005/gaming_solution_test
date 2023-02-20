import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
// index.css 
import "./index.css";
// router-dom
import { RouterProvider } from "react-router-dom";
// store 
import { setupStore } from "./redux/store";
// react-redux 
import { Provider } from "react-redux";
// router 
import { router } from "./routes/routes";


const store = setupStore();

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
