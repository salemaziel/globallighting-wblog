import React from "react"
import Layout from "../components/layout"
import Helmet from 'react-helmet';


import ActionComponent from '../components/HomePageComponents/ActionComponent'

import CampaignSection1 from "../components/campaignsComponents/sectionOne"
//import CampaignSection2 from "../components/campaignsComponents/sectionTwo"
import QuickFacts from "../components/campaignsComponents/sectionQuickFacts"

//import CampaignSection3 from "../components/campaignsComponents/sectionThree"
//import CampaignSection4 from "../components/campaignsComponents/sectionFour"
import CampaignSectionTwoFive from "../components/campaignsComponents/sectionTwoFive"
import CampaignSectionAboutDonate from "../components/campaignsComponents/sectionAboutDonate"

import CampaignHero from '../components/campaignsComponents/sectionHero'

const CampaignPage = () => (
  <Layout>
     <Helmet title={'Campaigns Page'} />
    <CampaignHero />
    <CampaignSection1 />
   {/*} <CampaignSection4 />*/}
    {/*<CampaignSection2 />*/}
    <QuickFacts />
    <CampaignSectionTwoFive />
    {/*<CampaignSectionAboutDonate />*/}
   {/*} <CampaignSection3 />*/}
   
    <ActionComponent />
  </Layout>
)

export default CampaignPage
