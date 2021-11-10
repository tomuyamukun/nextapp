import React, { useCallback, useEffect, useReducer } from "react";

interface json {
	userId: number;
	id: number;
	title: string;
	body: string;
}

type state = {
	data: Array<json>;
	loading: boolean;
	error: any;
};

const initialState: state = {
	data: [],
	loading: true,
	error: null,
};

const reducer = (state: state, action: any) => {
	switch (action.type) {
		case "end":
			return {
				...state,
				data: action.data,
				loading: false,
			};
		case "error":
			return {
				...state,
				loading: false,
				error: action.error,
			};
		default:
			throw new Error("no such action type!");
	}
};

export const Posts = () => {
	const [state, dispatch] = useReducer(reducer, initialState);

	const getPosts = useCallback(async () => {
		try {
			const res: Response = await fetch(
				"https://jsonplaceholder.typicode.com/posts"
			);
			if (!res.ok) {
				throw new Error("エラーが発生したので、データの取得に失敗");
			}
			const json: Array<json> = await res.json();
			dispatch({ type: "end", data: json });
		} catch (error) {
			dispatch({ type: "error", error });
		}
	}, []);

	useEffect(() => {
		getPosts();
	}, [getPosts]);

	if (state.loading) {
		return <div>ローディング中です</div>;
	}
	if (state.error) {
		return <div>{state.error.message}</div>;
	}
	if (state.data.length === 0) {
		return <div>データは空です</div>;
	}

	return (
		<ol>
			{state.data.map((post) => {
				return <li key={post.id}>{post.title}</li>;
			})}
		</ol>
	);
};
