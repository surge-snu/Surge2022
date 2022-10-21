import { useEffect, useState } from "react";
import MySidebar from "../../Components/MySidebar/MySidebar";
import "../../styles/routes/My/My.scss";
import Header from "../../Components/Header/Header";
import { fetchUserData } from "../../services/user.server";
import { fetchAllEvents } from "../../services/events.server";
import { Cashify } from "../../utils/Cashify";
import { createPendingOrder } from "../../operations/event.fetch";
import DashTable from "../../Components/Table/DashTable/DashTable";
import DashHeader from "../../Components/Table/DashHeader/DashHeader";
import CartRow from "../../Components/CartRow/CartRow";
import DashRow from "../../Components/Table/DashRow/DashRow";
import Link from "next/link";
import Alert from "../../Components/Alert/Alert";
import GInput from "../../Components/GInput/GInput";
import BlurredSpinner from "../../Components/BlurredSpinner/BlurredSpinner";
import { customAlphabet } from "nanoid";
import { useRouter } from "next/router";

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

  const userData = await fetchUserData(context.req.session.user.email);
  return {
    props: { user: userData, allEvents },
  };
}
export default function MyCart({ user, allEvents }) {
  const [localTeams, setLocalTeams] = useState(
    user.Team.filter((team) => team.paymentStatus === "NOT_PAID").map(
      (event) => {
        return { ...event, isSelected: true };
      }
    )
  );

  const nanoid = customAlphabet("1234567890abcdef");
  const paymentId = nanoid(10);
  const router = useRouter();

  const [selectedCount, setSelectedCount] = useState(0);
  const [showPaymentPrompt, setShowPaymentPrompt] = useState(false);
  const [cartDropdown, setCartDropdown] = useState(false);
  const [orderId, setOrderId] = useState("");
  const [showHelpPrompt, setShowHelpPrompt] = useState(false);
  const [showLoader, setShowLoader] = useState(false);

  useEffect(() => {
    setSelectedCount(localTeams.filter((team) => team.isSelected).length);
  });

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
                padding: "10px 20px 20px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
              parentStyle={{
                height: "fit-content",
              }}
              contentCols={[
                <h3>Register Teams in the Events page</h3>,
                <Link href="/events">
                  <a className="MyCart__cartSection--link">Events</a>
                </Link>,
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
                    <span>{team.paymentStatus}</span>,
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

      {localTeams.filter((team) => !team.isSelected).length !== 0 && (
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
                      <span>{team.paymentStatus}</span>,
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
      )}
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
              setShowPaymentPrompt(true);
            }}
          >
            Pay Now
          </button>
        </div>
      )}
      {showPaymentPrompt && (
        <>
          {user.college !== "" && user.phone !== "" ? (
            <Alert height="auto" width="700px" setIsOpen={setShowPaymentPrompt}>
              {showLoader && <BlurredSpinner style={{ borderRadius: "7px" }} />}

              <div className="MyCart__alert">
                <div className="MyCart__alert--top">
                  <div className="MyCart__alert--left">
                    <h3>Details to fill</h3>
                    <GInput
                      value={user.name}
                      label="Name"
                      disabled
                      bgColor="#0f1621"
                    />
                    <GInput
                      value={user.email}
                      label="Email"
                      disabled
                      bgColor="#0f1621"
                    />
                    <GInput
                      value={user.college}
                      label="College"
                      disabled
                      bgColor="#0f1621"
                    />
                    <GInput
                      value={paymentId}
                      label="Payment Id"
                      disabled
                      bgColor="#0f1621"
                    />
                    <span>
                      <h4>Amount:</h4>
                      <h4>
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
                      </h4>
                    </span>
                  </div>
                  <div className="MyCart__alert--right">
                    <img src="/Img/Paytm.png" alt="https://paytm.me/T-d1kU8" />
                    <span>(or)</span>
                    <Link href="https://paytm.me/T-d1kU8">
                      <a className="MyCart__alert--bottom2" target="_blank" referrerPolicy="no-referrer">
                        https://paytm.me/T-d1kU8 &#129109;
                      </a>
                    </Link>
                  </div>
                </div>
                <h3 className="MyCart__alert--middle">
                  Scan this QR code <span>&gt;</span> Fill in details given
                  above <span>&gt;</span> Type in the 18 digit Order Id
                </h3>
                <form
                  className="MyCart__alert--bottom"
                  onSubmit={async (e) => {
                    e.preventDefault();
                    setShowLoader(true);
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

                    const res = await createPendingOrder({
                      paySplit,
                      playerOrderId: orderId,
                      paymentId,
                    });

                    if (res.status === 200) {
                      setShowLoader(false);
                      setShowPaymentPrompt(false);
                      router.replace("/my/events");
                    }
                  }}
                >
                  <GInput
                    setValue={(e) => setOrderId(e.target.value)}
                    label="Order ID"
                    bgColor="#0f1621"
                  />
                  <button type="submit">Finish Payment</button>
                </form>
                <div
                  className="MyCart__alert--bottom2"
                  onClick={() => setShowHelpPrompt(true)}
                >
                  Where do I get the order Id?
                </div>
                {showHelpPrompt && (
                  <Alert
                    setIsOpen={setShowHelpPrompt}
                    height="auto"
                    width="700px"
                  >
                    <span className="MyCart__alert--bottom2Alert">
                      <img src="/Img/GuideImage.jpeg" />
                      Eg: 20221016 0309020085
                    </span>
                  </Alert>
                )}
              </div>
            </Alert>
          ) : (
            <Alert height="300px" width="500px">
              <div className="MyCart__emptyCollege">
                <img alt="Error" src="/Img/Red Exclamation.svg" height={14} />
                <h2>
                  College name and phone number needs to be updated before
                  paying!
                </h2>
                <p>Go to you dashboard and update now</p>
                <Link href="/my/home">
                  <a>Dashboard</a>
                </Link>
              </div>
            </Alert>
          )}
        </>
      )}

      {(user.college === "" || user.phone === "") && (
        <Alert height="300px" width="500px" showClose={false}>
          <div className="MyCart__emptyCollege">
            <img alt="Error" src="/Img/Red Exclamation.svg" height={14} />
            <h2>
              College name and phone number needs to be updated before paying!
            </h2>
            <p>Go to you dashboard and update now</p>
            <Link href="/my/home">
              <a>Dashboard</a>
            </Link>
          </div>
        </Alert>
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
