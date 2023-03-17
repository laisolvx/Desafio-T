import React from 'react'
import AboutCard from '../about/AboutCard';
import HAbout from './HAbout';
import Hero from './hero/Hero'
import Test from './testiomonal/Test';

const Home = () => {
  return (
    <div>
        <Hero />
        <AboutCard />
        <HAbout />
        <Test />
    </div>
  )
}

export default Home;