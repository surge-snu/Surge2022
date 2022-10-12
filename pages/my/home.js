import { useState } from "react";
import DashTable from "../../Components/Table/DashTable/DashTable";
import MySidebar from "../../Components/MySidebar/MySidebar";
import "../../styles/routes/My/My.scss";
import DashRow from "../../Components/Table/DashRow/DashRow";
import Header from "../../Components/Header/Header";
import GInput from "../../Components/GInput/GInput";
import { fetchUserData } from "../../services/user.server";

export async function getServerSideProps(context) {
  if (context.req.session.user === undefined) {
    return {
      redirect: {
        permanent: false,
        destination: "/my",
      },
    };
  }

  const userData = await fetchUserData(context.req.session.user.email);
  return {
    props: { user: userData },
  };
}
export default function MyHome({ user }) {
  const [personalIndex, setPersonalIndex] = useState(null);
  const [accountIndex, setAccountIndex] = useState(null);

  return (
    <div className="MyHome">
      <DashTable title="Personal information">
        <DashRow
          isDropDown={false}
          contentCols={[<span>Name</span>, <span>{user.name}</span>]}
        />
        <DashRow
          isDropDown={user.college === ""}
          dropdownIndex={personalIndex}
          setDropdownIndex={setPersonalIndex}
          index={0}
          contentCols={[
            <span>College</span>,
            <span>
              {user.college === "" ? (
                <>
                  <img alt="Error" src="/Img/Red Exclamation.svg" height={14} />{" "}
                  Data Needed
                </>
              ) : (
                user.college
              )}
            </span>,
          ]}
        >
          <div className="MyHome__collegeDropdownContent">
            <GInput
              id="college"
              label=""
              setValue={(e) => console.log(e.target.value)}
            />
          </div>
        </DashRow>

        <DashRow
          isDropDown={user.college === ""}
          dropdownIndex={personalIndex}
          setDropdownIndex={setPersonalIndex}
          index={1}
          contentCols={[
            <span>Phone</span>,
            <span>
              {user.college === "" ? (
                <>
                  <img alt="Error" src="/Img/Red Exclamation.svg" height={14} />{" "}
                  Data Needed
                </>
              ) : (
                user.college
              )}
            </span>,
          ]}
        >
          <div className="MyHome__collegeDropdownContent">
            <GInput
              id="mobile"
              label=""
              setValue={(e) => console.log(e.target.value)}
            />
          </div>
        </DashRow>
      </DashTable>

      <DashTable title="Account Settings">
        <DashRow
          isDropDown={false}
          contentCols={[<span>Email</span>, <span>{user.email}</span>]}
        />
        <DashRow
          dropdownIndex={accountIndex}
          setDropdownIndex={setAccountIndex}
          index={0}
          contentCols={[
            <span>Change Password</span>,
            <span>************</span>,
          ]}
        >
          <div className="MyHome__collegeDropdownContent">
            <GInput
              id="college"
              label=""
              setValue={(e) => console.log(e.target.value)}
            />
          </div>
        </DashRow>

        <DashRow
          isDropDown={false}
          contentCols={[
            <span>Member Since</span>,
            <span>2017-06-07 07:18</span>,
          ]}
        />
      </DashTable>
    </div>
  );
}

MyHome.getLayout = function getLayout(page) {
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
      <MySidebar user={page.props.user} />
      <div className="MyLayout__page">{page}</div>
    </div>
  );
};
