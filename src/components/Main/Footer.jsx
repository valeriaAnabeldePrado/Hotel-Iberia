import React from "react";
import { RiFacebookFill } from "react-icons/ri";
import { GrInstagram } from "react-icons/gr";
import { SiWhatsapp } from "react-icons/si";
import { Router, Routes, Route, Link } from "react-router-dom";
import { Contacto } from "../../pages";
import { Fade } from "react-awesome-reveal";
import { useTranslation } from "react-i18next";
import "./bodyRandom.css";

const Footer = () => {
  const {t}= useTranslation()
  return (
    <>
      <Fade delay={1e2} cascade duration={1500}>
        <section className="container-lineayf">
          <hr className="linea1"></hr>
          <footer className="main-parra footer-container">
            <button className="footer-button button-size">
              <Link to="/contacto" className="btn-footer">
                {t('btn')}
              </Link>
            </button>
              <Routes>
                <Route path="/contacto" element={<Contacto />} />
              </Routes>
            <h6 className="footer-p">iberiahotelneuquén@gmail.com</h6>
            <section className="footer-redes">
              <a href="https://api.whatsapp.com/send?phone=92996104591" target="_blank">
                <h1>
                  <SiWhatsapp />
                </h1>
              </a>
              <a href="https://www.instagram.com/hotel.iberia.nqn/" target="_blank">
                <h1>
                  <GrInstagram />
                </h1>
              </a>
              <a href="https://www.facebook.com/hoteliberianqn" target="_blank">
                <h1>
                 <RiFacebookFill/>
                </h1>
              </a>
            </section>
            
            <p>{t('derechos.footerDA')}</p>
          </footer>
        </section>
      </Fade>
      
    </>
    
  );
};

export { Footer };
