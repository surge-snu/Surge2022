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
import QRCode from "react-qr-code";

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

  const allUserId = [
    "047d65ba-d90b-4cfa-91e9-eb30d583a1f5",
    "051fd582-666f-4a94-aff4-624d80882b5f",
    "075e9dfc-a881-474d-b0f5-e01007c7f485",
    "07b3d2b6-048e-45a8-861a-cc56ec9a334c",
    "0828026b-f924-4475-8665-9d70e5229dbb",
    "0a6be0ea-3a4b-406d-a3f2-93febbac7b36",
    "0d84514b-b94e-433b-bf91-ee41c238312a",
    "109f36dc-0ca0-4f5a-8ab2-14a14302d2f7",
    "130c07c4-34a8-4b56-9e77-59dec7aa86f3",
    "14a3a765-07b7-471d-8880-1cea23582038",
    "168f985d-f559-4866-8a3b-f4d6e829f5a7",
    "17647340-d4f7-4577-ace0-0bc7a153e2f6",
    "1bc0b271-686d-4a59-be33-06ac4a0286dc",
    "2e5cac56-5beb-4ccb-a324-a9945a75d329",
    "2e96dbf5-2969-43d1-bcec-3a0e1dac76c6",
    "30ae8311-1ca4-486b-ae0a-8419a5ce2614",
    "34070dee-2fb3-4143-bfab-fc8d5c3f8aa4",
    "344ac9f6-69b0-4770-ba26-ed64498392a6",
    "35a10c51-1610-4c12-b044-93f36d5a9ade",
    "368ebed9-8428-4d56-9647-c216f9d2463d",
    "37b104a2-8b77-4fa3-936c-524672a6f5aa",
    "388aa4b8-bfb7-4883-8d36-4a59387d3471",
    "3ea9b028-cfef-4a06-bc15-b07a9b69d803",
    "431c01ea-aee7-49a0-becc-58c6f4a6a076",
    "43758435-912e-497f-94b5-a7436910bc8e",
    "490749c4-1461-4f31-93fd-dcdb28bd6bb5",
    "4e89c7fc-d695-4bd9-b471-eca153a49438",
    "4f38c667-ab45-4ad6-9bee-d348f627a966",
    "4fa59863-ab41-46b5-85aa-f27b3e6d1364",
    "512169e6-051c-448f-93f6-f36c0420c274",
    "5201c064-fabe-408e-97d7-1488272ac37a",
    "57e6a127-dd94-49f6-9768-3342ad14d516",
    "5a518782-fe1a-4b87-a16a-2ff7f24ff9e8",
    "5bf5af48-9fa0-4da4-9da9-3c7c86fef8a5",
    "5c6d1c1c-cbde-4e09-abb8-436a3f78e6fc",
    "62391cf3-952f-4145-9f37-4923749884fc",
    "64e98885-f421-478e-9a98-42094d2b796e",
    "65c3bee6-32fb-40db-b747-9a42fcc429c2",
    "6711bde5-a3b4-4410-8583-a62557d43ff6",
    "6888c046-fdab-4839-9970-85ad17b83fb9",
    "68f1a361-a7d0-42f9-99ed-93b8cd7ea93f",
    "6e700124-6947-4df3-abb3-c6c7cdfeb69a",
    "6ed55086-7f9b-4b0a-9152-2dc3db0e342f",
    "6f3e7bcd-7cc0-43e8-b79f-1a4ee7403f77",
    "7400304b-b36a-41b5-8697-08c5a83c2850",
    "777726a4-b282-4161-970c-016a64f0b152",
    "77e5866d-402c-4d31-8a9c-d9cd2bbb8b1c",
    "7cdc529c-e7c8-42cb-bfcc-179be508bc30",
    "8169e06a-c602-4ac0-b0d5-548d397f0abc",
    "8880af01-7d5f-48a8-a3b4-38226268162a",
    "8a03a399-e017-41b7-ada5-cd22b8cd10b3",
    "8c164ebf-784d-4831-8dd3-c5f1271e987a",
    "8f258ac4-4490-4de7-93c5-f07df0e80c99",
    "9076eb06-12e3-4a61-8809-e5d766285501",
    "92bef490-22d9-4715-aedc-0dc997ed22b6",
    "93d7bd77-e904-4644-a925-04e418c82730",
    "9465a053-fd6d-44f6-9c2b-a081c05458d1",
    "9f30bf50-b93c-4a77-8735-9f35a163f496",
    "a0b3f4a5-17e7-417d-8f2d-e50727a66af6",
    "a122122f-b7fb-4817-ae21-573b84793a8c",
    "a257a449-f08c-47ad-b95c-3c55a9222216",
    "a6317c8f-aa2f-4957-ac5a-6e5febe60f9a",
    "a84d4577-e3ab-4b07-897c-3c48ca2ee010",
    "a8d8169e-db13-45cc-834b-e88eeb4d3cf2",
    "aa9ae04c-805e-4852-94d4-4e2b84467d32",
    "aeb3d080-8648-477e-b5ff-a26ae800ac50",
    "b0c2672b-d54a-4f9c-9cb3-553674458935",
    "b0d1c9f3-61aa-4caa-912e-e30649f94d57",
    "b0f8d5c1-d6b8-40c2-a70b-133d2af57aa7",
    "b80b5467-f2f3-422f-bb8c-2d6ea9c8ed83",
    "b8826e7b-999e-4df4-baa9-5a5dfac33f3b",
    "b9277855-cbe0-4d84-b4a7-9fcd9d6e8c1a",
    "bac4d1b7-cd32-4d6c-ab44-b780b44ab502",
    "bc19b58a-1ff3-4f82-b514-d36b932b4d61",
    "bd520c1e-fb5d-4695-9a88-1c5fb4e0f6c0",
    "be62a829-8d2c-4d03-8a6a-a1b6e473f14d",
    "c1059cfb-4981-4aad-a142-40ce8873dc41",
    "c482b223-5af8-445b-a127-587cef36c25f",
    "caf3bff0-b66f-495f-bf56-e133854e141a",
    "ce200cab-eeda-48f0-8f41-c99c5c1db1fa",
    "d038b954-f2e8-45a3-be21-fe04867885c2",
    "d15d8f20-789f-4fc0-b8ce-328f8c43c2eb",
    "d190c900-f863-4300-a6ce-a06486a874cf",
    "d246e5e6-6af3-4f87-881e-6b12b2e4c6f9",
    "d2be26fe-ec6f-43cb-a0a6-cbeb5c3ca539",
    "d3ce8ffb-6e2f-4bac-8ed7-ad6d5c9453ad",
    "d4600680-c48e-461c-bec3-6b92dc43e63b",
    "d51b1ef9-c893-4fad-814c-7fd44421534e",
    "d53cb71c-e0a3-44f3-86de-e26620b362b5",
    "d7262952-a8e4-4c47-bc2d-dcdbbe06fa10",
    "d77c09a5-3dcd-4289-b568-fd1aa810222a",
    "dcb21f70-24c5-46b8-90be-1a1754e43e6c",
    "ddf2eba1-ec7d-4566-aafb-d4a5aeded1c2",
    "e1c3e448-b824-463b-b3cb-a94d0c5e66e8",
    "ea12d68a-bbc0-4f3c-bae9-a211296129c9",
    "eb590186-850a-4ac8-8583-1db26a16917a",
    "ee5e66ac-7727-425c-bc4d-7e7668d75b1e",
    "eff06781-3365-48b6-9cd9-865446e378f2",
    "f419967c-5b4b-4dd5-9608-07e99ee84d0b",
    "f63f7bd9-2ec6-48b4-9b5f-3adea01599ab",
    "f64de789-54d5-4189-a704-0e2686981445",
    "f8d31987-d829-4d06-8968-cd258f450fb0",
    "fa62be87-5ac2-419c-ba13-7d0c14e4e67f",
    "fec0e5c4-c213-471f-8ba3-458bb1d29d97",
  ];

  return (
    <div className="MyHome">
      <div className="MyHome__QrBox">
        <div className="MyHome__QrBox--left">
          <div className="MyHome__QrBox--leftTop">
            <h2>Proof of participation</h2>
            <p>
              Upon arrival on campus, this QR code will be used to check the
              legitimacy of your college's participation in Surge 2022.
            </p>
            <p>
              Each player is required to produce this QR on every entry and exit
              of campus so make sure all the team members have a copy of this QR
              code.
            </p>
          </div>
          <div className="MyHome__QrBox--leftBottom">
            <button
              onClick={() => {
                const svg = document.getElementById("QRCode");
                const svgData = new XMLSerializer().serializeToString(svg);
                const canvas = document.createElement("canvas");
                const ctx = canvas.getContext("2d");
                const img = new Image();
                img.onload = () => {
                  canvas.width = img.width;
                  canvas.height = img.height;
                  ctx.drawImage(img, 0, 0);
                  const pngFile = canvas.toDataURL("image/png");
                  const downloadLink = document.createElement("a");
                  downloadLink.download = `${user.name} QR Code`;
                  downloadLink.href = `${pngFile}`;
                  downloadLink.click();
                };
                img.src = `data:image/svg+xml;base64,${btoa(svgData)}`;
              }}
            >
              Download QR
            </button>
          </div>
        </div>
        <div className="MyHome__QrBox--right">
          <QRCode
            id="QRCode"
            value={user.id}
            bgColor="#0f1621"
            fgColor="#cafa0a"
            style={{
              borderRadius: "4px",
            }}
            size="218"
          />
        </div>
      </div>
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
          index={1}
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
              Change Password
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

      {/* <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          gap: "15px",
        }}
      >
        {allUserId.map((id) => (
          <QRCode
            id="QRCode"
            value={id}
            bgColor="#0f1621"
            fgColor="#cafa0a"
            style={{
              borderRadius: "4px",
            }}
            size="218"
          />
        ))}
      </div> */}
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

// select
//   DISTINCT PlayerLog.id,
//   PlayerLog.PlayerState,
//   PlayerLog.timeStamp,
//   PlayerLog.teamMemberId,
//   Event.eventName,
//   Event.category,
//   TeamMember.phone,
//   User.name,
//   User.phone
// FROM PlayerLog
// INNER JOIN Team on Team.teamId=PlayerLog.teamId
// INNER JOIN TeamMember on TeamMember.teamId = PlayerLog.teamId
// INNER JOIN Event on Event.eventId=Team.eventId
// INNER JOIN User on User.id=Team.registeredById
// GROUP BY PlayerLog.id
