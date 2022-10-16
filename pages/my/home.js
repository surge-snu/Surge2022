import { useState } from "react";
import DashTable from "../../Components/Table/DashTable/DashTable";
import MySidebar from "../../Components/MySidebar/MySidebar";
import "../../styles/routes/My/My.scss";
import DashRow from "../../Components/Table/DashRow/DashRow";
import Header from "../../Components/Header/Header";
import GInput from "../../Components/GInput/GInput";
import { fetchUserData } from "../../services/user.server";
import BlurredSpinner from "../../Components/BlurredSpinner/BlurredSpinner";
import { updateCollegeName, updatePhone } from "../../operations/auth.fetch";
import useForm from "../../hooks/useForm";
import { isPhone } from "../../utils/validate";
import { useRouter } from "next/router";
import Link from "next/link";

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
  const router = useRouter();

  const [collegeName, setCollegeName] = useState("");
  const [collegeLoader, setCollegeLoader] = useState(false);
  const [collegeError, setCollegeError] = useState("");

  const [phoneLoader, setPhoneLoader] = useState(false);

  function validate(formValues) {
    const errs = {};

    if (formValues.phone && !isPhone(formValues.phone)) {
      errs.phone = "Phone number should only contain 10 digits";
    }

    return errs;
  }

  const { onChange, handleSubmit, errors } = useForm({
    validate,
    initialValues: { phone: "" },
    onSubmit: async (formData) => {
      if (Object.keys(errors).length !== 0) return;

      setPhoneLoader(true);
      await updatePhone({
        phone: formData.phone,
        email: user.email,
      }).then((res) => {
        setPhoneLoader(false);
        console.log(res);
        if (res.status === 200) {
          router.reload();
        }
      });
    },
  });

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
          <form
            className="MyHome__collegeDropdownContent"
            onSubmit={async (e) => {
              e.preventDefault();
              setCollegeLoader(true);
              await updateCollegeName({
                college: collegeName,
                email: user.email,
              }).then((res) => {
                setCollegeLoader(false);
                if (res.status === 200) {
                  setCollegeError("");
                  window.location.reload();
                } else {
                  setCollegeError(res.message);
                }
              });
            }}
          >
            {collegeLoader && <BlurredSpinner />}
            <i>*Please enter the College name given in your College ID card*</i>
            <i>*No Abbreviations*</i>
            <GInput
              id="college"
              label=""
              setValue={(e) => setCollegeName(e.target.value)}
              pattern="[a-zA-Z ]{3,50}$"
            />
            <button
              className="MyHome__collegeDropdownContent--update"
              type="submit"
            >
              Update
            </button>
            {collegeError !== "" && (
              <span className="MyHome__collegeDropdownContent--error">
                {collegeError}
              </span>
            )}
          </form>
        </DashRow>

        <DashRow
          isDropDown={user.phone === ""}
          dropdownIndex={personalIndex}
          setDropdownIndex={setPersonalIndex}
          index={0}
          contentCols={[
            <span>Phone</span>,
            <span>
              {user.phone === "" ? (
                <>
                  <img alt="Error" src="/Img/Red Exclamation.svg" height={14} />{" "}
                  Data Needed
                </>
              ) : (
                user.phone
              )}
            </span>,
          ]}
        >
          <form
            className="MyHome__collegeDropdownContent"
            onSubmit={handleSubmit}
          >
            {phoneLoader && <BlurredSpinner />}
            <i>
              *Please enter correct, 10 digit phone number as it cannot be
              changed later*
            </i>
            <i>*eg: 8526750301*</i>
            <GInput
              id="phone"
              label=""
              setValue={(e) => onChange("phone", e)}
            />
            {errors.phone !== "" && (
              <span className="MyHome__collegeDropdownContent--error">
                {errors.phone}
              </span>
            )}
            <button
              className="MyHome__collegeDropdownContent--update"
              type="submit"
            >
              Update
            </button>
          </form>
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
          <Link href="#reset-password">
            <a className="MyHome__collegeDropdownContent--update" type="submit">
              Update
            </a>
          </Link>
        </DashRow>

        {/* <DashRow
          isDropDown={false}
          contentCols={[
            <span>Member Since</span>,
            <span>2017-06-07 07:18</span>,
          ]}
        /> */}
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
