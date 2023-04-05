import React, { createContext, useState, useEffect } from "react";

export const UserImageContext = createContext();

export const UserImageProvider = (props) => {
	const [image, setImage] = useState(null);

	console.log(image);

	return (
		<UserImageContext.Provider value={{ image, setImage }}>
			{props.children}
		</UserImageContext.Provider>
	);
};
