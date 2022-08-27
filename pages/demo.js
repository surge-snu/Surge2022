import { useRouter } from "next/router";
import React from "react";
import "../styles/routes/Home.scss";

export function getServerSideProps(context) {
  if (context.req.session.user === undefined) {
    return {
      props: {
        user: null,
      },
    };
  }
  return {
    props: { user: context.req.session.user },
  };
}
export default function Demo({ user }) {
  // const router = useRouter();

  // React.useEffect(() => {
  //   if (user === null) {
  //     router.replace("#login", undefined, { shallow: true });
  //   }
  // },[]);

  return (
    <main>
      {user !== null ? <p>Hello {user.email}</p> : <a href="#login">Login</a>}
    </main>
  );
}
