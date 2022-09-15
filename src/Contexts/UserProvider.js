import React, { createContext, useContext, useState } from "react";
import { HOST_URL } from "../common/config";

const UserContext = createContext({});

export function useUserContext() {
  return useContext(UserContext);
}

export default function UserProvider({ children }) {
  const [token, setToken] = useState();

  const Login = () => {
    fetch(`${HOST_URL}/v1/auth/signin`, {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: "seekster",
        password: "seekster",
      }),
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw new Error("Something went wrong");
      })
      .then((response) => {
        alert("Login Success");
        sessionStorage.setItem("token", response.accessToken);
        setToken(response.accessToken);
      })
      .catch((error) => {
        alert(error);
      });
  };

  const userStore = {
    userAction: {
      Login,
    },
  };

  return (
    <UserContext.Provider value={userStore}>{children}</UserContext.Provider>
  );
}
