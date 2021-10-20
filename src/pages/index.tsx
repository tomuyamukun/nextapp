import Head from "next/head";
import { Footer } from "src/components/Footer";
import { Header } from "src/components/Header";
import { Main } from "src/components/Main";
import styles from "../styles/Home.module.css";
import React, { useCallback, useEffect } from "react";

export default function Home() {
	const buttonClick = useCallback(
		(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
			e.preventDefault();
			alert("Click");
		},
		[]
	);
	useEffect(() => {
		console.log("マウント時");
		document.body.style.backgroundColor = "lightblue";

		return () => {
			console.log("アンマウント時");
			document.body.style.backgroundColor = "";
		};
	}, []);

	return (
		<div className={styles.container}>
			<Head>
				<title>Create Next App</title>
			</Head>
			<Header />
			<button onClick={buttonClick}>ボタン</button>
			<Main page="index" />
			<Footer />
		</div>
	);
}
