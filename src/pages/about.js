import React from "react";
import Layout from "../components/layout";


import About2 from '../components/About2';
import WhatWeDo from '../components/HomePageComponents/WhatWeDo';
import '../css/main.css';
import SEO from "../components/originalseo";


const AboutPage = () => (
    <div>
     <Layout>
       <SEO title="About Global Lighting Project" />
       <About2 />
       <WhatWeDo />
     </Layout>
     </div> 
   )
   
   export default AboutPage