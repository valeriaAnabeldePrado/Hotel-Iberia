import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";
import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import FormReservaH from "./FormReservaH";
import { Fade } from "react-awesome-reveal"; 

import "./bodyRandom.css";

import {habitacionesDatos, servicioss, roomData} from './img.js'
import { useTranslation } from "react-i18next";

const GaleriaHabit = () => {
  const {t, i18n}= useTranslation()
  const languajes = i18n.language

  //MODAL IMG//
  const [show, setShow] = useState(false);
  const [tipoHabi, setTipoHabi] = useState("");
  const [imgHab, setImgHab] = useState(null);
  const [description, setDescription] = useState("");
  const [value, setValue] = useState("")

  const handleClose = () => setShow(false);
  const handleShow = (e) => {
    setShow(true);
    setTipoHabi(e.target.alt);
    setImgHab(e.target.src);
    setDescription(e.target.name);
    setValue(e.target.title)
  };
  //MODAL RESERVA//
  const [showReserva, setShowReserva] = useState(false);
  const [btnReservaHabitacion, setBtnReservaHabitacion] = useState("");

  const handleReserva = (e) => {
    setShowReserva(true);
    setBtnReservaHabitacion(e.target.name);
  };
  const handleCloseReserva = () => {
    setShowReserva(false);
  };

  return (
    <>
      <main className="galeria-container">
        <section className="galeria-swiperItem">
        <Fade duration={800} delay={500} cascade damping={0.3}>
          {languajes==="es"?
            habitacionesDatos.map((card, indx)=>(
              <Swiper
                key={indx}
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                pagination={{
                  clickable: true,
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper swiper-margin"
              >
                {card.images.map((img,index)=>(
                  <SwiperSlide className="swiper-container" key={index}>
                    <img
                      className="swiper-habitaciones"
                      src={img}
                      alt={card.name}
                      onClick={handleShow}
                      name={
                        card.data
                      }
                      title={card.price}
                    />
                    <section className="swiper-itemsText">
                      <h5 className="swiper-h4">{card.cardName}</h5>
                      <button
                        className="btn-ver"
                        onClick={handleReserva}
                        name={card.button}
                      >
                      {t('HabitacionesServ.cardButon')}
                      </button>
                    </section>
                  </SwiperSlide>
                ))}
              </Swiper> 
            ))
          :
            roomData.map((cardII, indexII)=>(
              <Swiper
                key={indexII}
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                pagination={{
                  clickable: true,
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper swiper-margin"
              >
                {cardII.images.map((imgB,indexB)=>(
                  <SwiperSlide className="swiper-container" key={indexB}>
                    <img
                      className="swiper-habitaciones"
                      src={imgB}
                      alt={cardII.name}
                      onClick={handleShow}
                      name={
                        cardII.data
                      }
                      title={cardII.price}
                    />
                    <section className="swiper-itemsText">
                      <h5 className="swiper-h4">{cardII.cardName}</h5>
                      <button
                        className="btn-ver"
                        onClick={handleReserva}
                        name={cardII.button}
                      >
                      {t('HabitacionesServ.cardButon')}
                      </button>
                    </section>
                  </SwiperSlide>
                ))}
              </Swiper>
          ))
          }
        </Fade>
        </section>
        {/* MODAL DE IMAGENES */}
        <Modal
          show={show}
          onHide={handleClose}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title>{tipoHabi}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <img src={imgHab} alt={tipoHabi} className="modal-img"/>
           
          </Modal.Body>
          <Modal.Footer className="modal-footer">
          <h6 className="modal-F">{description}</h6>
          <h6 className="modal-F">{value}</h6>
          </Modal.Footer>
        </Modal>
        {/* MODAL DE FORM RESERVA */}
        <Modal
          show={showReserva}
          onHide={handleCloseReserva}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title>{btnReservaHabitacion}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <FormReservaH btnReserva={btnReservaHabitacion} />
          </Modal.Body>
          <Modal.Footer className="modal-footer">
            <p>{t('formHabitaciones.parrafoForm')}</p>
          </Modal.Footer>
        </Modal>
      {/*SECTOR DE SERVICIOS*/}
      <Fade duration={1500} delay={1e2} direction="left">
        <section className="container-linea margin">
          <h1 className="habi-h1">{t('HabitacionesServ.titleServ')}</h1>
          <hr className="linea1"></hr>
        </section>  
      </Fade>
      <article className="servicios-container main-parra main-parra_p">
        <Fade duration={1800} delay={1e2} cascade>
              <section className="parrafo">
                {t('HabitacionesServ.serviciosParrafoI')}
              </section>
              <section className="parrafo">
              {t('HabitacionesServ.serviciosParrafoII')}
              </section>             
              <Swiper 
              slidesPerView={1}
              spaceBetween={30}
              loop={true}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              modules={[Pagination, Navigation]}
              className="mySwiper swiperServ swiper-margin"
              >
                {servicioss.map((servImg, iindex)=>(
                  <SwiperSlide className="swiper-container" key={iindex}>
                  <img
                    className="swiper-habitaciones"
                    src={servImg}
                    alt="Servicios"
                    onClick={handleShow}
                  />
                </SwiperSlide>
                ))}        
              </Swiper>
         </Fade> 
        </article>
      </main>
        
    </>
  );
};

export default GaleriaHabit;
