import React from 'react'
import { CartWidget } from './CartWidget'
import { NavLink } from 'react-router-dom'
import { Navbar, NavDropdown, Nav, Container } from 'react-bootstrap'
import './NavBar.css'





const brandName = "TiendaTecno"

export const NavBar = () => {
    return (
        <>
            <Navbar bg="dark" expand="lg">
                <Container>
                    <Navbar.Brand href="#home"> <NavLink activeClassName="activeLink" exact to="/">{brandName}</NavLink></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <NavDropdown title="Productos" id="basic-nav-dropdown" className="activeLink">
                        <NavDropdown.Item href="/productos/PC"><NavLink activeClassName="activeLink" to="/productos/PC">PC</NavLink></NavDropdown.Item>
                        <NavDropdown.Item href="/productos/Mac"><NavLink activeClassName="activeLink" to="/productos/Mac">Mac</NavLink></NavDropdown.Item>
                        </NavDropdown>
                        {/* <Nav.Link href="#link"><NavLink activeClassName="activeLink" to="/contacto">Contacto</NavLink></Nav.Link> */}
                        <Nav.Link href="#link"><NavLink activeClassName="activeLink" to="/cart"><CartWidget/></NavLink></Nav.Link>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            
    

        {/* <Navbar bg="dark" variant="dark">
            <Container>
            <Navbar.Brand href="/">{brandName}</Navbar.Brand>
            <Nav className="me-auto">
            <Nav.Link href='' to path="/productos" className="activeLink">Productos</Nav.Link>
            <Nav.Link href="/productos/PC" className="activeLink">PC</Nav.Link>
            <Nav.Link href="/productos/Mac" className="activeLink">MAC</Nav.Link>
            </Nav>
            <Nav.Link href="/cart" className="cartWidget" ><CartWidget /></Nav.Link>
            </Container>
        </Navbar> */}

        </>
        
    )
}

