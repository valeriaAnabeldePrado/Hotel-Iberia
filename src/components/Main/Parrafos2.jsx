import React from "react";
import "./bodyRandom.css";
import { Fade } from "react-awesome-reveal";
import { useTranslation } from "react-i18next";

const Parrafos2 = () => {
  const {t}= useTranslation()
  return (
    <>
      <Fade duration={2500} cascade damping={0.3}>
        <article className="main-parra bode-parra">
          <p className="main-parra_p">
            {t('home.titlePII')}
          </p>
          <p className="main-parra_p">
          {t('home.parrafoII')}
          </p>
          <p className="main-parra_p margen-xl ">{t('home.parrafin')}</p>
        </article>
      </Fade>
    </>
  );
};

export { Parrafos2 };
