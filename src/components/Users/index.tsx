import Link from "next/Link";
import { useUsers } from "src/hooks/useUsers";

export const Users = () => {
	const { data, error, isLoading, isEmpty } = useUsers();

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
			{data.map((user: any) => {
				return (
					<li key={user.id}>
						<Link href={`/users/${user.id}`}>
							<a>{user.username}</a>
						</Link>
					</li>
				);
			})}
		</ol>
	);
};
