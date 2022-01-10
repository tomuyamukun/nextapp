import { Header } from "src/components/Header";
import React from "react";
import { User } from "src/components/User";
import { Comment } from "src/components/Cooment";

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

const CommentId = () => {
	return (
		<div>
			<Header />
			<Comment />
		</div>
	);
};

export default CommentId;
