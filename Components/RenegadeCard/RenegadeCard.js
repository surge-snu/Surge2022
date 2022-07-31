import React from "react";
import "./RenegadeCard.scss";

export default function RenegadeCard() {
  return (
    <div className="RenegadeCard">
      <div className="RenegadeCard__top">
        <div className="RenegadeCard__top--left"></div>
        <div className="RenegadeCard__top--middle"></div>
        <div className="RenegadeCard__top--right">
          <span>10/10</span>
          <span>BATTLE SNU</span>
        </div>
      </div>
      <div className="RenegadeCard__bottom">
        <div className="RenegadeCard__bottom--teams">
          SNU <span>VS</span> AMITY
        </div>
        <div className="RenegadeCard__bottom--eventTitle">BATTLE MAGNITE</div>
        <div className="RenegadeCard__bottom--eventEra">BREEZE 22</div>
        <div className="RenegadeCard__bottom--timeline">23rd March 2023</div>
      </div>
    </div>
  );
}
