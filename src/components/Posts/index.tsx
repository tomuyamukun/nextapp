import React, { useCallback, useEffect, useState } from "react";

type json = {
	userId: number;
	id: number;
	title: string;
	body: string;
};

export const Posts = () => {
	const [posts, setPosts] = useState<json[]>([]);
	const [loading, setLoading] = useState<boolean>(true);
	const [error, setError] = useState<any>(null);

	const getPosts = useCallback(async () => {
		try {
			const res: Response = await fetch(
				"https://jsonplaceholder.typicode.com/posts"
			);
			if (!res.ok) {
				throw new Error("エラーが発生したので、データの取得に失敗");
			}
			const json: any = await res.json();
			setPosts(json);
		} catch (error) {
			setError(error);
		}
		setLoading(false);
	}, []);

	useEffect(() => {
		getPosts();
	}, [getPosts]);

	if (loading) {
		return <div>ローディング中です</div>;
	}
	if (error) {
		return <div>{error.message}</div>;
	}
	if (posts.length === 0) {
		return <div>データは空です</div>;
	}

	return (
		<ol>
			{posts.map((post) => {
				return <li key={post.id}>{post.title}</li>;
			})}
		</ol>
	);
};
