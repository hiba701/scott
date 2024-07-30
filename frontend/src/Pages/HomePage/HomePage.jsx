import React from 'react';
import Header from '../../Components/Header/Header';
import Home from '../../Components/Home/Home';
import About from '../../Components/About/About';
import Contact from '../../Components/Contact/Contact';
import Footer from '../../Components/Footer/Footer';
import Portfolio from '../../Components/Portfolio/Portfolio';
import Slider from '../../Components/Slider/Slider';

const HomePage = () => {
  return (
    <div>
      <Header />
      <main>
        <section id="hero">
          <Home />
        </section>
        <section id="about">
          <About />
        </section>
        <Slider/>
        <section id="gallery">
          <Portfolio />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>
      <Footer/>
    </div>
  );
};

export default HomePage;
