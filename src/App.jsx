import React from 'react'
import AOS from 'aos';
import "aos/dist/aos.css";
import Hero from './components/Hero'
import Items from './components/Items';
import Roomset from './components/Roomset';
import Moreitems from './components/Moreitems';
import About from './components/About';


function App() {
    React.useEffect(()=>{
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
      <Hero />
      <Items />
      <Roomset />
      <Moreitems />
      <About />
    </div>
   
  )
}

export default App
