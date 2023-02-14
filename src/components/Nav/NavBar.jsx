import React from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import "bootstrap/dist/css/bootstrap.min.css";
import "./nav.css";
import { useTranslation } from "react-i18next";


const NavBar = () => {
  const {t, i18n } = useTranslation()
  const changeEn =()=>{
    i18n.changeLanguage('en')
  }
  const changeEs = ()=>{
    i18n.changeLanguage('es')
  }
  
  return (
    <>
      <div >
        {[false].map((expand) => (
          <Navbar
            key={expand}
            fixed="top"
            expand={expand}
            className="mb-3 nav"
            style={{
              lineHeight: "0",
              boxShadow: "none",
              backgroundColor: "#451c0752",
              width: "95%",
              height: "50px",
            }}
          >
            <Container fluid>
              
              <Navbar.Brand className="flagContainer">
              <button 
              className="boton-lang"
              onClick={changeEs}
              >
                Es
              </button>
              <button 
              className="boton-lang"
              onClick={changeEn}
              >
                En
              </button>
              
              </Navbar.Brand>
                <Navbar.Toggle
                  aria-controls={`offcanvasNavbar-expand-${expand}`}
                  style={{
                    soutline: "none",
                    borderStyle: "none",
                    boxShadow: "none",
                  }}
                />
              <Navbar.Offcanvas
                id={`offcanvasNavbar-expand-${expand}`}
                aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                placement="end"
                className="navMenu"
                
              >
                <Offcanvas.Header closeButton className="navHeader">
                  <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                    Hotel Iberia
                  </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  <Nav className="justify-content-end flex-grow-1 pe-3">
                      <Link className="textLink main-parra_p" to="/">
                        {t('nav.home')}
                      </Link>
                      <Link to="/habitacionesYs" className="textLink main-parra_p">
                      {t('nav.HabitacionesyS')}
                      </Link>
                      <Link to="/contacto" className="textLink main-parra_p">
                      {t('nav.contacto')}
                      </Link>
                  </Nav>
                </Offcanvas.Body>
              </Navbar.Offcanvas>
            </Container>
          </Navbar>
        ))}
      </div>
    </>
  );
};

export default NavBar;
