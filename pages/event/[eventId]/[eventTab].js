import Link from "next/link";
import { useState } from "react";
import EventGist from "../../../Components/EventGist/EventGist";
import EventTabs from "../../../Components/EventTabs/EventTabs";
import Footer from "../../../Components/Footer/Footer";
import Header from "../../../Components/Header/Header";
import RegistrationForm from "../../../Components/RegistrationForm/RegistrationForm";
import RegistrationSuccess from "../../../Components/RegistrationSuccess/RegistrationSuccess";
import RegistrationSummary from "../../../Components/RegistrationSummary/RegistrationSummary";
import RegistrationTimeline from "../../../Components/RegistrationTimeline/RegistrationTimeline";
import Schedule from "../../../Components/Schedule/Schedule";
import useAuth from "../../../hooks/useAuth";
import { fetchEvent } from "../../../services/events.server";
import "../../../styles/routes/Events/Event.scss";
import { Cashify } from "../../../utils/Cashify";
import rules from "../../../public/json/rules.json"

export async function getServerSideProps(context) {
  const { eventId, eventTab } = context.query;
  const closedEvents = ["feca5ee"]
  if(closedEvents.includes(eventId) && eventTab==="register"){
    return {
      redirect: {
        permanent: false,
        destination: `/event/${eventId}/overview`,
      },
    };
  }

	let eventDetails = await fetchEvent(eventId);
	let generalRules = rules["general"];

  if (eventDetails === null) {
    return {
      redirect: {
        permanent: false,
        destination: "/events",
      },
    };
  }

  if (context.req.session.user === undefined) {
    if (eventTab === "register") {
      return {
        redirect: {
          permanent: false,
          destination: "overview#login",
        },
      };
    }

    return {
      props: {
        user: null,
        eventDetails: eventDetails,
        eventTab: eventTab,
				currentPath: context.req.url,
				generalRules: generalRules,
      },
    };
  }

  return {
    props: {
      user: context.req.session.user,
      eventDetails: eventDetails,
      eventTab: eventTab,
			currentPath: context.req.url,
			generalRules: generalRules,
    },
  };
}

export default function EventTabContent({ eventDetails, eventTab, user, generalRules }) {
  const { tempTeamDetails, setTempTeamDetails } = useAuth();
  const [teamDetails, setTeamDetails] = useState(tempTeamDetails);
  

  const [registerStage, setRegisterStage] = useState("Details");

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
                  <span
                    className="markdownBody"
                    dangerouslySetInnerHTML={{
                      __html: eventDetails.rules
                        .replaceAll("breeze", "Surge")
                        .replaceAll("Breeze", "Surge")
                        .replaceAll("BREEZE", "Surge"),
                    }}
                  />
                </div>
              </div>
              <EventGist
                className="EventPage__container--right"
                eventDetails={eventDetails}
                from={eventDetails.dateFrom}
                venue={eventDetails.venue}
                event={eventDetails}
                price={eventDetails.pricePerPlayer}
              />
            </div>
          </>
				);
			case "general":
				return (
          <>
            <div className="EventPage__container--content">
              <div className="EventPage__container--left">
                <div className="EventPage__container--header">
                  <h2>General Rules</h2>
                  <hr />
                </div>
                <div className="EventPage__container--overview">
                  <span
                    className="markdownBody"
                    dangerouslySetInnerHTML={{
                      __html: generalRules
											}}
                  />
                </div>
              </div>
              <EventGist
                className="EventPage__container--right"
                eventDetails={eventDetails}
                from={eventDetails.dateFrom}
                venue={eventDetails.venue}
                event={eventDetails}
                price={eventDetails.pricePerPlayer}
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
                  <Schedule
                    data={{
                      "Registration Starts": eventDetails.dateFrom,
                      "Registration Ends": eventDetails.dateTo,
                      "Event Starts": eventDetails.dateFrom,
                      "Event Ends": eventDetails.dateTo,
                    }}
                  />
                </div>
              </div>
              <EventGist
                className="EventPage__container--right"
                eventDetails={eventDetails}
                from={eventDetails.dateFrom}
                venue={eventDetails.venue}
                event={eventDetails}
                price={eventDetails.pricePerPlayer}
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
                    Winner Prize per athlete:{" "}
                    {Cashify(eventDetails.winnerPrize)}
                    <br />
                    Runner Up Prize per athlete:{" "}
                    {Cashify(eventDetails.runnerUpPrize)}
                  </p>

                  <p>
                    Winner Team prize: {Cashify(eventDetails.winningTeamPrize)}
                    <br />
                    Runner Up Team prize:{" "}
                    {Cashify(eventDetails.runnerUpTeamPrize)}
                  </p>
                </div>
              </div>
              <EventGist
                className="EventPage__container--right"
                eventDetails={eventDetails}
                from={eventDetails.dateFrom}
                venue={eventDetails.venue}
                event={eventDetails}
                price={eventDetails.pricePerPlayer}
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
              <div className="EventPage__register">
                <RegistrationTimeline
                  tabs={["Details", "Summary"]}
                  currentTab={registerStage}
                />

                {registerStage === "Details" && (
                  <RegistrationForm
                    minPlayers={eventDetails.minPlayers}
                    maxPlayers={eventDetails.maxPlayers}
                    eventId={eventDetails.eventId}
                    onSubmitForm={(formData) => {
                      setTeamDetails(formData);
                      setTempTeamDetails(formData);
                      setRegisterStage("Summary");
                    }}
                    user={user}
                  />
                )}
                {registerStage === "Summary" && (
                  <RegistrationSummary
                    user={user}
                    formData={teamDetails}
                    eventId={eventDetails.eventId}
                    setRegisterStage={setRegisterStage}
                  />
                )}

                {registerStage === "Success" && <RegistrationSuccess />}
              </div>
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
          <a aria-label="Go to events page">EVENTS</a>
        </Link>
        <img
          alt="arrow right"
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
