export async function getServerSideProps(context) {
  const { eventId } = context.query;
  return {
    redirect: {
      permanent: false,
      destination: `/event/${eventId}/overview`,
    },
  };
}

export default function EventIndex() {
  return <p>You are in an wrong page lol</p>;
}
