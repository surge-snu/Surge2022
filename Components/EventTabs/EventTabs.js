import Link from "next/link";
import React from "react";
import "./EventTabs.scss";

function EventTabs({ eventId, currentTab }) {
  const [activeTab, setActiveTab] = React.useState(currentTab);
	const [hoverTab, setHoverTab] = React.useState(null);
	const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    if (document.getElementById("ghost-tab")) {
			const activeTabElem = document.getElementById(activeTab);
			const ghostTab = document.getElementById("ghost-tab");
			ghostTab.style.width = `${activeTabElem.getBoundingClientRect().width}px`;
			ghostTab.style.left = `${activeTabElem.offsetLeft}px`;
		}
  }, [activeTab, isMobile]);

	React.useEffect(() => {
		if (document.getElementById("ghost-tab")) {
			if (hoverTab) {
				const hoverTabElem = document.getElementById(hoverTab);
				
				const ghostTab = document.getElementById("hover-ghost-tab");
				ghostTab.style.opacity = "1";

				ghostTab.style.width = `${hoverTabElem.getBoundingClientRect().width}px`;
				ghostTab.style.left = `${hoverTabElem.offsetLeft}px`;
			} else {
				const ghostTab = document.getElementById("hover-ghost-tab");
				ghostTab.style.opacity = "0";
			}
		}
	}, [hoverTab, isMobile]);
	
	React.useEffect(() => {
		setIsMobile(window.innerWidth < 500);
		window.addEventListener("resize", () => {
			setIsMobile(window.innerWidth < 500);
		});
	}, []);

	return (
		<>
			<select
				className="EventTabs__mobile"
				value={activeTab}
				onChange={(e) => {
					setActiveTab(e.target.value);
					window.location.href = `/event/${eventId}/${e.target.value}`;
				}}>
				<option
					value="overview">
					OVERVIEW
				</option>
				<option
					value="schedule">
					SCHEDULE
				</option>
				<option
					value="prizes">
					PRIZES
				</option>
				<option	
					value="team">
					TEAM
				</option>
			</select>
			<ul className="EventTabs">
				<span className="EventTabs--ghostItem" id="ghost-tab" />
				<span className="EventTabs--ghostHoverItem" id="hover-ghost-tab" />
				<li
					className={`EventTabs--item ${activeTab === "overview" ? "EventTabs--activeItem" : ""
						}`}
				>
					<Link href={`/event/${eventId}/overview`}>
						<a
							id="overview"
							onClick={() => setActiveTab("overview")}
							onMouseEnter={() => setHoverTab("overview")}
							onMouseLeave={() => setHoverTab(null)}
						>
							OVERVIEW
						</a>
					</Link>
				</li>
				<li
					className={`EventTabs--item ${activeTab === "schedule" ? "EventTabs--activeItem" : ""
						}`}
				>
					<Link href={`/event/${eventId}/schedule`}>
						<a
							id="schedule"
							onClick={() => setActiveTab("schedule")}
							onMouseEnter={() => setHoverTab("schedule")}
							onMouseLeave={() => setHoverTab(null)}
						>
							SCHEDULE
						</a>
					</Link>
				</li>
				<li
					className={`EventTabs--item ${activeTab === "prizes" ? "EventTabs--activeItem" : ""
						}`}
				>
					<Link href={`/event/${eventId}/prizes`}>
						<a
							id="prizes"
							onClick={() => setActiveTab("prizes")}
							onMouseEnter={() => setHoverTab("prizes")}
							onMouseLeave={() => setHoverTab(null)}
						>
							PRIZES
						</a>
					</Link>
				</li>
				<li
					className={`EventTabs--item ${activeTab === "team" ? "EventTabs--activeItem" : ""
						}`}
				>
					<Link href={`/event/${eventId}/team`}>
						<a
							id="team"
							onClick={() => setActiveTab("team")}
							onMouseEnter={() => setHoverTab("team")}
							onMouseLeave={() => setHoverTab(null)}
						>
							TEAM
						</a>
					</Link>
				</li>
			</ul>
		</>
	);
}

export default EventTabs;
