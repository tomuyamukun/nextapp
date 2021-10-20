import Head from "next/head";
import { Footer } from "src/components/Footer";
import { Header } from "src/components/Header";
import { Main } from "src/components/Main";
import styles from "../styles/Home.module.css";
import React, { useCallback, useEffect, useState } from "react";

export default function Home() {
	const [count, setCount] = useState<number>(1);

	const handleClick = useCallback(
		(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
			e.preventDefault();
			setCount((count) => count + 1);
		},
		[]
	);
	useEffect(() => {
		// console.log("マウント時");
		document.body.style.backgroundColor = "lightblue";

		return () => {
			// console.log("アンマウント時");
			document.body.style.backgroundColor = "";
		};
	}, []);

	console.log(num);

	return (
		<div className={styles.container}>
			<Head>
				<title>Create Next App</title>
			</Head>
			<Header />
			<h1>{num}</h1>
			<button onClick={handleClick}>ボタン</button>
			<Main page="index" />
			<Footer />
		</div>
	);
}
