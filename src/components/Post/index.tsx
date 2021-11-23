import { usePost } from "src/hooks/usePost";
import Head from "next/head";

interface json {
	userId: number;
	id: number;
	title: string;
	body: string;
}

export const Post = () => {
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
				<title>{post?.title}</title>
			</Head>
			<div>
				<h1>{post?.title}</h1>
				<p>{post?.body}</p>
				{user?.name ? <div>Created by {user?.name}</div> : null}
			</div>
		</div>
	);
};
