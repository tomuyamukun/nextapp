import React, { useCallback, useState } from "react";

export const useCounter = () => {
	const [count, setCount] = useState<number>(1);
	const [isShow, setIsShow] = useState<boolean>(true);

	const handleClick = useCallback(
		(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
			e.preventDefault();
			setCount((prevCount) => prevCount + 1);
		},
		[]
	);

	const handleDisplay = useCallback(() => {
		setIsShow((prevIsShow) => !prevIsShow);
	}, []);

	return { count, isShow, handleClick, handleDisplay };
};
