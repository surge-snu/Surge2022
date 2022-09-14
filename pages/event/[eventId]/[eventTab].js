import { useRouter } from "next/router";
import EventTabs from "../../../Components/EventTabs/EventTabs";
import Footer from "../../../Components/Footer/Footer";
import Header from "../../../Components/Header/Header";
import { fetchEvent } from "../../../services/events.server";
import { fetchAllUsers } from "../../../services/user.server";
import "../../../styles/routes/Events/Event.scss";

export async function getServerSideProps(context) {
  const { eventId } = context.query;
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
      },
    };
  }

  const allUsers = await fetchAllUsers();
  return {
    props: {
      user: context.req.session.user,
      eventDetails: eventDetails,
      allUsers,
    },
  };
}

export default function EventTabContent({ eventDetails, allUsers }) {
  const router = useRouter();
  const { eventTab } = router.query;

  return eventTab;
}

EventTabContent.getLayout = function getLayout(page) {
  const eventDetails = page.props.eventDetails;
  return (
    <div className="EventPage">
      <Header />
      <div className="EventPage__header">
        <p>EVENTS</p>
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
      <EventTabs eventId={eventDetails.eventId} />
      {page}
      <Footer />
    </div>
  );
};
