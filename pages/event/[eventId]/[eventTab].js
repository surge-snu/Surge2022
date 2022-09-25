import Link from "next/link";
import { useRouter } from "next/router";
import EventGist from "../../../Components/EventGist/EventGist";
import EventTabs from "../../../Components/EventTabs/EventTabs";
import Footer from "../../../Components/Footer/Footer";
import Header from "../../../Components/Header/Header";
import InvitationWidget from "../../../Components/InvitationWidget/InvitationWidget";
import Schedule from "../../../Components/Schedule/Schedule";
import { fetchEvent } from "../../../services/events.server";
import { fetchAllUsers } from "../../../services/user.server";
import "../../../styles/routes/Events/Event.scss";

export async function getServerSideProps(context) {
  const { eventId, eventTab } = context.query;
  let eventDetails = await fetchEvent(eventId);

  if (eventDetails === null) {
    return {
      redirect: {
        permanent: false,
        destination: "/events",
      },
    };
  }

  eventDetails.timeFrom = eventDetails.timeFrom.toString();
  eventDetails.timeTo = eventDetails.timeTo.toString();
  eventDetails.dateFrom = eventDetails.dateFrom.toString();
  eventDetails.dateTo = eventDetails.dateTo.toString();

  if (context.req.session.user === undefined) {
    return {
      props: {
        user: null,
        eventDetails: eventDetails,
        eventTab: eventTab,
        currentPath: context.req.url,
      },
    };
  }

  const allUsers = await fetchAllUsers();
  return {
    props: {
      user: context.req.session.user,
      eventDetails: eventDetails,
      allUsers,
      eventTab: eventTab,
      currentPath: context.req.url,
    },
  };
}

export default function EventTabContent({ eventDetails, allUsers, eventTab }) {
  function switchContent(route) {
    switch (route) {
      case "overview":
        return (
          <>
            <div className="EventPage__container--content">
              <div className="EventPage__container--left">
                <div className="EventPage__container--header">
                  <h2>{eventTab}</h2>
                  <hr />
                </div>
                <div className="EventPage__container--overview">
                  <h3>Rules and Guidelines</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                    et massa mi. Aliquam in hendrerit urna. Pellentesque sit
                    amet sapien fringilla, mattis ligula consectetur, ultrices
                    mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet
                    augue. Vestibulum auctor ornare leo, non suscipit magna
                    interdum eu. Curabitur pellentesque nibh nibh, at maximus
                    ante fermentum sit amet. Pellentesque commodo lacus at
                    sodales sodales. Quisque sagittis orci ut diam condimentum,
                    vel euismod erat placerat. In iaculis arcu eros, eget tempus
                    orci facilisis id.Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna.
                    Pellentesque sit amet sapien fringilla, mattis ligula
                    consectetur, ultrices mauris. Maecenas vitae mattis tellus.
                    Nullam quis imperdiet augue. Vestibulum auctor ornare leo,
                    non suscipit magna interdum eu.
                  </p>
                  {/* <pre>{JSON.stringify(eventDetails, null, 2)}</pre> */}
                </div>
              </div>
              <EventGist
                className="EventPage__container--right"
                eventDetails={eventDetails}
              />
            </div>
          </>
        );
      case "schedule":
        return (
          <>
            <div className="EventPage__container--content">
              <div className="EventPage__container--left">
                <div className="EventPage__container--header">
                  <h2>{eventTab}</h2>
                  <hr />
                </div>
                <div className="EventPage__container--schedule">
                  <Schedule />
                </div>
              </div>
              <EventGist
                className="EventPage__container--right"
                eventDetails={eventDetails}
              />
            </div>
          </>
        );
      case "prizes":
        return (
          <>
            <div className="EventPage__container--content">
              <div className="EventPage__container--left">
                <div className="EventPage__container--header">
                  <h2>{eventTab}</h2>
                  <hr />
                </div>
                <div className="EventPage__container--prizes">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                    et massa mi. Aliquam in hendrerit urna. Pellentesque sit
                    amet sapien fringilla, mattis ligula consectetur, ultrices
                    mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet
                    augue. Vestibulum auctor ornare leo, non suscipit magna
                    interdum eu. Curabitur pellentesque nibh nibh, at maximus
                    ante fermentum sit amet. Pellentesque commodo lacus at
                    sodales sodales. Quisque sagittis orci ut diam condimentum,
                    vel euismod erat placerat. In iaculis arcu eros, eget tempus
                    orci facilisis id.
                  </p>
                  <p>
                    Nullam quis imperdiet augue. Vestibulum auctor ornare leo,
                    non suscipit magna interdum eu. Curabitur pellentesque nibh
                    nibh, at maximus ante fermentum sit amet. Pellentesque
                    commodo lacus at sodales sodales. Quisque sagittis orci ut
                    diam condimentum, vel euismod erat placerat. In iaculis arcu
                    eros, eget tempus orci facilisis id.
                  </p>
                  <p>
                    Prizes up for grabs Rs 20000 for best use of IPFS and/or
                    Filecoin
                  </p>
                </div>
              </div>
              <EventGist
                className="EventPage__container--right"
                eventDetails={eventDetails}
              />
            </div>
          </>
        );
      case "register":
        return (
          <div className="EventPage__container--content">
            <div className="EventPage__container--middle">
              <div className="EventPage__container--header">
                <h2>{eventTab}</h2>
                <hr />
              </div>
              <InvitationWidget
                allUsers={allUsers}
                minPlayers={eventDetails.minPlayers}
                maxPlayers={eventDetails.maxPlayers}
                eventId={eventDetails.eventId}
              />
            </div>
          </div>
        );
    }
  }

  return <div className="EventPage__container">{switchContent(eventTab)}</div>;
}

EventTabContent.getLayout = function getLayout(page) {
  const eventDetails = page.props.eventDetails;

  return (
    <div className="EventPage">
      <Header
        currentPath={
          page.props.currentPath.split("/")[1] === "event" ? "events" : ""
        }
      />
      <div className="EventPage__header">
        <Link href="/events">
          <a>EVENTS</a>
        </Link>
        <img
          loading="lazy"
          width={20}
          className="Renegade__bottom--arrow"
          src="/Img/arrow-right.svg"
        />
        <p className="EventPage__header--green">
          {eventDetails.eventName.toUpperCase()}
        </p>
      </div>
      <EventTabs
        eventId={eventDetails.eventId}
        currentTab={page.props.eventTab}
      />
      {page}
      <Footer />
    </div>
  );
};
