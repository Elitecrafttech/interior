import React, { lazy, Suspense, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// Only lazy-load components **below the fold**
const Items = lazy(() => import("./components/Items"));
const Roomset = lazy(() => import("./components/Roomset"));
const Moreitems = lazy(() => import("./components/Moreitems"));
const About = lazy(() => import("./components/About"));

import Hero from "./components/Hero"; // Keep Hero as normal import

function App() {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <div>
      <Hero /> {/* Load instantly */}

      <Suspense
        fallback={
          <div className="flex justify-center items-center text-amber-900 font-extrabold text-[30px]">
            Loading
            <span className="dot-animation">.</span>
            <span className="dot-animation">.</span>
            <span className="dot-animation">.</span>
          </div> }>

        <Items />
        <Roomset />
        <Moreitems />
        <About />
      </Suspense>
    </div>
  );
}

export default App;
