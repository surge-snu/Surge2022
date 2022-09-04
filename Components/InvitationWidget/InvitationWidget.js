import React from "react";
import { sendInvitationOps } from "../../operations/invitation.fetch";

import "./InvitationWidget.scss";

function InvitationWidget({ allUsers, maxPlayers, minPlayers, eventId, user }) {
  const [searchPlayer, setSearchPlayer] = React.useState("");
  const [possibleResults, setPossibleResults] = React.useState([]);
  const [invitedPlayers, setInvitedPlayers] = React.useState([]);

  React.useEffect(() => {
    if (searchPlayer !== "") {
      const results = allUsers.filter((user) => {
        return user.name.toLowerCase().includes(searchPlayer.toLowerCase());
      });
      setPossibleResults(results);
    } else {
      setPossibleResults([]);
    }
  }, [searchPlayer]);

  return (
    <div className="InvitationWidgetWrapper">
      <div className="InvitationWidgetWrapper--top">
        {invitedPlayers.map((player, index) => {
          return (
            <span key={index} className="InvitationWidgetWrapper__chips">
              {player.name}
              <button
                onClick={() => {
                  const newInvitedPlayers = [...invitedPlayers];
                  newInvitedPlayers.splice(index, 1);
                  setInvitedPlayers(newInvitedPlayers);
                }}
              >
                &#10799;
              </button>
            </span>
          );
        })}
        <div className="InvitationWidgetWrapper__inputWrapper">
          <input
            className="InvitationWidgetWrapper__input"
            onChange={(e) => setSearchPlayer(e.target.value)}
            value={searchPlayer}
            disabled={invitedPlayers.length >= maxPlayers}
          />
          <span>{`${invitedPlayers.length}/${maxPlayers}`}</span>
        </div>
      </div>
      <ul className="InvitationWidgetWrapper__results">
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
                  setSearchPlayer("");
                }}
              >
                {result.name}
                <span>{result.email}</span>
              </li>
            );
          })}
      </ul>
      {invitedPlayers.length >= minPlayers &&
        invitedPlayers.length <= maxPlayers && (
          <button
            className="InvitationWidgetWrapper__sendInvites"
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
    </div>
  );
}

export default InvitationWidget;
