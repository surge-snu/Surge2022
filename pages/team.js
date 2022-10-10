import React from "react";
import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";
import "../styles/routes/Team.scss";

export async function getServerSideProps(context) {
  return {
    props: {
      currentPath: context.req.url,
    },
  };
}

export default function Team() {
	
	const teams = ["All", "Content", "Marketing", "Design", "PR & Sponsorship", "Web Development"];
	const [team, setTeam] = React.useState(teams[0]);
	
	let members = [...Array(20).keys()]
		.map((v) => (
			{
				"name": "Dark Lord " + v,
				"position": "Web Development Lead",
				"team": teams[(v % 5) + 1],
			}
		));
	
	
  return (
    <div className="TeamPage__container">
      <div className="TeamPage__content">
        <p className="TeamPage__heading">
          MEET THE{" "}
          <span className="TeamPage__heading--green">
            TEAM<br /> BEHIND
          </span>{" "}
          THE MAGIC
        </p>
        <p className="TeamPage__desc">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
				<div className="TeamPage__categories">
					{teams.map((t, i) => (
						<button
							className={`TeamPage__category ${team === t ? "TeamPage__category--active" : ""}`}
							onClick={() => setTeam(t)}
						>{t}</button>
					))}
        </div>
      </div>
      <div className="TeamPage__grid">
				{members
					.filter((member) => team === teams[0] || member.team === team)
					.map((member) => (
						<div className="TeamPage__card">
							<img src="/Img/team.svg" className="TeamPage__cardImg" />
							<p className="TeamPage__cardName"> {member["name"]}</p>
							<p className="TeamPage__cardDesc">{member["position"]}</p>
						</div>
					))
				}
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
