import React from 'react'
import { Container } from 'reactstrap'
import Practice from '../components/practice'
import Layout from '../components/layout'
import '../components/layout.css'


import Signup from '../components/signup'

const Test = () => (
    <Layout>
        <Container>
            <Signup />
            <Practice />
       </Container>
        </Layout>
)

export default Test