import About from '../sections/About';
import Hero from '../sections/Hero';
import Contact from '../sections/Contact';
import NavBar from '../components/NavBar';
import Portfolio from '../sections/Portfolio';

import { useEffect } from 'react';

import Aos from 'aos';
import 'aos/dist/aos.css';

const Home = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <>
      <NavBar />

      <Hero />

      <About />

      <Portfolio />

      <Contact />
    </>
  );
};

export default Home;
