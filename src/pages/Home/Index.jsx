import React from "react";
import { Card } from "../../components/Main/Card";
import { Hero } from "../../components/Main/Hero";
import { Icons } from "../../components/Main/Icons";
import { Maps } from "../../components/Main/Maps";
import { Parrafos } from "../../components/Main/Parrafos";
import { Parrafos2 } from "../../components/Main/Parrafos2";
import "../../components/Main/bodyRandom.css";
import { Footer } from "../../components/Main/Footer";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Helmet, HelmetProvider } from 'react-helmet-async'; 
import { BtnWts } from "../../components/Main/BtnWts";
import { Fade } from "react-awesome-reveal";


const Home = () => {

  return (
    <>
      <main className="container-index" id="home">
      <HelmetProvider> 
        <Helmet>
          <title>Hotel Iberia</title>
          <meta name="author" content="Lobo Mauro Andrés, de Prado Valeria Anabel" />
          <meta name="description" content="En el Hotel Iberia ofrecemos a los huéspedes, un espacio de descanso, confort y excelente nivel de servicio, el mismo esta bicado en pleno centro de la Ciudad de Neuquén" />
          <meta name="keywords" content="Hotel Iberia, Neuquén, capital, descanso, confort, vacaciones"></meta>
        </Helmet>
      </HelmetProvider> 
        <Hero/>
        <BtnWts/>
        <Container>
        <Row>
          <Col fluid="lg">
            <Fade duration={2500} cascade damping={0.3}>
             <Icons />
             <Parrafos />
            </Fade>
            <Card />
            <Parrafos2 />
            <Maps />
            <Footer />
          </Col>
        </Row>
        </Container>
      </main>
    </>
  );
};

export { Home };
