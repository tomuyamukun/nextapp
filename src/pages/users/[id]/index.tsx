import { Header } from "src/components/Header";
import React from "react";
import { User } from "src/components/User";

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

const UserId = () => {
	return (
		<div>
			<Header />
			<User />
		</div>
	);
};

export default UserId;
