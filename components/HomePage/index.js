import React from 'react'
import Footer from '../modules/Footer';
import Hero from './Hero';
import Partners from './Partners';
import FeatureProject from './FeatureProject';
import Social from './Social';
import Innovative from './Innovative';
import GetInTouch from './GetInTouch';

function HomePage() {
  return (
    <section className=''>
      <Hero />
      <Innovative />
      <Partners />
      <FeatureProject />
      <Social />
      <GetInTouch />
      <Footer />
    </section>
  )
}

export default HomePage;