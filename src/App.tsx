import { ThemeProvider } from "flowbite-react";
import "./App.css";
import Benefits from "./pages/home/Benefits";
import HeroSection from "./pages/home/HeroSection";
import customTheme from "./theme/customTheme";
import Header from "./pages/home/Header";
import OldVsNew from "./pages/home/OldVsNew";
import Features from "./pages/home/Features";
import Case from "./pages/home/Case";
import { ModalProvider } from "./context/ModalContext";
import FormModal from "./components/modal/FormModal";

function App() {
  return (
    <ModalProvider>
      <ThemeProvider theme={customTheme}>
        <Header />
        <HeroSection />
        <Benefits />
        <OldVsNew />
        <Features />
        <Case />
        <FormModal />
      </ThemeProvider>
    </ModalProvider>
  );
}

export default App;
