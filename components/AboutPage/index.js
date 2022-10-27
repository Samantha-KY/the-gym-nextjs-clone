import React, { Fragment } from 'react'
import Footer from '../modules/Footer'
import AboutHero from './AboutHero'
import AboutPartners from './AboutPartners'
import Team from './Team'

function AboutPage() {
  return (
    <Fragment>
    <AboutHero/>
    <AboutPartners />
    <Team/>
    <Footer />
    </Fragment>
  )
}

export default AboutPage