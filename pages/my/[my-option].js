import React from "react";
import useAuth from "../../hooks/useAuth";
import "../../styles/routes/My/My.scss";

export function getServerSideProps(context) {
  console.log(context.req);
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
export default function Demo({ user }) {
  const { logout } = useAuth();

  return (
    <main>
      {user !== null ? <p>Hello {user.email}</p> : <a href="#login">Login</a>}
      {user !== null && <button onClick={logout}>Logout</button>}
    </main>
  );
}
