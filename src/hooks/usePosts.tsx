import useSWR from "swr";

const fetcher = async (url: string) => {
	const response = await fetch(url);

	if (!response.ok) {
		throw new Error("エラーが発生したのでデータの取得に失敗");
	}
	const json = await response.json();
	return json;
};

export const usePosts = () => {
	const { data, error } = useSWR(
		"https://jsonplaceholder.typicode.com/posts",
		fetcher
	);
	return {
		data,
		error,
		isLoading: !error && !data,
		isEmpty: data && data.length === 0,
	};
};
