import Head from "next/head";
import { Footer } from "src/components/Footer";
import { Header } from "src/components/Header";
import { Main } from "src/components/Main";
import styles from "../styles/Home.module.css";
import React, { useCallback, useEffect, useState } from "react";

export default function Home() {
	const [count, setCount] = useState<number>(1);
	const [text, setText] = useState<string>("");
	const [isShow, setIsShow] = useState<boolean>(true);

	const handleClick = useCallback(
		(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
			e.preventDefault();
			setCount((count) => count + 1);
		},
		[]
	);

	const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
		if (e.target.value.length > 5) {
			alert("5文字以上はだめ");
			return;
		}
		setText(e.target.value.trim());
	}, []);

	const handleDisplay = useCallback(() => {
		setIsShow((isShow) => !isShow);
	}, []);

	useEffect(() => {
		console.log("マウント時");
		document.body.style.backgroundColor = "lightblue";

		return () => {
			console.log("アンマウント時");
			document.body.style.backgroundColor = "";
		};
	}, [count]);

	return (
		<div className={styles.container}>
			<Head>
				<title>Create Next App</title>
			</Head>
			<Header />
			{isShow ? <h1>{count}</h1> : null}
			<button onClick={handleClick}>ボタン</button>
			<button onClick={handleDisplay}>{isShow ? "非表示" : "表示"}</button>
			<input type="text" value={text} onChange={handleChange} />
			<Main page="index" />
			<Footer />
		</div>
	);
}
