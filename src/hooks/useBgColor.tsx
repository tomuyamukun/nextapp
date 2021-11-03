import { NextRouter, useRouter } from "next/dist/client/router";
import React, { useEffect, useMemo } from "react";

export const useBgColor = () => {
	const router: NextRouter = useRouter();

	const bgColor = useMemo(() => {
		return router.pathname === "/" ? "lightblue" : "beige";
	}, [router.pathname]);

	useEffect(() => {
		console.log("マウント時");
		document.body.style.backgroundColor = bgColor;

		return () => {
			console.log("アンマウント時");
			document.body.style.backgroundColor = "";
		};
	}, [bgColor]);
};
