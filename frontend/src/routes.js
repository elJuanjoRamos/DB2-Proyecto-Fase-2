import React from "react";
import async from "./components/Loader/Async";
// Dashboard
import DashboardLayout from "./pages/dashboard/DashboardLayout";


//Auth pages
import Auth from "./pages/auth/Auth";
import SignInPage from "./pages/auth/SignInPage";



const Grafica = async(() => import("./pages/graph/Grafica"));
const Dashbard = async(() => import("./pages/dashboard/Dashboard"));

const routes = [
  {
    path: "/",
    element: <Auth />,
    children: [
      {
        path: "",
        element: <SignInPage />,
      }
    ]
  },
  {
    path: "dashboard",
    element: <DashboardLayout />,
    children: [
      {
        path: "tabla",
        element: <Dashbard />,
      },
      {
        path: "grafica",
        element: <Grafica />,
      },
    ]
  }


];

export default routes;
