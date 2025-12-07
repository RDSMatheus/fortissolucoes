import { ThemeProvider } from "flowbite-react";
import "./App.css";
import { ModalProvider } from "./context/ModalContext";
import customTheme from "./theme/customTheme";
import { Outlet } from "react-router";
import { AuthProvider } from "./context/AuthContext";

function RootLayout() {
  return (
    <ModalProvider>
      <AuthProvider>
        <ThemeProvider theme={customTheme}>
          <Outlet />
        </ThemeProvider>
      </AuthProvider>
    </ModalProvider>
  );
}

export default RootLayout;
