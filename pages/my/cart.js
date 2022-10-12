import React, { useEffect } from "react";
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
import DashTable from "../../Components/Table/DashTable/DashTable";
import DashHeader from "../../Components/Table/DashHeader/DashHeader";
import CartRow from "../../Components/CartRow/CartRow";
import DashRow from "../../Components/Table/DashRow/DashRow";

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
  const [localTeams, setLocalTeams] = React.useState(
    user.Team.filter((team) => team.paymentStatus === "NOT_PAID").map(
      (event) => {
        return { ...event, isSelected: false };
      }
    )
  );

  const [selectedCount, setSelectedCount] = React.useState(0);

  useEffect(() => {
    setSelectedCount(localTeams.filter((team) => team.isSelected).length);
  }, [localTeams]);

  const [cartDropdown, setCartDropdown] = React.useState(false);

  return (
    <div className="MyCart">
      <div className="MyCart__cartSection">
        <h2>Selected for payment</h2>
        <DashTable>
          <DashHeader
            headerTitles={["Game", "Payment", "Cost", "Total", "Action"]}
            className="DashHeaderWrapper--cart"
            useClass={true}
            isTitle={false}
          />
          {selectedCount === 0 && (
            <DashRow
              isDropDown={false}
              index={0}
              style={{
                gridTemplateColumns: "auto",
                justifyContent: "center",
                height: "fit-content",
                padding: "0 20px",
              }}
              parentStyle={{
                height: "fit-content",
              }}
              contentCols={[
                <h3>Select Teams from the Registered Teams to make payment</h3>,
              ]}
            />
          )}
          {localTeams
            .filter((team) => team.isSelected)
            .map((team, index) => {
              const event = allEvents.find(
                (event) => event.eventId === team.eventId
              );
              return (
                <CartRow
                  className="MyCart__team"
                  key={team.teamId}
                  index={index}
                  dropdownIndex={cartDropdown}
                  style={{ padding: "0 20px" }}
                  setDropdownIndex={setCartDropdown}
                  isDropDown={true}
                  contentCols={[
                    <span>{event.eventName}</span>,
                    <span>
                      {team.paymentStatus === "NOT_PAID" ? "Not Paid" : "Paid"}
                    </span>,
                    <span>
                      {team.TeamMembers.length} x{" "}
                      {Cashify(event.pricePerPlayer)}
                    </span>,
                    <span>
                      {Cashify(
                        team.TeamMembers.reduce((acc, _) => {
                          return acc + event.pricePerPlayer;
                        }, 0)
                      )}
                    </span>,
                    <button
                      className="MyCart__team--removeButton"
                      onClick={() => {
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
                    >
                      {team.isSelected ? "Remove" : "Add to cart"}
                    </button>,
                  ]}
                >
                  <span>Team ID: {team.teamId}</span>
                  <span>
                    Number of players: {team.TeamMembers.length}/
                    {event.maxPlayers}
                  </span>
                  <h4>Team Members</h4>
                  <ul>
                    {team.TeamMembers.map((member, index) => (
                      <li key={index}>
                        {member.name} ({member.playerType})
                      </li>
                    ))}
                  </ul>
                  <div className="MyCart__team--action">
                    <button
                      className="MyCart__team--removeButton"
                      onClick={() => {
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
                    >
                      {team.isSelected ? "Remove" : "Add to cart"}
                    </button>
                  </div>
                </CartRow>
              );
            })}
        </DashTable>
      </div>
      <div className="MyCart__cartSection">
        <h2>Registered Teams</h2>
        <DashTable>
          <DashHeader
            headerTitles={["Game", "Payment", "Cost", "Total", "Action"]}
            className="DashHeaderWrapper--cart"
            useClass={true}
            isTitle={false}
          />

          {localTeams
            .filter((team) => !team.isSelected)
            .map((team, index) => {
              const event = allEvents.find(
                (event) => event.eventId === team.eventId
              );
              return (
                <CartRow
                  className="MyCart__team"
                  key={team.teamId}
                  index={index}
                  dropdownIndex={cartDropdown}
                  style={{ padding: "0 20px" }}
                  setDropdownIndex={setCartDropdown}
                  isDropDown={true}
                  contentCols={[
                    <span>{event.eventName}</span>,
                    <span>
                      {team.paymentStatus === "NOT_PAID" ? "Not Paid" : "Paid"}
                    </span>,
                    <span>
                      {team.TeamMembers.length} x{" "}
                      {Cashify(event.pricePerPlayer)}
                    </span>,
                    <span>
                      {Cashify(
                        team.TeamMembers.reduce((acc, _) => {
                          return acc + event.pricePerPlayer;
                        }, 0)
                      )}
                    </span>,
                    <button
                      className="MyCart__team--addButton"
                      onClick={() => {
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
                    >
                      {team.isSelected ? "Remove from cart" : "Add to cart"}
                    </button>,
                  ]}
                >
                  <span>Team ID: {team.teamId}</span>
                  <span>
                    Number of players: {team.TeamMembers.length}/
                    {event.maxPlayers}
                  </span>
                  <h4>Team Members</h4>
                  <ul>
                    {team.TeamMembers.map((member, index) => (
                      <li key={index}>
                        {member.name} ({member.playerType})
                      </li>
                    ))}
                  </ul>
                  <div className="MyCart__team--action">
                    <button
                      className="MyCart__team--addButton"
                      onClick={() => {
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
                    >
                      {team.isSelected ? "Remove from cart" : "Add to cart"}
                    </button>
                  </div>
                </CartRow>
              );
            })}
        </DashTable>
      </div>

      {selectedCount > 0 && (
        <div className="MyCart__CheckoutBox">
          <div className="MyCart__CheckoutBox--left">
            <h2>Grand Total: </h2>
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
              ) + "/-"}
            </span>
          </div>
          <button
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
      )}
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
