import { withIronSessionSsr } from "iron-session/next";
import { createContext, useState } from "react";
import { ironOptions } from "../lib/ironOptions";

export const AuthContext = createContext({});

export const getUserFromSession = withIronSessionSsr(async ({ req }) => {
  if (req.session.user === undefined) {
    return null;
  } else {
    const user = req.session.user;
    return user;
  }
}, ironOptions);

export function AuthProvider({ children, ssrUser, ...props }) {
  const [user, setUser] = useState(ssrUser);
  const [tempTeamDetails, setTempTeamDetails] = useState(null);

  async function login(formData, setSetAuthError) {
    return fetch("/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then(async (res) => await res.json())
      .then((res) => {
        if (res.status === 200) {
          setSetAuthError({});
          setUser(res.user);
        } else {
          setSetAuthError(res.message);
        }
        return res;
      })
      .catch((err) => {
        return err;
      });
  }

  async function logout() {
    return fetch("/api/auth/logout", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((res) => {
        return res;
      });
  }

  const auth = {
    user,
    login,
    logout,
    tempTeamDetails,
    setTempTeamDetails,
    ...props,
  };

  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
}
