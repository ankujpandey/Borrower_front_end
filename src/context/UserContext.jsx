import React, { createContext, useState, useEffect } from "react";

export const UserContext = createContext();

export const UserProvider = (props) => {
	const [user, setUser] = useState(null);
	const [token, setToken] = useState(null);
	const [companyDomain, setCompanyDomain] = useState(null);

	useEffect(() => {
		// localStorage.clear();
		const userData = JSON.parse(localStorage.getItem("localUser"));

		if (userData) {
			console.log("local storage at context", userData.result);
			setUser(userData.result);
			setToken(userData.auth);
		} else {
			setUser([]);
		}
	}, []);

	return (
		<UserContext.Provider
			value={{
				user,
				setUser,
				token,
				setToken,
				companyDomain,
				setCompanyDomain,
			}}>
			{props.children}
		</UserContext.Provider>
	);
};
