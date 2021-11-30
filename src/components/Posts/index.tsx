import Link from "next/Link";
import { usePosts } from "src/hooks/usePosts";

interface json {
	userId: number;
	id: number;
	title: string;
	body: string;
}

export const Posts = () => {
	const { data, error, isLoading, isEmpty } = usePosts();

	if (isLoading) {
		return <div>ローディング中です</div>;
	}
	if (error) {
		return <div>{error.message}</div>;
	}
	if (isEmpty) {
		return <div>データは空です</div>;
	}

	return (
		<ol>
			{data.map((post: any) => {
				return (
					<li key={post.id}>
						<Link href={`/posts/${post.id}`}>
							<a>{post.title}</a>
						</Link>
					</li>
				);
			})}
		</ol>
	);
};
