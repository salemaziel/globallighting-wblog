import React from "react";
import Layout from "../components/layout";


import About2 from '../components/About2';
import WhatWeDo from '../components/HomePageComponents/WhatWeDo';
import '../css/main.css';


const AboutPage = () => (
    <div>
     <Layout>
       <About2 />
       <WhatWeDo />
     </Layout>
     </div> 
   )
   
   export default AboutPage