import Head from "next/head";
import { Footer } from "src/components/Footer";
import { Header } from "src/components/Header";
import { Main } from "src/components/Main";
import { Posts } from "src/components/Posts";
import styles from "src/styles/Home.module.css";
import React, { useCallback, useEffect, useState } from "react";

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

type json = {
	userId: number;
	id: number;
	title: string;
	body: string;
};

const Home = () => {
	return (
		<div className={styles.container}>
			<Head>
				<title>Create Next App</title>
			</Head>
			<Header />
			<Posts />
		</div>
	);
};

export default Home;
