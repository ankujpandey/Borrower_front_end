import React, { createContext, useState, useEffect } from "react";

export const UserContext = createContext();

export const UserProvider = props => {
  const [user, setUser] = useState(null);

  //   const state = {
  //     user,
  //     setUser,
  //   };

  useEffect(() => {
    // localStorage.clear();
    const userData = JSON.parse(localStorage.getItem("localUser"));

    if (userData) {
      console.log("local storage at context", userData);
      setUser(userData);
    } else {
      setUser([]);
    }
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {props.children}
    </UserContext.Provider>
  );
};
