import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./routes/App";
import ErrorPage from "./routes/ErrorPage";

import store from "./app/store";
import { Provider } from "react-redux";
import {createBrowserRouter, RouterProvider} from "react-router-dom"

const router = createBrowserRouter (
  [
    {
      path: "/",
      element: <App />,
      errorElement: <ErrorPage />,
      children: [],
    },
  ]
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
