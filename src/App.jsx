import React from 'react'
import AOS from 'aos';
import "aos/dist/aos.css";
import Hero from './components/Hero'

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
    </div>
   
  )
}

export default App
