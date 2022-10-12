import Link from "next/link";
import { useState } from "react";
import Header from "../../Components/Header/Header";
import MySidebar from "../../Components/MySidebar/MySidebar";
import DashHeader from "../../Components/Table/DashHeader/DashHeader";
import DashRow from "../../Components/Table/DashRow/DashRow";
import DashTable from "../../Components/Table/DashTable/DashTable";
import { fetchUserData } from "../../services/user.server";
import "../../styles/routes/My/My.scss";
import { Cashify } from "../../utils/Cashify";

export async function getServerSideProps(context) {
  if (context.req.session.user === undefined) {
    return {
      redirect: {
        permanent: false,
        destination: "/my",
      },
    };
  }

  const userData = await fetchUserData(context.req.session.user.email);

  return {
    props: { user: userData },
  };
}
export default function MyEvents({ user }) {
  const [paidDropdownIndex, setPaidDropdownIndex] = useState(null);
  const [unpaidDropdownIndex, setUnpaidDropdownIndex] = useState(null);

  return (
    <main className="MyEvents">
      <DashTable title="Paid Events">
        <DashHeader headerTitles={["Game", "Payment Status"]} />
        {user.Team.filter((item) => item.paymentStatus === "PAID").map(
          (team, index) => (
            <DashRow
              key={team.teamId}
              setDropdownIndex={setPaidDropdownIndex}
              dropdownIndex={paidDropdownIndex}
              index={index}
              style={{ padding: "0 20px" }}
              contentCols={[
                <span>{team.Event.eventName}</span>,
                <span>
                  {team.paymentStatus === "PAID" ? (
                    <img src="/Img/Green Tick.svg" height={14} />
                  ) : (
                    <img src="/Img/Red Exclamation.svg" height={14} />
                  )}
                  <p>{team.paymentStatus === "PAID" ? "Paid" : "Not Paid"}</p>
                </span>,
              ]}
            >
              <hr />

              <span>Team ID: {team.teamId}</span>
              <span>Number of players: {team.TeamMembers.length}</span>
              <h4>Team Members</h4>
              <ul>
                {team.TeamMembers.map((member, index) => (
                  <li key={index}>
                    {member.name} ({member.playerType})
                  </li>
                ))}
              </ul>

              <h3>
                Cash Paid:{" "}
                {Cashify(
                  team.TeamMembers.reduce((acc, _) => {
                    return acc + team.Event.pricePerPlayer;
                  }, 0)
                )}
              </h3>
              <button className="MyHome__greenButton">Download Invoice</button>
            </DashRow>
          )
        )}
      </DashTable>
      <DashTable title="Un Paid Events">
        <DashHeader headerTitles={["Game", "Payment Status"]} />
        {user.Team.filter((item) => item.paymentStatus !== "PAID").map(
          (team, index) => (
            <DashRow
              key={team.teamId}
              setDropdownIndex={setUnpaidDropdownIndex}
              dropdownIndex={unpaidDropdownIndex}
              index={index}
              style={{ padding: "0 20px" }}
              contentCols={[
                <span>{team.Event.eventName}</span>,
                <span>
                  {team.paymentStatus === "PAID" ? (
                    <img src="/Img/Green Tick.svg" height={14} />
                  ) : (
                    <img src="/Img/Red Exclamation.svg" height={14} />
                  )}
                  <p>{team.paymentStatus === "PAID" ? "Paid" : "Not Paid"}</p>
                </span>,
              ]}
            >
              <hr />

              <span>Team ID: {team.teamId}</span>
              <span>Number of players: {team.TeamMembers.length}</span>
              <h4>Team Members</h4>
              <ul>
                {team.TeamMembers.map((member, index) => (
                  <li key={index}>
                    {member.name} ({member.playerType})
                  </li>
                ))}
              </ul>

              <h3>
                Cash Paid:{" "}
                {Cashify(
                  team.TeamMembers.reduce((acc, _) => {
                    return acc + team.Event.pricePerPlayer;
                  }, 0)
                )}
              </h3>
              <Link href="/my/cart">
                <a className="MyHome__greenButton">Pay now</a>
              </Link>
            </DashRow>
          )
        )}
      </DashTable>
    </main>
  );
}

MyEvents.getLayout = function getLayout(page) {
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
