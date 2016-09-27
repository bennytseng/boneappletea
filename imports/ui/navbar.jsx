import { Meteor } from 'meteor/meteor';
import React from 'react';
import { render } from 'react-dom';
import { Nav, Navbar, NavItem, FormGroup, FormControl, Button, Glyphicon } from 'react-bootstrap';

const navbarInstance = (
  <Navbar>
    <Navbar.Header>
      <Navbar.Brand>
        <a href="#">boneappletea</a>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
    <Navbar.Form pullLeft>
      <FormGroup>
      <Button type="submit"><Glyphicon glyph="record" /></Button>
        <FormControl type="text" placeholder="Search" />
      </FormGroup>
      {' '}
      <Button type="submit"><Glyphicon glyph="search" /></Button>
    </Navbar.Form>
    <Nav>
      <NavItem href="#">Sign-Up/Login</NavItem>
    </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default navbarInstance;
