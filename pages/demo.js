import React from "react";
import InvitationWidget from "../Components/InvitationWidget/InvitationWidget";
import { fetchAllUsers } from "../services/user.server";
import "../styles/routes/Home.scss";

export async function getServerSideProps(context) {
  const allUsers = await fetchAllUsers();
  if (context.req.session.user === undefined) {
    return {
      props: {
        user: null,
        allUsers,
      },
    };
  }

  return {
    props: { user: context.req.session.user, allUsers },
  };
}
export default function Demo({ user, allUsers }) {
  const eventId = "ef0bec37-83e7-43c5-b92a-6d16a8bf2120";

  return (
    <main className="DemoPage">
      {user ? (
        <>
          <h2>{user.name}</h2>
          <InvitationWidget
            allUsers={allUsers}
            maxPlayers={6}
            minPlayers={2}
            user={user}
            eventId={eventId}
          />
        </>
      ) : (
        <a href="#login">Login</a>
      )}
    </main>
  );
}
