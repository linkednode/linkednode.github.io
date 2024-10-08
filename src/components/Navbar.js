import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import logo from "../Assets/linkednode-no-bg-crop.png";
import { Link } from "react-router-dom";
import NavDropdown from 'react-bootstrap/NavDropdown';
import Dropdown from 'react-bootstrap/Dropdown';
import SplitButton from 'react-bootstrap/SplitButton';

import {
  AiOutlineHome,
  AiOutlineUser,
} from "react-icons/ai";

import { CgFileDocument } from "react-icons/cg";
import { GiChaingun } from "react-icons/gi";
import { MdOutlineMiscellaneousServices,MdHealthAndSafety,MdMonitorHeart } from "react-icons/md";
import { FaTools } from "react-icons/fa";

function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
    >
      <Container>
        <Navbar.Brand href="/" className="d-flex">
          <img src={logo} className="img-fluid logo" alt="brand" />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(expand ? false : "expanded");
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" defaultActiveKey="#home">
            <Nav.Item>
              <Nav.Link as={Link} to="/" onClick={() => updateExpanded(false)}>
                <AiOutlineHome style={{ marginBottom: "2px" }} /> Home
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/about"
                onClick={() => updateExpanded(false)}
              >
                <AiOutlineUser style={{ marginBottom: "2px" }} /> About
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/networks"
                onClick={() => updateExpanded(false)}
              >
                <MdOutlineMiscellaneousServices
                  style={{ marginBottom: "2px" }}
                />{" "}
                Networks
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                href="https://docs.linkednode.xyz"
                // target="_blank"
                rel="noreferrer"
              >
                <CgFileDocument style={{ marginBottom: "2px" }} /> Guide
              </Nav.Link>
            </Nav.Item>
            <NavDropdown title={<span><FaTools style={{ marginRight: '2px' }} /> Tools</span>}>
              <NavDropdown.Item
                href="https://monit.linkednode.xyz"
                target="_blank"
                rel="noreferrer"
                >
                  <MdMonitorHeart style={{ marginBottom: "2px" }} /> Monitoring
              </NavDropdown.Item>
              <NavDropdown.Item
                href="https://health.linkednode.xyz/status/dashboard"
                target="_blank"
                rel="noreferrer"
                >
                  <MdHealthAndSafety style={{ marginBottom: "2px" }} /> Health
              </NavDropdown.Item>
              <SplitButton
                key='end'
                drop='end'
                variant='secondary'
                title={
                  <>
                    <GiChaingun style={{ marginBottom: "2px", marginRight: "5px" }} />
                    Explorer
                  </>
                }
                >
                <Dropdown.Item
                href="https://mainnet.linkednode.xyz"
                target="_blank"
                rel="noreferrer">Mainnet</Dropdown.Item>
                <Dropdown.Item
                href="https://testnet.linkednode.xyz"
                target="_blank"
                rel="noreferrer">Testnet</Dropdown.Item>
              </SplitButton>
            </NavDropdown>

            {/* <Nav.Item className="fork-btn">
              <Button
                href=""
                target="_blank"
                className="fork-btn-inner"
              >
                <CgGitFork style={{ fontSize: "1.2em" }} />{" "}
                <AiFillStar style={{ fontSize: "1.1em" }} />
              </Button>
            </Nav.Item> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
