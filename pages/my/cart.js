import React from "react";
import MySidebar from "../../Components/MySidebar/MySidebar";
import "../../styles/routes/My/My.scss";
import Header from "../../Components/Header/Header";
import { fetchUserData } from "../../services/user.server";
import {
  fetchAllEvents,
  updatePaymentStatus,
} from "../../services/events.server";
import { Cashify } from "../../utils/Cashify";
import { payForCart } from "../../operations/event.fetch";

export async function getServerSideProps(context) {
  if (context.req.session.user === undefined) {
    return {
      redirect: {
        permanent: false,
        destination: "/my",
      },
    };
  }

  let allEvents = await fetchAllEvents();
  allEvents = allEvents.map((event) => {
    delete event.rules;
    return event;
  });

  let userData = await fetchUserData(context.req.session.user.email);

  let recordsToUpdate = [];

  userData.Team.forEach((team) => {
    if (team.PaymentDetails.length > 0 && team.paymentStatus === "NOT_PAID") {
      recordsToUpdate.push(team.teamId);
    }
  });

  await updatePaymentStatus(recordsToUpdate);
  userData = await fetchUserData(context.req.session.user.email);
  return {
    props: { user: userData, allEvents },
  };
}
export default function MyCart({ user, allEvents }) {
  console.log(user);
  const [localTeams, setLocalTeams] = React.useState(
    user.Team.filter((team) => team.paymentStatus === "NOT_PAID").map(
      (event) => {
        return { ...event, isSelected: false };
      }
    )
  );

  return (
    <div className="MyCart">
      <div className="MyCart__cartSection">
        <h2>Selected for payment</h2>
        {localTeams
          .filter((team) => team.isSelected)
          .map((team) => {
            const event = allEvents.find(
              (event) => event.eventId === team.eventId
            );
            return (
              <div
                className="MyCart__team"
                key={team.teamId}
                style={{
                  width: "100%",
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr 1fr 1fr",
                  gap: "1rem",
                  gridTemplateRows: `repeat(${team.length}, 1fr)`,
                }}
              >
                <input
                  type="checkbox"
                  checked={team.isSelected}
                  onChange={() => {
                    setLocalTeams(
                      localTeams.map((localTeam) => {
                        if (localTeam.teamId === team.teamId) {
                          return {
                            ...localTeam,
                            isSelected: !localTeam.isSelected,
                          };
                        }
                        return localTeam;
                      })
                    );
                  }}
                />
                <span>{team.teamId}</span>
                <span>{event.eventName}</span>
                <span>
                  {team.paymentStatus === "NOT_PAID" ? "Not Paid" : "Paid"}
                </span>
                <span>
                  {team.TeamMembers.length}/{event.maxPlayers}
                </span>
                <span>{Cashify(event.pricePerPlayer)}</span>
                <span>
                  {Cashify(
                    team.TeamMembers.reduce((acc, _) => {
                      return acc + event.pricePerPlayer;
                    }, 0)
                  )}
                </span>
              </div>
            );
          })}

        <div>
          <h2>Total</h2>
          <span>
            {Cashify(
              localTeams
                .filter((team) => team.isSelected)
                .reduce((acc, team) => {
                  const event = allEvents.find(
                    (event) => event.eventId === team.eventId
                  );
                  return (
                    acc +
                    team.TeamMembers.reduce((acc, _) => {
                      return acc + event.pricePerPlayer;
                    }, 0)
                  );
                }, 0)
            )}
          </span>
          <button
            style={{
              width: "100%",
              height: "30px",
              backgroundColor: "#f9a826",
              color: "white",
              border: "none",
              borderRadius: "7px",
              fontSize: "18px",
              fontWeight: "bold",
              cursor: "pointer",
            }}
            onClick={() => {
              const paySplit = localTeams
                .filter((team) => team.isSelected)
                .map((team) => {
                  const event = allEvents.find(
                    (event) => event.eventId === team.eventId
                  );
                  return {
                    teamId: team.teamId,
                    amount: team.TeamMembers.reduce((acc, _) => {
                      return acc + event.pricePerPlayer;
                    }, 0),
                  };
                });

              const res = payForCart({ paySplit });
              if (res.status === 200) {
                window.location.reload();
              }
            }}
          >
            Pay Now
          </button>
        </div>
      </div>
      <div className="MyCart__cartSection">
        <h2>Cart Content</h2>
        {localTeams
          .filter((team) => !team.isSelected)
          .map((team) => {
            const event = allEvents.find(
              (event) => event.eventId === team.eventId
            );
            return (
              <div
                className="MyCart__team"
                key={team.teamId}
                style={{
                  width: "100%",
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr 1fr 1fr",
                  gap: "1rem",
                  gridTemplateRows: `repeat(${team.length}, 1fr)`,
                }}
              >
                <input
                  type="checkbox"
                  checked={team.isSelected}
                  onChange={() => {
                    setLocalTeams(
                      localTeams.map((localTeam) => {
                        if (localTeam.teamId === team.teamId) {
                          return {
                            ...localTeam,
                            isSelected: !localTeam.isSelected,
                          };
                        }
                        return localTeam;
                      })
                    );
                  }}
                />
                <span>{team.teamId}</span>
                <span>{event.eventName}</span>
                <span>
                  {team.paymentStatus === "NOT_PAID" ? "Not Paid" : "Paid"}
                </span>
                <span>
                  {team.TeamMembers.length}/{event.maxPlayers}
                </span>
                <span>{Cashify(event.pricePerPlayer)}</span>
                <span>
                  {Cashify(
                    team.TeamMembers.reduce((acc, _) => {
                      return acc + event.pricePerPlayer;
                    }, 0)
                  )}
                </span>
              </div>
            );
          })}
      </div>
    </div>
  );
}

MyCart.getLayout = function getLayout(page) {
  return (
    <div className="MyLayout">
      <Header
        isSmall={true}
        currentPath="profile"
        style={{
          borderBottom: "1px solid #878a90",
          zIndex: 0,
          justifyContent: "right",
        }}
        isSidebar={false}
      />
      <MySidebar user={page.props.user} />
      <div className="MyLayout__page">{page}</div>
    </div>
  );
};
