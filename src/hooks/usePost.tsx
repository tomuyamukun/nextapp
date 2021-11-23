import { useRouter } from "next/dist/client/router";
import useSWR from "swr";
import { fetcher } from "src/utils/fetcher";

export const usePost = () => {
	const router = useRouter();

	const { data: post, error: postError } = useSWR(
		router.query.id
			? `https://jsonplaceholder.typicode.com/posts/${router.query.id}`
			: null,
		fetcher
	);
	const { data: user, error: userError } = useSWR(
		post?.userId
			? `https://jsonplaceholder.typicode.com/users/${post.userId}`
			: null,
		fetcher
	);

	return {
		post,
		user,
		error: postError || userError,
		isLoading: !user && !userError,
	};
};
