import { withIronSessionSsr } from "iron-session/next";
import React from "react";
import { ironOptions } from "../lib/ironOptions";

export const AuthContext = React.createContext({});

export const getUser = withIronSessionSsr(async ({ req }) => {
  // console.log(req.session);
  if (req.session.user === undefined) {
    return null;
  } else {
    const user = req.session.user;
    return user;
  }
}, ironOptions);

export function AuthProvider({ children, ssrUser, ...props }) {
  const [user, setUser] = React.useState(ssrUser);

  async function login(formData, setSetAuthError) {
    return fetch("/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then(async (res) => {
        return {
          response: await res.json(),
          status: res.status,
        };
      })
      .then((res) => {
        if (res.status === 200) {
          setSetAuthError({});
          setUser(res.response);
        } else {
          setSetAuthError(res.response);
        }
        return res;
      })
      .catch((err) => {
        return err;
      });
  }
  async function signup(email, password) {}
  async function logout() {}

  const auth = {
    user,
    login,
    signup,
    logout,
    ...props,
  };

  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
}
