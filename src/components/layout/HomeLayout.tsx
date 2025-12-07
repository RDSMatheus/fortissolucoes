import React from "react";
import Header from "../../pages/home/Header";
import HeroSection from "../../pages/home/HeroSection";
import Case from "../../pages/home/Case";
import Benefits from "../../pages/home/Benefits";
import Features from "../../pages/home/Features";
import OldVsNew from "../../pages/home/OldVsNew";
import FormModal from "../modal/FormModal";

const HomeLayout = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <Benefits />
      <OldVsNew />
      <Features />
      <Case />
      <FormModal />
    </>
  );
};

export default HomeLayout;
