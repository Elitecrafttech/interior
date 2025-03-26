import React, { lazy, Suspense, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import logo from '../src/assets/logo.webp'

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
          <div className="flex flex-col items-center text-amber-900 font-extrabold text-[30px] relative bottom-[370px]">
            <div><img src={logo} loading="lazy" alt="loading logo" className='h-[100px] lg:w-[160px] w-[100%] rounded-md'/></div>
            <div>Loading
            <span className="dot-animation">.</span>
            <span className="dot-animation">.</span>
            <span className="dot-animation">.</span></div>
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
