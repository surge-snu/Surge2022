export async function getServerSideProps(context) {
  return {
    redirect: {
      permanent: true,
      destination: `/events`,
    },
  };
}

export default function EventsIndex() {
  return <p>You are in an wrong page lol</p>;
}
