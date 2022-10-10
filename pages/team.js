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
	
	const teams = ["all", "content", "marketing", "design", "pr", "webdev"];
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
    <>
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
					<button
						className={`TeamPage__category ${team === teams[0] ? "TeamPage__category--active" : ""}`}
						onClick={() => setTeam(teams[0])}
					>All</button>
					<button
						className={`TeamPage__category ${team === teams[1] ? "TeamPage__category--active" : ""}`}
						onClick={() => setTeam(teams[1])}
					>Content</button>
					<button
						className={`TeamPage__category ${team === teams[2] ? "TeamPage__category--active" : ""}`}
						onClick={() => setTeam(teams[2])}
					>Marketing</button>
					<button
						className={`TeamPage__category ${team === teams[3] ? "TeamPage__category--active" : ""}`}
						onClick={() => setTeam(teams[3])}
					>Design</button>
					<button
						className={`TeamPage__category ${team === teams[4] ? "TeamPage__category--active" : ""}`}
						onClick={() => setTeam(teams[4])}
					>PR & Sponsorship</button>
					<button
						className={`TeamPage__category ${team === teams[5] ? "TeamPage__category--active" : ""}`}
						onClick={() => setTeam(teams[5])}
					>Web Development</button>
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
    </>
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
