import React from "react"
import { UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';


//import '../css/header.css'
import '../../src/components/layout.css'
import NavbarGlobal from "./navbar"


const Header = () => (
  <section NavbarGlobal>
  <div style={{
    position: 'sticky',
    zIndex: '1500',
  }}>
    <NavbarGlobal />
  </div>
  </section>
)


export default Header

