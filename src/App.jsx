import React from 'react';
import Hero from './components/hero/Hero';
import Navbar from './components/navbar/Navbar';
import Functionalities from './components/services/functionalities/Functionalities';
import Slider from './components/slider/Slider';
import Grid from './components/grid-img/Grid';
import Footer from './components/footer/Footer';

const App = () => {

  return (
    <>
      <Navbar />
      <Hero />
      <Functionalities />
      <Slider />
      <Grid />
      <Footer />
    </>
  )
}

export default App;