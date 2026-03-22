import { Routes, Route } from "react-router-dom";

import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import WhoWeAre from "./Components/WhoWeAre";
import Services from "./Components/Services";
import MainServicesV2 from "./Components/MainServicesV2";
import WhyChooseUs from "./Components/WhyChooseUs";
import HomeProjects from "./Components/HomeProjects";
import Testimonials from "./Components/Testimonials";
import Footer from "./Components/Footer";
import { lazy, Suspense, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// Lazy Loaded Pages
const InteriorHero = lazy(() => import("./Pages/InteriorHero"));
const RealEstate = lazy(() => import("./Pages/RealEstate"));
const TempleDesigns = lazy(() => import("./Pages/TempleDesigns"));
const Vastu = lazy(() => import("./Pages/Vastu"));

function App() {
    useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-out-cubic",
      once: true,
      offset: 120,
    });
    
  }, []);
  return (
    <>
      <Navbar />

      <Routes>
        {/* HOME PAGE */}
        <Route
          path="/"
          element={
            <>
              <Hero />
              <WhoWeAre />
              <Services />
              <MainServicesV2 />
              <WhyChooseUs />
              <HomeProjects />
              <Testimonials />
              <Footer />
            </>
          }
        />

        {/* INTERIOR PAGE */}
        <Route path="/interior" element={
          <Suspense fallback={<div style={{padding: "100px", textAlign: "center"}}>Loading...</div>}>
            <InteriorHero />
          </Suspense>
        } />
        
        {/* NEW PAGES */}
        <Route path="/real-estate" element={
          <Suspense fallback={<div style={{padding: "100px", textAlign: "center"}}>Loading...</div>}>
            <RealEstate />
          </Suspense>
        } />
        <Route path="/temple-designs" element={
          <Suspense fallback={<div style={{padding: "100px", textAlign: "center"}}>Loading...</div>}>
            <TempleDesigns />
          </Suspense>
        } />
        <Route path="/vastu" element={
          <Suspense fallback={<div style={{padding: "100px", textAlign: "center"}}>Loading...</div>}>
            <Vastu />
          </Suspense>
        } />
      </Routes>
    </>
  );
}

export default App;
