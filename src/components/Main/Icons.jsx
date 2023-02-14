import React from "react";
import { AiOutlineClockCircle } from "react-icons/ai";
import { FiMapPin } from "react-icons/fi";
import { MdBed } from "react-icons/md";
import { useTranslation } from "react-i18next";
import "./bodyRandom.css";

const Icons = () => {
  const {t}= useTranslation()
  return (
    <main>
      <div className="icons">
        <section className="section-icons">
          <h1>
            <AiOutlineClockCircle />
          </h1>
          <p className="section-icon_p">
            {t('iconHorarios')}
          </p>
        </section>
        <section className="section-icons">
          <h1>
            <FiMapPin />
          </h1>
          <p className="section-icon_p">
            {t('iconLugar')}
          </p>
        </section>
        <section className="section-icons">
          <h1>
            <MdBed />
          </h1>
          <p className="section-icon_p">
           {t('iconHuesped')}
          </p>
        </section>
      </div>
    </main>
  );
};

export { Icons };
