import { ThemeProvider } from "flowbite-react";
import "./App.css";
import { ModalProvider } from "./context/ModalContext";
import customTheme from "./theme/customTheme";
import { Outlet } from "react-router";

function RootLayout() {
  return (
    <ModalProvider>
      <ThemeProvider theme={customTheme}>
        <Outlet />
      </ThemeProvider>
    </ModalProvider>
  );
}

export default RootLayout;
