import React, { useCallback, useMemo, useState } from "react";

export const useCounter = () => {
	const [count, setCount] = useState<number>(1);
	const [isShow, setIsShow] = useState<boolean>(true);

	const doubleCount: number = useMemo(() => {
		return count * 2;
	}, [count]);

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

	return { count, doubleCount, isShow, handleClick, handleDisplay };
};
