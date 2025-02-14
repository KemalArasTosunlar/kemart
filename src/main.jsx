import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from "./App.jsx";  
import HomePage from "./pages/HomePage";  
import "./index.css";
import ShopPageDesktop from "./pages/ShopPageDesktop.jsx";
import ContactPageDesktop from "./pages/ContactPageDesktop.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "shop", element: <ShopPageDesktop /> },
      { path: "about", element: <div>About Page</div> },
      { path: "blog", element: <div>Blog Page</div> }, 
      { path: "contact", element: <ContactPageDesktop/> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
