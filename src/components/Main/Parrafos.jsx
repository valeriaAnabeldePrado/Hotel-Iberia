import React from "react";
import { useTranslation } from "react-i18next";
import "./bodyRandom.css";

const Parrafos = () => {
  const {t}= useTranslation()
  return (
    <>
      <article className="main-parra">
        <h4 className="main-parra_h4">
          {t('home.titlePI')}
        </h4>
        <p className="main-parra_p margen-botton">
          {t('home.parrafoI')}
        </p>
      </article>
    </>
  );
};

export { Parrafos };
