import React from "react";
import { HeaderSection } from "../../components/Main/HeaderSection";
import GaleriaHabit from "../../components/Main/GaleriaHabit";
import { Footer } from "../../components/Main/Footer";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "../../components/Main/bodyRandom.css";
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { BtnWts } from "../../components/Main/BtnWts";
import { Fade } from "react-awesome-reveal";
import { useTranslation } from "react-i18next";

const HabitacionesYs = () => {
  const {t}= useTranslation()
  const section = `${t('HabitacionesServ.nameHb')}`;
  return (
    <>
      <main className="container-index">
      <HelmetProvider>
        <Helmet>
          <title>Hotel Iberia</title>
          <meta name="author" content="Lobo Mauro Andrés, de Prado Valeria Anabel" />
          <meta name="description" content="En el Hotel Iberia ofrecemos a los huéspedes, un espacio de descanso, confort y excelente nivel de servicio, el mismo esta bicado en pleno centro de la Ciudad de Neuquén" />
          <meta name="keywords" content="Hotel Iberia, Neuquén, capital, habitaciones, servicios, desayuno, sala de conferencia, vacaciones"></meta>
        </Helmet>
      </HelmetProvider>
        <BtnWts/>
        <Fade duration={2500}>
         <HeaderSection section={section}/>
        </Fade>
        <Container>
        <Row>
          <Col fluid="lg">
          <Fade duration={2000} delay={1e2} cascade damping={0.3}>
            <section className="main-parra margen-botton main-parra_p">
            {t('HabitacionesServ.parrafoHabi')}
            </section>
          </Fade>
          <Fade duration={1500} delay={1e2} direction="right">  
          <header className="container-linea margin">
            <h1 className="habi-h1">{t('home.cardTitle')}</h1>
            <hr className="linea1"></hr>
          </header>
          </Fade>
           <GaleriaHabit />
        <Footer />
        </Col>
        </Row>
        </Container>
      </main>
    </>
  );
};

export { HabitacionesYs };
