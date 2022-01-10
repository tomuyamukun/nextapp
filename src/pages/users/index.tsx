import Head from "next/head";
import { Header } from "src/components/Header";
import React from "react";
import { Users as UsersComponent } from "src/components/Users";

const Users = () => {
	return (
		<div>
			<Head>User Page</Head>
			<Header />
			<UsersComponent />
		</div>
	);
};

export default Users;
