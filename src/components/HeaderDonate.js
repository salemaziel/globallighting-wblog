import React from "react"
//import { UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';


import '../css/header.css'
import '../../src/components/layout.css'
import NavbarDonate from "./NavbarDonate"


const HeaderDonate = () => (
  <section NavbarGlobal>
    <div
      style={{
    margin: '60px 0 0 0',
      }}>
  
  <NavbarDonate />
  </div>
  </section>
)


export default HeaderDonate

