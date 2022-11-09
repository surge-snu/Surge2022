import { useState } from "react";
import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";
import "../styles/routes/Team.scss";
import details from "../public/json/Surge_team_details.json";

export async function getServerSideProps(context) {
  return {
    props: {
      currentPath: context.req.url,
    },
  };
}

export default function Team() {
  const teams = [
    "All",
    "Core",
    "Web Dev",
    "Marketing",
    "Design",
    "Content",
    "Videography",
    "Public Relations",
    "Sponsorship",
  ];
  const [team, setTeam] = useState(teams[0]);
  const members = details;

  return (
    <div className="TeamPage__container">
      <div className="TeamPage__content">
        <p className="TeamPage__heading">
          MEET THE{" "}
          <span className="TeamPage__heading--green">
            TEAM
            <br /> BEHIND
          </span>{" "}
          THE MAGIC
        </p>
        <p className="TeamPage__desc">
          {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit. */}
        </p>
        <div className="TeamPage__categories">
          {teams.map((t, i) => (
            <button
              key={i}
              className={`TeamPage__category ${
                team === t ? "TeamPage__category--active" : ""
              }`}
              onClick={() => setTeam(t)}
            >
              {t}
            </button>
          ))}
        </div>
      </div>
      <div className="TeamPage__grid">
        {members
					.filter((member) => team === teams[0] || member["team"].includes(team))
          .sort((a, b) => (a["name"] > b["name"] ? -1 : 1))
          .sort((a, b) => (a["role"] == "Team Lead" ? -1 : 1))
					.sort((a, b) => (a["team"] == "Core" ? -1 : 1))
          .map((member, index) => (
            <div className="TeamPage__card" key={member.Username}>
              <img
                alt={member["name"]}
                src={member["file"]}
                className="TeamPage__cardImg"
                loading="lazy"
              />
              <p className="TeamPage__cardName"> {member["name"]}</p>
              <p className="TeamPage__cardDesc">{member["role"]}</p>
            </div>
          ))}
      </div>
    </div>
  );
}

Team.getLayout = function getLayout(page) {
  return (
    <div className="TeamPage">
      <Header currentPath={page.props.currentPath} />
      {page}
      <Footer />
    </div>
  );
};
