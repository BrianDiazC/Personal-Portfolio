import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { Portfolio } from "../pages";
import CV from "../components/CV";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/portfolio",
    element: <Portfolio />,
  },
  {
    path: "/portfolio/CV",
    element: <CV />,
  },
]);
