import React from "react";
import MySidebar from "../../Components/MySidebar/MySidebar";
import useAuth from "../../hooks/useAuth";
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
  const { logout, user: cUser } = useAuth();

  return (
    <main>
      {user !== null ? <p>Hello {user.email}</p> : <a href="#login">Login</a>}
      {user !== null && <button onClick={logout}>Logout</button>}
    </main>
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
