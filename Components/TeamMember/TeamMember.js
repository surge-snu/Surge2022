import React from "react";
import "./TeamMember.scss";

export default function TeamMember(props) {
  return (
    <div className="TeamCard">
      <img src="/Img/team.svg" className="TeamCard__img" />
      <p className="TeamCard__name"> {props.name}</p>
      <p className="TeamCard__description"> Web Dev Team Lead</p>
    </div>
  );
}
