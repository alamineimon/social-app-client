import React, { useState } from "react";
import "./InfoCard.css";
import { BsPencil } from 'react-icons/bs';


const InfoCard = () => {
  return (
    <div className="InfoCard">
      <div className="infoHead">
        <h4>Your Info</h4>
        <div>
          <BsPencil
            width="2rem"
            height="1.2rem"
          />
        </div>
      </div>

      <div className="info">
        <span>
          <b>Status </b>
        </span>
        <span>in a Relationship</span>
      </div>

      <div className="info">
        <span>
          <b>Lives in </b>
        </span>
        <span>Jhenaidah</span>
      </div>

      <div className="info">
        <span>
          <b>Works at </b>
        </span>
        <span>Eimon Co. inst</span>
      </div>

      <button className="button logout-button">Logout</button>
    </div>
  );
};

export default InfoCard;
