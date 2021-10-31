import React, { useEffect } from "react";

export const useBgLightBlue = () => {
	useEffect(() => {
		console.log("マウント時");
		document.body.style.backgroundColor = "lightblue";

		return () => {
			console.log("アンマウント時");
			document.body.style.backgroundColor = "";
		};
	}, []);
};
