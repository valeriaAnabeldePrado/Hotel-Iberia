import React from 'react'
import { SiWhatsapp } from "react-icons/si";
import "./bodyRandom.css";

const BtnWts = () => {
  return (
    <div className='container-btnW'>
        <h1 className='wts-btn'>
          <a href="https://api.whatsapp.com/send?phone=92996104591" target="_blank" style={{color: "#fef7e5"}}>
            <SiWhatsapp />
          </a>
        </h1>
    </div>
  )
}

export {BtnWts}