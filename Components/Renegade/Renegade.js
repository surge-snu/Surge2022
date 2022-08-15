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
        The eSports tournament of Shiv Nadar University took place in 2021 conducted by Surge. Amidst the COVID-19 pandemic, the students of SNU organized one of the best college level eSports competitions in the country in collaboration with Nexus, the gaming society of SNU.
      </p>
      <div className="Renegade__cards">
        {[...Array(10).keys()].map((i) => (
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
