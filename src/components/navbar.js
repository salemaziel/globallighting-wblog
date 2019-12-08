import React from 'react'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
} from 'reactstrap';
import { Link } from 'gatsby'
import Logo from '../images/image04.png'
import '../css/navbar.css'

class NavbarGlobal extends React.Component {
   state = {
        isOpen: false,
        width: '0px',
    }
    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    openNav = () => {
        this.setState({
            width: '270px',
        })
    }

    closeNav = () => {
        this.setState({
            width: '0px',
        })
    }


    render() {
        return (
            <div>
                <Navbar className="navigation fixed-top" display="none" onScroll="display: auto" expand="md">
                    <div className="container">
                        <NavbarBrand to="/" tag={Link} className="order-0">
                            <img src={Logo} className="logo-img-fluid" />
                        </NavbarBrand>

                        <NavbarToggler onClick={this.toggle} />
                        <Collapse isOpen={this.state.isOpen} navbar style={{ textAlign: 'center' }}>
                            
                            <Nav className="mx-auto order-1 " navbar style={{ marginTop: 18, fontWeight: 'bold', }}>
            
                                <NavItem >
                                    <NavLink className="nav-link" to="/" tag={Link} style={{ fontSize: 18, fontStyle: 'bold',  }}>HOME</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/about" tag={Link} style={{ fontSize: 18 }}>ABOUT</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/blog" tag={Link} style={{ fontSize: 18 }}>BLOG</NavLink>
                                </NavItem>
                                {/**<NavItem>
                                    <NavLink to="/faq" tag={Link} style={{ fontSize: 18 }}>
                                        FAQ
                                    {/**<FontAwesomeIcon icon={faAngleDown} style={{ marginLeft: 5 }} /> * /}
                                    </NavLink>
                                </NavItem>**/}
                                <NavItem>
                                    <NavLink className="nav-link" to="/contact" tag={Link} style={{ fontSize: 18 }}>CONTACT</NavLink>
                                </NavItem>
                                
                            </Nav>
                        </Collapse>
                         <div className="donate-btn custom-dbox-popup">
                            <a href="https://donorbox.org/global-lighting-project-usa" id="donate-btn">Donate</a> 
                        </div> 
                    </div>
                    </Navbar>
                {/* Hamburger Navbar for smaller screens */}
                <div
                    className="Hamburger-Navbar"
                    style={{
                        margin: '0 auto',
                        maxWidth: 960,
                        padding: '1.45rem 1.0875rem',
                        color: '#ffc529',
                    }}>
                    <h1 style={{ margin: 0, display: 'inline-block' }}>
                        <Link
                            to="/"
                            className="siteTitle"
                            style={{
                                textDecoration: 'none',
                                width: "5px",
                                height: "5px"
                            }}
                        >
                            <img src={Logo} className="logo-img-fluid" />
                        </Link>
                    </h1>

                    <div
                        id="mySidenav"
                        className="sidenav"
                        style={{ width: this.state.width, height: '100%', }}
                    >
                        <div>
                            <a
                                href="javascript:void(0)"
                                className="closebtn"
                                onClick={this.closeNav}
                            >
                                &times;
                            </a>
                        </div>
                        <Link className="list" to="/">
                            HOME
                        </Link>
                        <Link className="list" to="/about">
                            ABOUT
                        </Link>
                        <Link className="list" to="/blog">
                            BLOG
                       </Link>     

                        {/**<Link className="list" to="/faq">
                            FAQ
                        </Link>**/}
                        <Link className="list" to="/contact">
                            CONTACT
                        </Link>

                        <div style={{padding: 20}}>
                            <div className="donate-btn-container" style={{paddingTop: 10, paddingBottom: 10}}>
                                <Link to="https://donorbox.org/global-lighting-project-usa" id="donate-btn-hamburger" >Donate</Link>
                            </div>
                        </div>

                    </div>
                  
                    <span
                        className="openNavBtn"
                        style={{ fontSize: '40px', marginTop: 8, cursor: 'pointer', float: 'right' }}
                        onClick={this.openNav}
                    >
                        &#9776;
                    </span>
                  
                </div> 
                {/**</Navbar>**/} 
            </div>  
                
        )
    }
}    

                        
export default NavbarGlobal