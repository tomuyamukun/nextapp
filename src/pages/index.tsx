import Head from "next/head";
import { Footer } from "src/components/Footer";
import { Header } from "src/components/Header";
import { Main } from "src/components/Main";
import styles from "../styles/Home.module.css";
import React from "react";

type props = {
	doubleCount: number;
	isShow: boolean;
	handleClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
	handleDisplay: () => void;
	text: string;
	array: any[];
	handleAdd: () => void;
	handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function Home(props: props) {
	const {
		doubleCount,
		isShow,
		handleClick,
		handleDisplay,
		text,
		array,
		handleAdd,
		handleChange,
	} = props;

	return (
		<div className={styles.container}>
			<Head>
				<title>Create Next App</title>
			</Head>
			<Header />

			{isShow ? <h1>{doubleCount}</h1> : null}
			<button onClick={handleClick}>ボタン</button>
			<button onClick={handleDisplay}>{isShow ? "非表示" : "表示"}</button>

			<input type="text" value={text} onChange={handleChange} />
			<button onClick={handleAdd}>追加</button>
			<ul>
				{array.map((item) => {
					return <div key={item}>{item}</div>;
				})}
			</ul>

			<Main page="index" />
			<Footer />
		</div>
	);
}
