import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";

//HABITACIONES IMG
import single from '../images/single.jpg'
import habDoble from '../images/doble.png'
import habTriple from '../images/triple.png'
import cuadruHabi from '../images/cuadruple.png'
import quintupleHabi from '../images/quintuple.png'
import sextuHabi from '../images/sextuple.jpg'
import "swiper/css/effect-cards";
import { Router, Routes, Route, Link } from "react-router-dom";
import { HabitacionesYs } from "../../pages";
import "./style.css";
import { Fade } from "react-awesome-reveal";
import { useTranslation } from "react-i18next";

const Card = () => {
  const {t}= useTranslation()
  const habitaciones = [
    {name: `${t('home.cardHomeI')}`,
     img: single
    },
    {name: `${t('home.cardHomeII')}`,
     img: habDoble
    },
    {name: `${t('home.cardHomeIII')}`,
     img: habTriple
    },
    {name: `${t('home.cardHomeIV')}`,
     img: cuadruHabi
    },
    {name: `${t('home.cardHomeV')}`,
     img: quintupleHabi
    },
    {name: `${t('home.cardHomeVI')}`,
     img: sextuHabi
    }
]

  return (
    <>
       <Fade duration={1500} direction="left" cascade>
        <header className="container-linea margin">
          <h1 className="habi-h1">{t('home.cardTitle')}</h1>
          <hr className="linea1"></hr>
        </header> 
       </Fade> 
       <Fade delay={1e3}> 
        <main className="cards-container margen-xl">
          <Swiper
              slidesPerView={1}
              spaceBetween={30}
              loop={true}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              modules={[Pagination, Navigation]}
              className="swiper-cont_size"
            >
              {habitaciones.map((card, inx)=>(
                <SwiperSlide className="swiper-container columna" key={inx}>
                    <img
                      src={card.img}
                      className="swiper-habitaciones cursor-d"
                      alt="Habitacion single"
                    />
                    <section className="swip-items">
                      <h4>{card.name}</h4>
                      <button className="btn-ver">
                        <Link to="/habitacionesYs" className="btn-item">
                          {t('home.btnVer')}
                        </Link>
                      </button>
                      <Routes>
                        <Route path="/habitacionesYs" element={<HabitacionesYs />} />
                      </Routes>
                    </section>
                </SwiperSlide>
          
              ))}
            </Swiper>
        </main>
        </Fade>    
    </>
  );
};

export { Card };
