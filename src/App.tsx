import { ThemeProvider } from "flowbite-react";
import "./App.css";
import Benefits from "./components/Benefits";
import HeroSection from "./components/HeroSection";
import customTheme from "./theme/customTheme";
import Header from "./components/Header";
import OldVsNew from "./components/OldVsNew";
import Features from "./components/Features";

function App() {
  return (
    <ThemeProvider theme={customTheme}>
      <Header />
      <HeroSection />
      <Benefits />
      <OldVsNew />
      <Features />
    </ThemeProvider>
  );
}

export default App;
