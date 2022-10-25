import React, { Fragment } from 'react'
import Footer from '../modules/_modules/Footer'
import Hero from './Hero'
import Partners from './Partners'
import Team from './Team'

function AboutPage() {
  return (
    <Fragment>
    <Hero/>
    <Partners />
    <Team/>
    <Footer />
    </Fragment>
  )
}

export default AboutPage