import React, { useState, useEffect } from 'react';
import { Route } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { LinkContainer } from 'react-router-bootstrap'
import { Navbar, Nav, NavDropdown, Form, Button, FormControl, Row, Col } from 'react-bootstrap'
import { Divider, Drawer, List, ListItem, ListItemText } from '@material-ui/core';

const SecondHeader = () => {

    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">

            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <NavDropdown title="Flight" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Domestic</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">International</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="Hotels" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Domestic</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">International</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="Holidays" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Domestic</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">International</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="Hot Deals" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Domestic</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">International</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="Destinations" id="collasible-nav-dropdown">
                    </NavDropdown>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default SecondHeader
