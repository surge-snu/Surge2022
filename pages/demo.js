import React from "react";

// import "../styles/routes/Home.scss";
import EventCard from "../Components/EventCard/EventCard";
import SubDetails from "../Components/SubDetails/SubDetails";
import EventGist from "../Components/EventGist/EventGist";
export default function Demo() {
  return (
		<div style={{
			width: "100%",
			padding: "0",
			alignItems: "flex-start",
		}}>
      <EventGist />
    </div>
  );
}
