import React from "react"
import Layout from "../components/layout"
import { Helmet } from 'react-helmet';


import ActionComponent from '../components/HomePageComponents/ActionComponent'

import CampaignSection1 from "../components/campaignsComponents/needed/sectionOne"
//import CampaignSection2 from "../components/campaignsComponents/sectionTwo"
import QuickFacts from "../components/campaignsComponents/needed/sectionQuickFacts"

//import CampaignSection3 from "../components/campaignsComponents/sectionThree"
//import CampaignSection4 from "../components/campaignsComponents/sectionFour"
import WhyLEDs from "../components/campaignsComponents/needed/sectionWhyLEDs"
import CampaignSectionAboutDonate from "../components/campaignsComponents/sectionAboutDonate"
import OurSolution from '../components/campaignsComponents/needed/sectionOurSolution'
import Citations from '../components/campaignsComponents/needed/citations'

import CampaignHero from '../components/campaignsComponents/needed/sectionHero'
import MLNews from "../components/campaignsComponents/needed/microlinkNews"

const CampaignPage = () => (
  <Layout>
     <Helmet title={'Campaigns Page'} />
    <CampaignHero />
    <CampaignSection1 />
   {/*} <CampaignSection4 />*/}
    {/*<CampaignSection2 />*/}
    <QuickFacts />
    <WhyLEDs />
    <OurSolution />
    <div className="NoMobile" style={{background: 'white', zIndex: '3', position: 'relative'}}>
        <h2 style={{ margin: "1rem auto", padding: "1rem" }} className="">
          In The News: Ultra Violet Light As A Disinfectant:
        </h2>
        <MLNews />
      </div>
    <div style={{width: '100%', background: 'white', padding: '0 -15px', backgroundColor: 'white', zIndex: '3'}}>
      <MLNews />
    </div>
    {/*<CampaignSectionAboutDonate />*/}
   {/*} <CampaignSection3 />*/}
   <Citations />
    <ActionComponent />
  </Layout>
)

export default CampaignPage
