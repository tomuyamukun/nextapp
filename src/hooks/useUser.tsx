import { useRouter } from "next/dist/client/router";
import useSWR from "swr";
import { fetcher } from "src/utils/fetcher";

export const useUser = () => {
	const router = useRouter();

	const { data, error } = useSWR(
		router.query.id
			? `https://jsonplaceholder.typicode.com/users/${router.query.id}`
			: null,
		fetcher
	);

	return {
		data,
		error,
		isLoading: !data && !error,
	};
};
