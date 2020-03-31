import React from "react"
import Layout from "../components/layout"


import ActionComponent from '../components/HomePageComponents/ActionComponent'
import SEO from "../components/originalseo"

import CampaignSection1 from "../components/campaignsComponents/sectionOne"
import CampaignSection2 from "../components/campaignsComponents/sectionTwo"
import CampaignSection3 from "../components/campaignsComponents/sectionThree"
import CampaignHero from '../components/campaignsComponents/sectionHero'

const CampaignPage = () => (
  <Layout>
    <CampaignHero />
    <CampaignSection1 />
    <CampaignSection2 />
    <CampaignSection3 />
    
    <ActionComponent />
  </Layout>
)

export default CampaignPage
