import { Headline } from "src/components/Headline";
import { Links } from "src/components/Links";
import classes from "src/components/Main/Main.module.css";
import React, { useEffect, useCallback, useState } from "react";

interface MyObj {
	foo: string;
	bar: string;
}

type Props = {
	page: string;
	number?: number;
	array?: number[];
	obj?: MyObj;
	boolean?: boolean;
	code?: JSX.Element;
	onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
	children?: JSX.Element;
};

type LinkObj = {
	href: string;
	title: string;
	description: string;
};

const ITEMS: LinkObj[] = [
	{
		href: "https://nextjs.org/docs",
		title: "Documentation →",
		description: "Find in-depth information about Next.js features and API.",
	},
	{
		href: "https://nextjs.org/learn",
		title: "Learn →",
		description: "Learn about Next.js in an interactive course with quizzes!",
	},
	{
		href: "https://github.com/vercel/next.js/tree/master/examples",
		title: "Examples →",
		description: "Discover and deploy boilerplate example Next.js projects.",
	},
	{
		href: "https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",
		title: "Deploy →",
		description:
			"Instantly deploy your Next.js site to a public URL with Vercel.",
	},
];

export function Main(props: Props) {
	const [items, setItems] = useState(ITEMS);
	const handleReduce = useCallback(
		(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
			setItems((prevItems) => {
				return prevItems.slice(0, prevItems.length - 1);
			});
		},
		[]
	);
	return (
		<main className={classes.main}>
			<Headline page={props.page} handleReduce={handleReduce}>
				<code className={classes.code}>pages/{items.length}.js</code>
			</Headline>
			<Links items={items} />
		</main>
	);
}
