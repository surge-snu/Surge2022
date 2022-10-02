import EventCard from "../Components/EventCard/EventCard";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import { fetchAllEvents } from "../services/events.server";
import "../styles/routes/Events/Events.scss";
import ButtonGroup from "../Components/ButtonGroup/ButtonGroup";
import React from "react";

export async function getServerSideProps(context) {
  let allEvents = await fetchAllEvents();

  if (context.req.session.user === undefined) {
    return {
      props: {
        user: null,
        allEvents,
      },
    };
  }

  return {
    props: {
      user: context.req.session.user,
      allEvents: allEvents.sort((a, b) => (a.eventName > b.eventName ? 1 : -1)),
      currentPath: context.req.url,
    },
  };
}

export default function Events({ allEvents }) {
  const [allFilteredEvents, setAllFilteredEvents] = React.useState(allEvents);

  return (
    <div className="EventsPage__container">
      <div className="EventsPage__top">
        <h1 className="EventsPage__top--title">
          LOREM <span>IPSUM</span>
          <br />
          DOLOR SIT AMET
        </h1>
        <p className="EventsPage__top--desc">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud
        </p>
      </div>
      <div className="EventsPage__mid">
        <div className="EventsPage__mid--searchbox">
          <input
            type="text"
            className="EventsPage__mid--input"
            placeholder="Try Searching Football"
          />
        </div>
      </div>
      <div className="EventsPage__bottom">
        <div className="EventsPage__bottom--title">
          <h3>Upcoming Events</h3>
          <ButtonGroup
            onFilterChange={(filter) => {
              if (filter === "all") {
                setAllFilteredEvents(allEvents);
              }
              if (filter === "male") {
                setAllFilteredEvents(
                  allEvents.filter((item) => item.category === "MALE")
                );
              }
              if (filter === "female") {
                setAllFilteredEvents(
                  allEvents.filter((item) => item.category === "FEMALE")
                );
              }
              if (filter === "mixed") {
                setAllFilteredEvents(
                  allEvents.filter((item) => item.category === "MIXED")
                );
              }
            }}
          />
        </div>
        <div className="EventsPage__bottom--cards">
          {allFilteredEvents.map((event, index) => (
            <EventCard event={event} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}

Events.getLayout = function getLayout(page) {
  return (
    <div className="EventsPage">
      <Header currentPath={page.props.currentPath} />
      {page}
      <Footer />
    </div>
  );
};
