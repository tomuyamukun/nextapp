import { useComment } from "src/hooks/useComment";
import Head from "next/head";

export const Comment = () => {
	const { comment, error, isLoading } = useComment();
	if (isLoading) {
		return <div>ローディング中です</div>;
	}
	if (error) {
		return <div>{error.message}</div>;
	}

	return (
		<div>
			<Head>
				<title>{comment?.name}</title>
			</Head>
			<div>
				<h1>{comment?.body}</h1>
			</div>
		</div>
	);
};
