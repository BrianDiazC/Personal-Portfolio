import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { Portfolio } from "../pages";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/portfolio",
    element: <Portfolio />,
  },
]);
