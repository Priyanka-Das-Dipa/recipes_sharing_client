import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/home/Home";
import About from "../pages/about/About";
import ContactUs from "../pages/contactus/ContactUs";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "about",
        element: <About></About>
      },
      {
        path: "contactus",
        element: <ContactUs></ContactUs>
      }
    ],
  },
]);

export default router;
