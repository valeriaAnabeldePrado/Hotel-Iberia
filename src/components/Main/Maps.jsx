import React from "react";
import "./bodyRandom.css";
import { Fade } from "react-awesome-reveal";
import { useTranslation } from "react-i18next";

const Maps = () => {
  const {t}= useTranslation()
  return (
    <>
      <Fade duration={1500} direction="right" cascade>
        <article className="maps">
          <h5 className="maps-H5 main-parra_p">{t('home.map')}</h5>
          <iframe className="maps-mapa"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12410.033975233124!2d-68.0588889!3d-38.9580556!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x960a33d2b1dbd551%3A0x53427d289ace8401!2sHotel%20Iberia!5e0!3m2!1ses-419!2sar!4v1669060212180!5m2!1ses-419!2sar"
            title="map"
            height="300"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </article>
      </Fade>
    </>
  );
};

export { Maps };
