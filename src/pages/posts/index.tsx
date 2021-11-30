import Head from "next/head";
import { Header } from "src/components/Header";
import { Posts as PostsComponent } from "src/components/Posts";
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

const Posts = () => {
	return (
		<div>
			<Head>
				<title>Posts Page</title>
			</Head>
			<Header />
			<PostsComponent />
		</div>
	);
};

export default Posts;
