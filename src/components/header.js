import React from "react"
//import { UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

//import Helmet from 'react-helmet'

import '../css/header.css'
import '../../src/components/layout.css'
//import NavbarGlobal from "./navbar"
import SEO from '../components'

const Header = () => (
  <>
  
    {/**<section NavbarGlobal>
      <NavbarGlobal />
        </section>**/}
    {/**<script type="text/javascript" defer src="https://donorbox.org/install-popup-button.js"></script>
    <script>window.DonorBox = { widgetLinkClassName='custom-dbox-popup' }</script>**/}
    <SEO />
  </>
)


export default Header

