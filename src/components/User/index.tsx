import { usePost } from "src/hooks/usePost";
import Head from "next/head";

interface json {
	userId: number;
	id: number;
	title: string;
	body: string;
}

export const User = () => {
	const { post, user, error, isLoading } = usePost();

	if (isLoading) {
		return <div>ローディング中です</div>;
	}
	if (error) {
		return <div>{error.message}</div>;
	}

	return (
		<div>
			<Head>
				<title>{user?.name}</title>
			</Head>
			<div>
				<h1>{user?.username}</h1>
				<p>{user?.email}</p>
			</div>
		</div>
	);
};
