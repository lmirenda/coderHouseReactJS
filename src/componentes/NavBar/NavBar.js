import React from 'react'
import './NavBar.css'
import { CartWidget } from './CartWidget'
import { NavLink } from 'react-router-dom'
import { Navbar, NavDropdown, Nav, Container } from 'react-bootstrap'





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
                    <NavDropdown title="Productos" id="basic-nav-dropdown">
                    <NavDropdown.Item href="/productos/PC"><NavLink activeClassName="activeLink" to="/productos/PC">PC</NavLink></NavDropdown.Item>
                    <NavDropdown.Item href="/productos/Mac"><NavLink activeClassName="activeLink" to="/productos/Mac">Mac</NavLink></NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link href="#link"><NavLink activeClassName="activeLink" to="/contacto">Contacto</NavLink></Nav.Link>
                    <Nav.Link href="#link"><NavLink activeClassName="activeLink" to="/cart"><CartWidget/></NavLink></Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
            {/* <h1>{ brandName }</h1> */}

            {/* <nav className="navbar navbar-dark bg-dark">
                <NavLink activeClassName="activeLink" exact to="/">Inicio</NavLink>
                <NavLink activeClassName="activeLink" to="/productos/PC">PC</NavLink>
                <NavLink activeClassName="activeLink" to="/productos/Mac">Mac</NavLink>
                <NavLink activeClassName="activeLink" to="/contacto">Contacto</NavLink>
                <NavLink activeClassName="activeLink" to="/cart"><CartWidget/></NavLink>
            </nav> */}
        </>
        
    )
}

/*
export const NavBar = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#link">Link</Nav.Link>
                    <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                </Navbar.Collapse>
            </Container>
</Navbar>
    )
}*/