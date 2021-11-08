import Head from "next/head";
import { Footer } from "src/components/Footer";
import { Header } from "src/components/Header";
import { Main } from "src/components/Main";
import styles from "../styles/Home.module.css";
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

const Home = (props: props) => {
	const [posts, setPosts] = useState<json[]>([]);

	const getPosts = useCallback(async () => {
		const res: Response = await fetch(
			"https://jsonplaceholder.typicode.com/posts"
		);
		const json: any = await res.json();
		setPosts(json);
	}, []);

	useEffect(() => {
		getPosts();
	}, [getPosts]);

	return (
		<div className={styles.container}>
			<Head>
				<title>Create Next App</title>
			</Head>
			<Header />
			{posts.length > 0 ? (
				<ol>
					{posts.map((post) => {
						return <li key={post.id}>{post.title}</li>;
					})}
				</ol>
			) : null}
		</div>
	);
};

export default Home;
