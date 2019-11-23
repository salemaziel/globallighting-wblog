import React from "react"
import Layout from "../components/layout"

import Hero from '../components/HomePageComponents/Hero'
import AboutUs from '../components/HomePageComponents/AboutUs'
import ActionComponent from '../components/HomePageComponents/ActionComponent'
import WhatWeDo from '../components/HomePageComponents/WhatWeDo'
import NewFromBlog from '../components/HomePageComponents/NewFromBlog'
//import OurWork from '../components/HomePageComponents/OurWork'
import NewsLetter from '../components/HomePageComponents/NewsLetter'

import Synergy from "../components/HomePageComponents/Synergy"
import Homeheadertitle from "../components/HomePageComponents/Homeheadertitle"

const IndexPage = () => (
 <div>
  <Layout>
    <Hero />
    <Homeheadertitle />
    <AboutUs />
    <Synergy />
    <WhatWeDo />
    
    
    <NewFromBlog />
    <ActionComponent />
    {/**<OurWork />**/}
    <NewsLetter />
  </Layout>
  </div> 
)

export default IndexPage
