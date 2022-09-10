import React from "react";
import { sendInvitationOps } from "../../operations/invitation.fetch";
import Fuse from "fuse.js";
import "./InvitationWidget.scss";

function InvitationWidget({ allUsers, maxPlayers, minPlayers, eventId, user }) {
  const [search, setSearch] = React.useState("");
  const [results, setResults] = React.useState([]);
  const [invitedPlayers, setInvitedPlayers] = React.useState([]);

	const fuseOptions = {
		shouldSort: true,
    keys: ["name", "id", "email"],
  };
  const fuse = new Fuse(allUsers, fuseOptions);

	React.useEffect(() => {
		setResults(
			fuse.search(search, { limit: 7 })
				.map((result) => result.item)
				.filter((result) => {
			return !invitedPlayers.some((player) => player.id === result.id);
		}));
  }, [search]);

  return (
    <div className="InvitationWidgetWrapper">
      <div className="InvitationWidgetWrapper--top">
        <div className="InvitationWidgetWrapper__inputWrapper">
          <input
            className="InvitationWidgetWrapper__input"
            onChange={(e) => setSearch(e.target.value)}
            value={search}
						disabled={invitedPlayers.length >= maxPlayers}
						placeholder="Search by username, full name or email address"
          />
          {/* <span>{`${invitedPlayers.length}/${maxPlayers}`}</span> */}
        </div>
      </div>
			{results.length > 0 && 
				<ul className="InvitationWidgetWrapper__results">
					{results.map((result, index) => {
							return (
								<li
									key={index}
									onClick={() => {
										setInvitedPlayers([...invitedPlayers, result]);
										setResults(results.filter((result) => {
											return !invitedPlayers.some((player) => player.id === result.id);
										}));
										setSearch("");
									}}
								>
									{result.name}
									<span>{result.email}</span>
									<p>&#43;</p>
								</li>
							);
						})}
				</ul>
			}
			<div className="InvitationWidgetWrapper__invites">
				<div className="InvitationWidgetWrapper__invites--heading">
					<p>This hackathon let's you have upto {maxPlayers} teammates.
							Search and add your teammates</p>
				</div>
				<div className="InvitationWidgetWrapper__invites--list">
					{invitedPlayers.map((player, index) => {
						return (
							<span key={index} className="InvitationWidgetWrapper__chips">
								<div className="InvitationWidgetWrapper__chips--box">
									{/* <p>{player.email} ({player.name})</p> */}
									<p>{player.name}</p>
									<p>{player.email}</p>
								</div>
								<button
									onClick={() => {
										const newInvitedPlayers = [...invitedPlayers];
										newInvitedPlayers.splice(index, 1);
										setInvitedPlayers(newInvitedPlayers);
									}}
								>
									&#10799;
								</button>
							</span>
						);
					})}		
				</div>
				{invitedPlayers.length >= minPlayers &&
        invitedPlayers.length <= maxPlayers && (
					<button
						className="InvitationWidgetWrapper__invites--button"
						onClick={async () => {
							const data = invitedPlayers.map((player) => {
								return {
									eventId,
									toId: player.id,
									fromId: user.id,
								};
							});
							await sendInvitationOps(data).then((res) => console.log(res));
						}}
					>
						Send Invitations
					</button>
				)}
			</div>
			<pre>
				{JSON.stringify(results, null, 2)}
			</pre>
			<pre>
				{JSON.stringify(invitedPlayers, null, 2)}
			</pre>
    </div>
  );
}

export default InvitationWidget;
