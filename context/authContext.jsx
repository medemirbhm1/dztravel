import axios from "axios";
import { createContext, useCallback, useEffect, useState } from "react";

export const authContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [access, setAccess] = useState("");
  const [user, setUser] = useState({});

  const getUserInfo = useCallback((token) => {
    axios
      .get("https://modulus-project.onrender.com/me", {
        headers: {
          Authorization: `JWT ${token}`,
        },
      })
      .then(({ data }) => {
        localStorage.setItem("user", JSON.stringify(data));
        setUser(data);
      });
  }, []);

  useEffect(() => {
    const access = localStorage.getItem("access");
    const userObj = JSON.parse(localStorage.getItem("user"));
    if (access && userObj) {
      setAccess(access);
      setUser(userObj);
    }
  }, []);

  return (
    <authContext.Provider value={{ access, setAccess, getUserInfo, user }}>
      {children}
    </authContext.Provider>
  );
};
