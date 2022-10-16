import "../styles/routes/Admin.scss";
import { fetchUserData } from "../services/user.server";
import { fetchAllPayments } from "../services/admin.server";
import Header from "../Components/Header/Header";
import DashTable from "../Components/Table/DashTable/DashTable";
import DashRow from "../Components/Table/DashRow/DashRow";
import React from "react";

export async function getServerSideProps(context){
  if (context.req.session.user === undefined) {
    return {
			redirect: {
				permanent: false,
				destination: "/",
			},
		};
	}
	if (context.req.session.user.role == "") { //TODO: REMOVE USER ACCESSS
		return {
			redirect: {
				permanent: false,
				destination: "/",
			},
		};
	}
	
	const userData = await fetchUserData(context.req.session.user.email);
	const paymentData = await fetchAllPayments();
	
  return {
		props: {
			user: userData,
			payments: paymentData,
		},
  };
}

export default function Admin({ user, payments }) {
	
	function csvToArray(str, delimiter = ",") {

      // slice from start of text to the first \n index
      // use split to create an array from string by delimiter
      const headers = str.slice(0, str.indexOf("\n")).split(delimiter);

      // slice from \n index + 1 to the end of the text
      // use split to create an array of each csv value row
      const rows = str.slice(str.indexOf("\n") + 1).split("\n");

      // Map the rows
      // split values from each row into an array
      // use headers.reduce to create an object
      // object properties derived from headers:values
      // the object passed as an element of the array
      const arr = rows.map(function (row) {
        const values = row.split(delimiter);
        const el = headers.reduce(function (object, header, index) {
          object[header] = values[index];
          return object;
        }, {});
        return el;
      });

      // return the array
      return arr;
    }
	
	function changeHandler(e) {
		const input = e.target.files[0];
		const reader = new FileReader();

		reader.onload = function (e) {
			const text = e.target.result;
			const data = csvToArray(text);
			// document.write(JSON.stringify(data));
			console.log(JSON.stringify(data, null, 2));
		};
		
		reader.readAsText(input);
	}
	
	const [uploadedPayments, setUploadedPayments] = React.useState([]);
	const [dropdownIndex, setDropdownIndex] = React.useState(null);
	
	return (
		<div className="AdminPage">
			<h1 className="AdminPage__title">Admin</h1>
			<DashTable title="Approve payment">
				{/* <DashRow
					isDropDown={false}
					contentCols={[
						<input
							type="file"
							name="file"
							accept=".csv"
							onChange={changeHandler}
						/>
					]}
				/> */}
				{/* <div className="AdminPage__table">
					<div className="AdminPage__table--left">
						{uploadedPayments.map((payment) => (
							<div className="AdminPage__paidRow">
								<p>{payment.teamId}</p>
								<p>{payment.paymentStatus}</p>
							</div>
						))}
					</div>
					<div className="AdminPage__table--right">
						{payments.map((payment) => (
							<div className="AdminPage__unpaidRow">
								<p>{payment.teamId}</p>
								<p>{payment.paymentStatus}</p>
							</div>
						))}
					</div>
				</div> */}
				<DashRow
					isDropDown={false}
					contentCols={[
						"Order ID",
						"Payment ID",
						"Payment Status",
					]}
				/>
				{payments.map((payment, index) => (
					<DashRow
						key={payment.paymentId}
						isDropDown={true}
						index={index}
						dropdownIndex={dropdownIndex}
						setDropdownIndex={setDropdownIndex}
						contentCols={[
							payment.orderId,
							payment.paymentId,
							payment.paymentStatus,
							// <div><button>Verify</button></div>
						]}
					>
						<hr />
						<span>Team ID: {payment.teamId}</span>
						<button>Verify</button>
					</DashRow>
				))}
				{/* <button type="submit">Upload</button> */}
			</DashTable>
		</div>
	);
}

Admin.getLayout = function getLayout(page) {
  return (
    <div className="MyLayout">
      <Header
        isSmall={true}
        currentPath="profile"
        style={{
          borderBottom: "1px solid #878a90",
          zIndex: 0,
          justifyContent: "right",
        }}
        isSidebar={false}
      />
      {/* <MySidebar user={page.props.user} /> */}
      <div className="MyLayout__page">{page}</div>
    </div>
  );
};