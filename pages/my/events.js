import React from "react";
import MySidebar from "../../Components/MySidebar/MySidebar";
import DashHeader from "../../Components/Table/DashHeader/DashHeader";
import DashRow from "../../Components/Table/DashRow/DashRow";
import DashTable from "../../Components/Table/DashTable/DashTable";
import { fetchUserData } from "../../services/user.server";
import "../../styles/routes/My/My.scss";

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

  const [eventsDropdownIndex, setEventsDropdownIndex] = React.useState(null);
  return (
    <main className="MyEvents">
      <DashTable title="Payment History">
        <DashHeader
          headerTitles={["Team ID", "Payment Status", "Player Count"]}
        />
        {user.Team.map((team, index) => (
          <DashRow
            key={team.teamId}
            setDropdownIndex={setEventsDropdownIndex}
            dropdownIndex={eventsDropdownIndex}
            index={index}
            contentCols={[
              <span>{team.eventId}</span>,
              <span>
                {team.paymentStatus === "PAID" ? (
                  <img src="/Img/Green Tick.svg" height={14} />
                ) : (
                  <img src="/Img/Red Exclamation.svg" height={14} />
                )}
                <p>{team.paymentStatus === "PAID" ? "Paid" : "Not Paid"}</p>
              </span>,
              <span>{team.TeamMembers.length}</span>,
            ]}
          >
            {team.TeamMembers.map((member) => (
              <div className="MyHome__ListTileItems">
                <p>{member.name}</p>{" - "}
                <p>{member.playerType}</p>
              </div>
            ))}

            <button className="MyHome__greenButton">Download Invoice</button>
          </DashRow>
        ))}
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
      <MySidebar />
      <div className="MyLayout__page">{page}</div>
    </div>
  );
};
