import React from "react";
import { fetchEvent } from "../../services/events.server";
import { fetchAllUsers } from "../../services/user.server";
import Head from "next/head";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import "../../styles/routes/Event.scss";
import InvitationWidget from "../../Components/InvitationWidget/InvitationWidget";

export async function getServerSideProps(context) {
  const { eventId } = context.query;
	let eventDetails = await fetchEvent(eventId);

  if (eventDetails === null) {
    return {
      redirect: {
        permanent: false,
        destination: "/events",
      },
    };
  }

  eventDetails.timeFrom = eventDetails.timeFrom.toString();
  eventDetails.timeTo = eventDetails.timeTo.toString();
  eventDetails.dateFrom = eventDetails.dateFrom.toString();
  eventDetails.dateTo = eventDetails.dateTo.toString();

  if (context.req.session.user === undefined) {
    return {
      props: {
        user: null,
				eventDetails: eventDetails,
      },
    };
	}
	
	const allUsers = await fetchAllUsers();
  return {
		props: {
			user: context.req.session.user,
			eventDetails: eventDetails,
			allUsers,
		},
  };
}

export default function EventPage({ eventDetails, allUsers}) {
	const [hash, setHash] = React.useState("");
	
	React.useEffect(() => {
		setHash(window.location.hash);
    window.addEventListener("hashchange", () => {
			setHash(window.location.hash);
    });
	}, []);
	
	function switchContent() {
		switch (hash) {
			case '#schedule':
				return <div className="EventPage__contentDiv">
					
				</div>;
			case '#prizes':
				return <div className="EventPage__contentDiv">
					<div className="EventPage__contentHeading">
						<h3>Prizes</h3>
						<div className="EventPage__contentHeading--divider"></div>
					</div>
					<div>
						<p>FILECOIN ?</p>
					</div>
					<div className="EventPage__content--prizes">
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at maximus ante fermentum sit amet. Pellentesque commodo lacus at sodales sodales. Quisque sagittis orci ut diam condimentum, vel euismod erat placerat. In iaculis arcu eros, eget tempus orci facilisis id.</p>
						<p>
							Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at maximus ante fermentum sit amet.
							Pellentesque commodo lacus at sodales sodales. Quisque sagittis orci ut diam condimentum, vel euismod erat placerat. In iaculis arcu eros, eget tempus orci facilisis id.
						</p>
						<p>
							Prizes up for grabs
							Rs 20000 for best use of IPFS and/or Filecoin
						</p>
					</div>
				</div>;
			case '#team':
				return <div className="EventPage__contentDiv">
					<div className="EventPage__contentHeading">
						<h3>Team</h3>
						<div className="EventPage__contentHeading--divider"></div>
					</div>
					<div className="EventPage__content--team">
						<InvitationWidget
							allUsers={allUsers}
							minPlayers={eventDetails.minPlayers}
							maxPlayers={eventDetails.maxPlayers}
							eventId={eventDetails.eventId}
						/>
					</div>
				</div>;
			default:
				return <div className="EventPage__contentDiv">
					<div className="EventPage__content--overview">
						<h3>Rules and Guidelines</h3>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at maximus ante fermentum sit amet. Pellentesque commodo lacus at sodales sodales. Quisque sagittis orci ut diam condimentum, vel euismod erat placerat. In iaculis arcu eros, eget tempus orci facilisis id.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu.
						</p>
						{/* <pre>{JSON.stringify(eventDetails, null, 2)}</pre> */}
					</div>
				</div>;
		};
	}
	
	return <>
		<Head>
			<title>Surge 2022</title>
			<meta name="description" content="Awesome website for Surge" />
			<link rel="icon" href="/Img/Sports icon.png" />
		</Head>
		<div className="EventPage">
			<Header />
			<div className="EventPage__header">
				<p>EVENTS</p>
				<img
					loading="lazy"
					width={20}
					className="Renegade__bottom--arrow"
					src="/Img/arrow-right.svg"
				/>
				<p className="EventPage__header--green">{eventDetails.eventName.toUpperCase()}</p>
			</div>
			<div className="EventPage__nav">
				<ul className="EventPage__navlist">
					<li className="EventPage__navlist--item">
						<a
							href="#"
							className={`${hash === "" ? "route--active" : ""} `}
						>
							OVERVIEW
            </a>
          </li>
          <li className="EventPage__navlist--item">
            <a
              href="#schedule"
              className={`${hash === "#schedule" ? "route--active" : ""} `}
            >
              SCHEDULE
            </a>
          </li>
          <li className="EventPage__navlist--item">
            <a
              href="#prizes"
              className={`${hash === "#prizes" ? "route--active" : ""} `}
            >
              PRIZES
            </a>
					</li>
					<li className="EventPage__navlist--item">
            <a
              href="#team"
              className={`${hash === "#team" ? "route--active" : ""} `}
            >
              TEAM
            </a>
          </li>
        </ul>
			</div>
			<div className="EventPage__content">
				{switchContent()}
			</div>
			<Footer />
		</div>
	</>;
}
