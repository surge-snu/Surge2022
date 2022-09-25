import React from "react";
import DashTable from "../../Components/Table/DashTable/DashTable";
import MySidebar from "../../Components/MySidebar/MySidebar";
import useAuth from "../../hooks/useAuth";
import {
  fetchInvitationsOps,
  updateInvitationOps,
} from "../../operations/invitation.fetch";
import "../../styles/routes/My/My.scss";
import DashRow from "../../Components/Table/DashRow/DashRow";
import DashHeader from "../../Components/Table/DashHeader/DashHeader";

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
        <DashTable title="Payment History">
          <DashHeader headerTitles={["Invoice ID", "Status", "Price"]} />
          {[...Array(5)].map((_, index) => (
            <DashRow
              setDropdownIndex={setPaymentDropdownIndex}
              dropdownIndex={paymentDropdownIndex}
              index={index}
              contentCols={[
                <span>INV-0001</span>,
                <span>
                  <img src="/Img/Green Tick.svg" height={14} />
                  {/* <img src="/Img/Red Exclamation.svg" height={14} /> */}
                  <p>Paid</p>
                </span>,
                <span>Rs. 100</span>,
              ]}
            >
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
              <button className="MyHome__greenButton">Download Invoice</button>
            </DashRow>
          ))}
        </DashTable>

        <DashTable title="Registered Events">
          <DashHeader
            headerTitles={["Event Name", "Category", "Price", "Total"]}
          />
          {[...Array(5)].map((_, index) => (
            <DashRow
              setDropdownIndex={setEventDropdownIndex}
              dropdownIndex={eventDropdownIndex}
              index={index}
              contentCols={[
                <span>INV-0001</span>,
                <span>
                  {/* <img src="/Img/Green Tick.svg" height={14} /> */}
                  {/* <img src="/Img/Red Exclamation.svg" height={14} /> */}
                  {/* <p>Paid</p> */}
                  <p>Male</p>
                </span>,
                <span>Rs. 100</span>,
                <span>Rs. 1500</span>,
              ]}
            >
              <span className="MyHome__ListTileItems">
                <p>Subtotal</p>
                <p>Rs. 100</p>
              </span>
              <span className="MyHome__ListTileItems">
                <p>Discount</p>
                <p>Rs. 100</p>
              </span>
              <span className="MyHome__ListTileItems">
                <p>Taxes & Fees</p>
                <p>Rs. 100</p>
              </span>
              <button className="MyHome__greenButton">Download Invoice</button>
            </DashRow>
          ))}
        </DashTable>
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
