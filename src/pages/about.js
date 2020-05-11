import React from "react";
import Layout from "../components/layout";
import { Helmet } from 'react-helmet';


import About2 from '../components/About2';
import WhatWeDo from '../components/HomePageComponents/WhatWeDo';
import ActionComponent from '../components/HomePageComponents/ActionComponent'


const AboutPage = () => (
     <Layout>
        <Helmet title={'About Page'} />
          <About2 />
          {/*<WhatWeDo />*/}
          <ActionComponent />
     </Layout>
   )
   
   export default AboutPage