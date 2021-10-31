import React, { useCallback, useState } from "react";

export const useInputArray = () => {
	const [text, setText] = useState<string>("");
	const [array, setArray] = useState<any[]>([]);
	const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
		if (e.target.value.length > 5) {
			alert("5文字以上はだめ");
			return;
		}
		setText(e.target.value.trim());
	}, []);

	const handleAdd = useCallback(() => {
		setArray((prevArray) => {
			if (prevArray.some((item: any) => item === text)) {
				alert("同じ要素がすでにあるぞ");
				return prevArray;
			}
			return [...prevArray, text];
		});
	}, [text]);

	return { text, array, handleAdd, handleChange };
};
