import React from "react";

// import "../styles/routes/Home.scss";
import EventCard from "../Components/EventCard/EventCard";
import SubDetails from "../Components/SubDetails/SubDetails";
import EventGist from "../Components/EventGist/EventGist";
import TeamMember from "../Components/TeamMember/TeamMember";
import TeamGrid from "../Components/TeamGrid/TeamGrid";
import ScrollMenu from "../Components/ScrollMenu/ScrollableMenu";

export default function Demo() {
  return (
    <div
      style={{
        width: "100%",
        padding: "0",
        alignItems: "center",
      }}
    >
      <ScrollMenu />
    </div>
  );
}
