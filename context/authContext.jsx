import { createContext, useEffect, useState } from "react";

export const authContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [access, setAccess] = useState("");

  useEffect(() => {
    const access = localStorage.getItem("access");
    if (access) {
      setAccess(access);
    }
  }, []);

  return (
    <authContext.Provider value={{ access, setAccess }}>
      {children}
    </authContext.Provider>
  );
};
