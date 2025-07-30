import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import CustomScrollbar from "@/components/CustomScrollbar";
import Technologies from "@/components/Technologies";
import Certifications from "@/components/Certifications";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col ">
      <CustomScrollbar />
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Technologies />
        <About />
        <Certifications />
        <Projects />
        <Contact />
        <Footer />
      </main>
    </div>
  );
};

export default Index;
