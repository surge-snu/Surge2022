import React from "react";
import Image from "next/dist/client/image";
import RenegadeCard from "../RenegadeCard/RenegadeCard";
import "./Renegade.scss";

export default function Renegade() {
  return (
    <div className="Renegade">
      <div className="Renegade__top">
        <h2 className="Renegade__top--outlineTitle">Renegade</h2>
        <h2 className="Renegade__top--title">
          WE ARE THE<span> KING</span> IN EVERY GAME
        </h2>
      </div>
      <p className="Renegade__middle">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud
      </p>
      <div className="Renegade__cards">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => (
          <RenegadeCard key={i} />
        ))}
      </div>
      <div className="Renegade__bottom">
        <p>EXPLORE GALLERY</p>
        <img className="Renegade__bottom--arrow" src="/Img/RightArrow.svg" />
      </div>
    </div>
  );
}
