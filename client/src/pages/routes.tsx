import { createBrowserRouter } from "react-router-dom";
import Consts from "./consts/Consts";
import Dashboard from "./dashboard/Dashboard";
import Settings from "./settings/Settings";
import Varibles from "./varibles/Varibles";

export const pages = [
  {
    path: "settings",
    element: <Settings />,
    display:'Settings'
  },
  {
    path: "",
    element: <Varibles />,
    display:'Variables'
  },
  {
    path: "consts",
    element: <Consts />,
    display:'Consts'
  },
  {
    path: "dashboard",
    element: <Dashboard />,
    display:'Dashboard'
  },
];

export default createBrowserRouter(pages);
