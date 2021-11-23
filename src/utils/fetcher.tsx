export const fetcher = async (url: string) => {
	const response = await fetch(url);

	if (!response.ok) {
		throw new Error("エラーが発生したのでデータの取得に失敗");
	}
	const json = await response.json();
	return json;
};
