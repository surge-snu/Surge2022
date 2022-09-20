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
	const [paymentDropdownIndex, setPaymentDropdownIndex] = React.useState(null);
	const [eventDropdownIndex, setEventDropdownIndex] = React.useState(null);

  return (
		<>
			<div className="MyHome">
				<h3 className="MyHome__title">Account Information</h3>
				<div className="MyHome__info">
					<div className="MyHome__sectionTitle">
						Personal Information
					</div>
					<div className="MyHome__divider" />
					<div className="MyHome__infoRow">
						<p>Name</p>
						<p>{user.name}</p>
						<img src="/Img/Arrow Right Variant.svg" height={14} />
					</div>
					<div className="MyHome__divider" />
					<div className="MyHome__infoRow">
						<p>Email</p>
						<p>{user.email}</p>
						<img src="/Img/Arrow Right Variant.svg" height={14} />
					</div>
					<div className="MyHome__divider" />
					<div className="MyHome__infoRow">
						<p>Password</p>
						<p>********</p>
						<img src="/Img/Arrow Right Variant.svg" height={14} />
					</div>
				</div>
				<div className="MyHome__payment">
					<div className="MyHome__sectionTitle">
						Payment History
					</div>
					<div className="MyHome__divider" />
					<div className="MyHome__infoRow MyHome__infoRow--green">
						<p>Invoice ID</p>
						<p>Status</p>
						<p>Total Price</p>
					</div>
					{
						[...Array(5)].map((_, i) => (
							<div className="MyHome__dropdown" key={i}>
								<div className="MyHome__divider" />
								<button
									className="MyHome__infoRow MyHome__listTile"
									onClick={() => {
										setPaymentDropdownIndex(paymentDropdownIndex === i ? null : i);
									}}>
									<p>INV-0001</p>
									<div className="MyHome__paymentStatus">
										<img src="/Img/Green Tick.svg" height={14} />
										{/* <img src="/Img/Red Exclamation.svg" height={14} /> */}
										<p>Paid</p>
									</div>
									<p>Rs. 100</p>
									<img
										src="/Img/Arrow Right Variant.svg"
										height={14}
										style={{
											transform: paymentDropdownIndex === i ? "rotate(90deg)" : "rotate(0deg)",
											transition: "transform 0.3s ease-in-out",
										}}
									/>
								</button>
								<div className={`MyHome__dropDownContent
									${paymentDropdownIndex === i ? "MyHome__dropDownContent--active" : ""}
								`}>
									<div className="MyHome__divider"/>
									<div style={{
										padding: "20px 0",
									}}>
										<div className="MyHome__ListTileItems">
											<p>Subtotal</p>
											<p>Rs. 100</p>
										</div>
										<div className="MyHome__ListTileItems">
											<p>Discount</p>
											<p>Rs. 100</p>
										</div>
										<div className="MyHome__ListTileItems">
											<p>Taxes & Fees</p>
											<p>Rs. 100</p>
										</div>
									</div>
									<button className="MyHome__greenButton">
										Download Invoice
									</button>
								</div>
							</div>
						))
					}
				</div>
				<div className="MyHome__events">
					<div className="MyHome__sectionTitle">
						Registered Events
					</div>
					<div className="MyHome__divider" />
					<div className="MyHome__infoRow MyHome__infoRow--green">
						<p>Event Name</p>
						<p>Payment Status</p>
					</div>
					{
						[...Array(5)].map((_, i) => (
							<div className="MyHome__dropdown" key={i}>
								<div className="MyHome__divider" />
								<button
									className="MyHome__infoRow MyHome__listTile"
									onClick={() => {
										setEventDropdownIndex(eventDropdownIndex === i ? null : i);
									}}>
									<p>Event Name</p>
									<div className="MyHome__paymentStatus">
										<img src="/Img/Green Tick.svg" height={14} />
										{/* <img src="/Img/Red Exclamation.svg" height={14} /> */}
										<p>Paid</p>
									</div>
									<img
										src="/Img/Arrow Right Variant.svg"
										height={14}
										// rotate arrow if dropdown is open
										style={{
											transform: eventDropdownIndex === i ? "rotate(90deg)" : "rotate(0deg)",
											transition: "transform 0.3s ease-in-out",
										}}
									/>
								</button>
								<div className={`MyHome__dropDownContent
									${eventDropdownIndex === i ? "MyHome__dropDownContent--active" : ""}
								`}>
									<div className="MyHome__divider"/>
									<div className="MyHome__teamItems">
										<div className="MyHome__teamTitle">
											<p>Team Members</p>
											<p>2/6 members added to your team</p>
										</div>
										{
											[...Array(6)].map((_, i) => (
												<div className="MyHome__teamRow MyHome__teamRow--blue" key={i}>
													{/* <div>
														<img src="/Img/Profile Picture.svg" height={40} />
													</div> */}
													<p>A B Santhosh</p>
													<p>Admin</p>
												</div>
											))
										}
									</div>
									<button className="MyHome__greenButton">
										View Event
									</button>
								</div>
							</div>
						))				
					}
				</div>
			</div>
			{/* <main style={{ display: "flex", flexDirection: "column" }}>
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
			</main> */}
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

