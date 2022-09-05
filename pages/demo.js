import React from "react";
import InvitationWidget from "../Components/InvitationWidget/InvitationWidget";
import { sendInvitationOps } from "../operations/invitation.fetch";
import { fetchAllUsers } from "../services/user.server";
import "../styles/routes/Home.scss";

export async function getServerSideProps(context) {
  if (context.req.session.user === undefined) {
    return {
      props: {
        user: null,
      },
    };
  }

  const allUsers = await fetchAllUsers();
  return {
    props: { user: context.req.session.user, allUsers },
  };
}
export default function Demo({ user, allUsers }) {
  const [player, setPlayer] = React.useState("");

  const eventId = "ef0bec37-83e7-43c5-b92a-6d16a8bf2120";

  // React.useEffect(() => {
  //   if (player !== "") {
  //     const results = allUsers.filter((user) => {
  //       return user.name.toLowerCase().includes(player.toLowerCase());
  //     });
  //     setPossibleResults(results);
  //   } else {
  //     setPossibleResults([]);
  //   }
  // }, [player]);

  return (
    <main className="DemoPage">
      <h2>{user.name}</h2>
      <InvitationWidget
        allUsers={allUsers}
        maxPlayers={6}
        minPlayers={2}
        user={user}
        eventId={eventId}
      />
      {/* <h1>
        {user !== null ? (
          <p>
            Hello {user.email} - {user.id}
          </p>
        ) : (
          <a href="#login">Login</a>
        )}
      </h1>

      <div className="InvitePlayer">
        {invitedPlayers.map((player, index) => {
          return (
            <div key={index}>
              <p>{player.name}</p>
              <button
                onClick={() => {
                  const newInvitedPlayers = [...invitedPlayers];
                  newInvitedPlayers.splice(index, 1);
                  setInvitedPlayers(newInvitedPlayers);
                }}
              >
                Remove
              </button>
            </div>
          );
        })}
        {invitedPlayers.length > 0 && (
          <button
            onClick={async () => {
              const data = invitedPlayers.map((player) => {
                return {
                  eventId,
                  toId: player.id,
                  fromId: user.id,
                };
              });

              await sendInvitationOps(data).then((res) => console.log(res));
            }}
          >
            Send Invitations
          </button>
        )}
        <br />
        <input
          style={{ color: "black" }}
          onChange={(e) => setPlayer(e.target.value)}
        />
        <ul>
          {possibleResults
            .filter((result) => {
              return !invitedPlayers.includes(result);
            })
            .map((result, index) => {
              return (
                <li
                  key={index}
                  onClick={() => {
                    setInvitedPlayers([...invitedPlayers, result]);
                    setPlayer("");
                  }}
                >
                  {result.name} - {result.email}
                </li>
              );
            })}
        </ul>
      </div> */}
    </main>
  );
}
