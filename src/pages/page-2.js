import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Buttonz from '../components/button'
import styled from 'styled-components'
import { Button } from 'reactstrap'
import Box from '../components/box'

const Question = () => (
  <p>Can i do this? </p>
)

const Button2 = styled.a`
  color:#FFF;
  background:#000;
  text-align:center;
  padding:20px;
  display: block;
  margin: 0.5em 0;
  font-family:Montserrat;
  &:hover {
    text-decoration:none;
    color: orange;
  }
`

const Excerpt = styled.p`
  margin: 0;
`

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <h1> Hi from the second page </h1>
    <p>Welcome to page 2</p>
    <Buttonz as={Link} href="/FAQ" prefetch primary>Test Primary Button</Buttonz>
    <Buttonz as={Link} href="/donate" color="primary">Test Primary Button</Buttonz>
    <Box />
    <Buttonz donateblk>Donate black button</Buttonz>
    <Link to="/index">Go back to the homepage</Link>
    <Button2 href="/faq" prefetch>button 2 </Button2>
    <Question />
  </Layout>
)

export default SecondPage
