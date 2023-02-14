import React from "react";
import "./bodyRandom.css";

const HeaderSection = ({ section }) => {
  return (
    <>
      <header className="header-secciones">
        <h1 className="header-secciones__H1">{section}</h1>
        <hr className="header-secciones__hr" />
      </header>
    </>
  );
};

export { HeaderSection };
