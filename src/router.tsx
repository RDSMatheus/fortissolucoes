import { createBrowserRouter } from "react-router";
import RootLayout from "./RootLayout";
import HomeLayout from "./components/layout/HomeLayout";
import Login from "./pages/login/Login";
import Pdv from "./pages/pdv/Pdv";
import { loginLoader } from "./loaders/loginLoader";
import PdvLayout from "./components/layout/PdvLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        path: "",
        Component: HomeLayout,
      },
      {
        path: "login",
        Component: Login,
        loader: loginLoader,
      },
      {
        path: "pdv",
        Component: PdvLayout,
        children: [
          {
            path: "",
            Component: Pdv,
          },
        ],
      },
    ],
  },
]);
