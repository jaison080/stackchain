import { About, Footer, Hero, MoreDetails, Navbar } from "@/components";
import React from "react";

function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <MoreDetails />
      <Footer />
    </>
  );
}

export default HomePage;
