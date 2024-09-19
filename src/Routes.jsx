import React from "react";
import { useRoutes } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Home1 from "./pages/Home1";
import Signup from "./pages/Signup";
import Attendee from "./pages/Attendee";
import Success from "./pages/Success";
import Pricing from "./pages/Pricing";
import Organizer from "./pages/Organizer";
import Orgsuccess from "./pages/Orgsuccess";
import OrgsuccessOne from "./pages/OrgsuccessOne";
import Articleslearnmore from "./pages/Articleslearnmore";
const ProjectRoutes = () => {
  let element = useRoutes([
    { path: "/", element: <Home1 /> },
    { path: "*", element: <NotFound /> },
    { path: "home", element: <Home1 /> },
    { path: "learnmore", element: <Articleslearnmore /> },
    // { path: "signup", element: <Signup /> },
    // { path: "attendee", element: <Attendee /> },
    // { path: "success", element: <Success /> },
    // { path: "pricing", element: <Pricing /> },
    // { path: "organizer", element: <Organizer /> },
    // { path: "orgsuccess", element: <Orgsuccess /> },
    // { path: "orgsuccessone", element: <OrgsuccessOne /> },
  ]);
  return element;
};
export default ProjectRoutes;
