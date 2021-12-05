import Head from "next/head";
import { Header } from "src/components/Header";
import React from "react";
import { Comments as CommentsComponent } from "src/components/Comments";

const Comments = () => {
	return (
		<div>
			<Head>User Page</Head>
			<Header />
			<CommentsComponent />
		</div>
	);
};

export default Comments;
