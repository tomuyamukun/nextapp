import Link from "next/Link";
import { useComments } from "src/hooks/useComments";

export const Comments = () => {
	const { data, error, isLoading, isEmpty } = useComments();

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
			{data.map((comment: any) => {
				return (
					<li key={comment.id}>
						<Link href={`/users/${comment.id}`}>
							<a>{comment.name}</a>
						</Link>
					</li>
				);
			})}
		</ol>
	);
};
