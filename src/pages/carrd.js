import React from 'react'
import Carrd from '../components/carrd'
import Layout from '../components/layout'
import WhatWeDo from '../components/HomePageComponents/WhatWeDo'

//import '../css/carrd.css'

const Carrdpage = () => (
    <>
        
        <Layout>
            <Carrd />
            <WhatWeDo />
        </Layout>
    </>
)

export default Carrdpage