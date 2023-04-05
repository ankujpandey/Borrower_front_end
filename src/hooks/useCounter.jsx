import { useEffect, useState } from "react";

export const useCounter = (seconds) => {
	const [count, setCount] = useState(seconds);

	useEffect(() => {
		if (seconds > 0) {
			setTimeout(() => {
				setCount(seconds - 1);
			}, 1000);
		}
	}, [seconds]);

	return { count };
};
