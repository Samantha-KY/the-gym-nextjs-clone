import React from 'react'
import Footer from '../modules/_modules/Footer';
import Contact from './Contact';
import Hero from './Hero';
import Partners from './Partners';
import Project from './Projects';
import Services from './Services'
import Social from './Social';

function HomePage() {
  return (
    <section className=''>
      <Hero />
      <Services />
      <Partners />
      <Project />
      <Social />
      <Contact />
      <Footer />
    </section>
  )
}

export default HomePage;