import { fetchEvent } from "../../services/events.server";

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

  return {
    props: { user: context.req.session.user, eventDetails: eventDetails },
  };
}

export default function EventPage({ eventDetails }) {
  return <pre>{JSON.stringify(eventDetails, null, 2)}</pre>;
}
