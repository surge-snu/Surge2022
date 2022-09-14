import React from "react";
import MySidebar from "../../Components/MySidebar/MySidebar";
import useAuth from "../../hooks/useAuth";
import {
  fetchInvitationsOps,
  updateInvitationOps,
} from "../../operations/invitation.fetch";
import "../../styles/routes/My/My.scss";

export function getServerSideProps(context) {
  if (context.req.session.user === undefined) {
    return {
      redirect: {
        permanent: false,
        destination: "/my",
      },
    };
  }
  return {
    props: { user: context.req.session.user },
  };
}
export default function MyHome({ user }) {
  const { logout } = useAuth();
  const [sentInvitations, setSentInvitations] = React.useState([]);
  const [receivedInvitations, setReceivedInvitations] = React.useState([]);

  return (
		<>
			<div className="MyHome">
				<h3 className="MyHome__title">Account Information</h3>
				<div className="MyHome__info">
					<div className="MyHome__section--title">
						Personal Information
					</div>
					<div className="MyHome--divider" />
					<div className="MyHome__info--row">
						<p>Name</p>
						<p>{user.name}</p>
						<img src="/Img/Arrow Right Variant.svg" height={14} />
					</div>
					<div className="MyHome--divider" />
					<div className="MyHome__info--row">
						<p>Email</p>
						<p>{user.email}</p>
						<img src="/Img/Arrow Right Variant.svg" height={14} />
					</div>
					<div className="MyHome--divider" />
					<div className="MyHome__info--row">
						<p>Password</p>
						<p>********</p>
						<img src="/Img/Arrow Right Variant.svg" height={14} />
					</div>
				</div>
				<div className="MyHome__payment">
					<div className="MyHome__section--title">
						Payment History
					</div>
					<div className="MyHome--divider" />
					<div className="MyHome__sectionRow--green">
						<p className="MyHome__text--green">Invoice ID</p>
						<p className="MyHome__text--green">Status</p>
						<p className="MyHome__text--green">Total Price</p>
					</div>
				</div>
				<div className="MyHome__events">
					<div className="MyHome__section--title">
						Registered Events
					</div>
					<div className="MyHome--divider" />
				</div>
			</div>
			<main style={{ display: "flex", flexDirection: "column" }}>
				{user !== null ? <p>Hello {user.email}</p> : <a href="#login">Login</a>}
				{user !== null && <button onClick={logout}>Logout</button>}
				<button
					onClick={async () => {
						await fetchInvitationsOps(user.email).then((res) => {
							setReceivedInvitations(res.message.receivedInvitations);
							setSentInvitations(res.message.sentInvitations);
						});
					}}
				>
					Refresh Invitations
				</button>
				<h3>Sent Invitations</h3>
				{sentInvitations.map((invitation) => {
					return (
						<label key={invitation.id}>
							{invitation.toUser.name} - {invitation.toUser.email} -{" "}
							{invitation.status}&nbsp;
							{invitation.status !== "REVOKED" && (
								<button
									onClick={async () => {
										await updateInvitationOps({
											id: invitation.id,
											status: "REVOKED",
										});
									}}
								>
									Revoke Invitation
								</button>
							)}
							&nbsp;
						</label>
					);
				})}
				<br />
				<br />
				<h3>Received Invitations</h3>
				{receivedInvitations.map((invitation) => {
					return (
						<label key={invitation.id}>
							{invitation.fromUser.name} - {invitation.fromUser.email} -{" "}
							{invitation.status}&nbsp;
							{invitation.status !== "REVOKED" && (
								<>
									<button
										onClick={async () => {
											await updateInvitationOps({
												id: invitation.id,
												status: "ACCEPTED",
											});
										}}
									>
										Accept
									</button>
									&nbsp;
									<button
										onClick={async () => {
											await updateInvitationOps({
												id: invitation.id,
												status: "REJECTED",
											});
										}}
									>
										Decline
									</button>
								</>
							)}
							&nbsp;
						</label>
					);
				})}
			</main>
		</>
  );
}

MyHome.getLayout = function getLayout(page) {
  return (
    <div className="MyLayout">
      <MySidebar />
      <div className="MyLayout__page">{page}</div>
    </div>
  );
};
