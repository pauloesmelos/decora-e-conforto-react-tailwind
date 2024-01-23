import React from 'react';
import Hero from './components/hero/Hero';
import Navbar from './components/navbar/Navbar';
import Functionalities from './components/services/functionalities/Functionalities';
import Slider from './components/slider/Slider';

const App = () => {

  return (
    <>
      <Navbar />
      <Hero />
      <Functionalities />
      <Slider />
    </>
  )
}

export default App;