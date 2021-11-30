import { Header } from "src/components/Header";
import styles from "src/styles/Home.module.css";
import React from "react";
import { Post } from "src/components/Post";

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

const PostsId = () => {
	return (
		<div>
			<Header />
			<Post />
		</div>
	);
};

export default PostsId;
