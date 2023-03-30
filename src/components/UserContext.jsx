import React, { createContext, useState, useEffect } from "react";

export const UserContext = createContext();

export const UserProvider = (props) => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("localUser"));
    if (userData) {
      setUser(userData);
    } else {
      setUser([]);
    }
  }, []);

  const state = {
    user,
    setUser,
  };

  return (
    <UserContext.Provider value={state}>{props.children}</UserContext.Provider>
  );
};
