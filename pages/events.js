<<<<<<< HEAD
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
=======
import Head from "next/head";
import EventCard from '../Components/EventCard/EventCard';
import Header from '../Components/Header/Header';
import '../styles/routes/Events.scss';

export default function Events() {
	
	return (
		<>
			<Head>
        <title>Surge 2022</title>
        <meta name="description" content="Awesome website for Surge" />
        <link rel="icon" href="/Img/Sports icon.png" />
      </Head>
			<div className="EventsPage">
				<Header />
				<div class="Events">
					<div className="Events__top">
						<h1 className="Events__top--title">LOREM <span>IPSUM</span>
							<br />DOLOR SIT AMET</h1>
						<p className="Events__top--desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud</p>
					</div>
					<div className="Events__mid">
						<div className="Events__mid--searchbox">
							<input type="text"
								className="Events__mid--input"
								placeholder="Try Searching Football" />
						</div>
					</div>
					<div className="Events__bottom">
						<div className="Events__bottom--title">
							<h3>Upcoming Events</h3>
						</div>
						<div className="Events__bottom--cards">
							{
								[...Array(10).keys()].map(i => (
									<EventCard />
								))
							}
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
>>>>>>> d9d90b3e36ed89741ba85d290d8944d6a810109e
