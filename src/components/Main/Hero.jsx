import React from "react";
import { Contacto } from "../../pages";
import { Router, Routes, Route, Link } from "react-router-dom";
import { Fade } from "react-awesome-reveal";
import { useTranslation } from "react-i18next";
import "./hero.css";

const Hero = () => {
  const {t}= useTranslation()
  return (
    <header className="hero-container">
      <section className="hero-container_items">
        <Fade duration={2500} >
         <h1 className="hero-container_H2">HOTEL IBERIA</h1>
        </Fade>
        <hr className="border" />
        <Fade duration={3000} delay={1e3} cascade damping={0.2}>
          <h5 className="hero-container_parrafo">
         {t('subTitleHero')}
          </h5>
          <button className="boton-b">
            <Link to="/contacto" className="link-b">
              {t('btn')}
            </Link>
          </button>
        <Routes>
          <Route path="/contacto" element={<Contacto/>} />
        </Routes>
        </Fade>
      </section>
    </header>
  );
};

export { Hero };
