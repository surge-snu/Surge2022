import Link from "next/link";
import React from "react";
import "./EventTabs.scss";

function EventTabs({ eventId, currentTab }) {
  const [activeTab, setActiveTab] = React.useState(currentTab);
	const [hoverTab, setHoverTab] = React.useState(null);
	const [isMobile, setIsMobile] = React.useState(false);
	const [isDropDownOpen, setIsDropDownOpen] = React.useState(false);

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
	
	function dropDownItem(name) {
		return (
			<li
				className={`EventTabs--item ${activeTab === name ? "EventTabs--activeItem" : ""
					}`}
				style={{
					display: (activeTab !== name & !isDropDownOpen) ? "none" : "block"
				}}
			>
				<button
					id={name}
					onClick={() => {
						if (activeTab === name) {
							setIsDropDownOpen(!isDropDownOpen);
						} else {
							setActiveTab(name);
							window.location.href = `/event/${eventId}/${name}`;
						}
					}}
					onMouseEnter={() => setHoverTab(name)}
					onMouseLeave={() => setHoverTab(null)}
				>
					{name.toUpperCase()}
				</button>
			</li>
		);
	}

	return (
		<div className="EventTabsDiv">
			<ul className="EventTabs">
				<span className="EventTabs--ghostItem" id="ghost-tab" />
				<span className="EventTabs--ghostHoverItem" id="hover-ghost-tab" />
				{["overview", "schedule", "prizes", "team"]
					.sort((a, b) => (a === activeTab ? -1 : b === activeTab ? 1 : 0))
					.map((name) => dropDownItem(name))}
			</ul>
			{isMobile && (
				<div
					className={`EventTabs__dropDown ${isDropDownOpen ? "EventTabs__dropDown--rotate" : ""}`}
					onClick={() => setIsDropDownOpen(!isDropDownOpen)}
				>
					<img
						src="/Img/Arrow Right Variant.svg"
						height={20}
						width={20}
					/>
				</div>
			)}
		</div>
	);
}

export default EventTabs;
