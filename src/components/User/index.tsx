import { useUser } from "src/hooks/useUser";
import Head from "next/head";

interface json {
	userId: number;
	id: number;
	title: string;
	body: string;
}

export const User = () => {
	const { data, error, isLoading } = useUser();

	if (isLoading) {
		return <div>ローディング中です</div>;
	}
	if (error) {
		return <div>{error.message}</div>;
	}

	return (
		<div>
			<Head>
				<title>{data?.name}</title>
			</Head>
			<div>
				<h1>{data?.username}</h1>
				<p>{data?.email}</p>
			</div>
		</div>
	);
};
