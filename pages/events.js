import React from "react";
import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";
import { fetchAllEvents } from "../services/events.server";
import "../styles/routes/AllEvents.scss";

export async function getServerSideProps(context) {
  let allEvents = await fetchAllEvents();
  allEvents = allEvents.map((event) => {
    event.timeFrom = event.timeFrom.toString();
    event.timeTo = event.timeTo.toString();
    event.dateFrom = event.dateFrom.toString();
    event.dateTo = event.dateTo.toString();
    return event;
  });

  if (context.req.session.user === undefined) {
    return {
      props: {
        user: null,
        allEvents,
      },
    };
  }

  return {
    props: { user: context.req.session.user, allEvents },
  };
}

export default function AllEvents({ allEvents }) {
  return (
    <div className="AllEventsPage">
      <Header />
      {allEvents.map((event, index) => {
        return (
          <a key={index} href={`/event/${event.eventId}`}>
            {event.eventName} - {event.eventId}
          </a>
        );
      })}
      <Footer />
    </div>
  );
}
