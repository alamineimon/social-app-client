import React from "react";
import "./RightSide.css";
import Home from "../../img/home.png";
import Noti from "../../img/noti.png";
import Comment from "../../img/comment.png";
import { IoSettingsOutline } from 'react-icons/io5';
import TrendCard from "../TrendCard/TrendCard";


const RightSide = () => {
  return (
    <div className="RightSide">
      <div className="navIcons">
        <img src={Home} alt="" />
        <IoSettingsOutline size={22} />
        <img src={Noti} alt="" />
        <img src={Comment} alt="" />
      </div>
      <TrendCard />
      <button className="button r-button">
        Share
      </button>
    </div>
  );
};

export default RightSide;
