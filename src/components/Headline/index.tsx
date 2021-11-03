import classes from "src/components/Headline/Headline.module.css";

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
	onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
	children?: JSX.Element;
	handleReduce: (
		event: React.MouseEvent<HTMLButtonElement, MouseEvent>
	) => void;
};

export const Headline = (props: Props) => {
	console.log(props);
	return (
		<div>
			<h1 className={classes.title}>{props.page} Page</h1>

			<p className={classes.description}>
				アイテムの数は
				{props.children}個です
			</p>

			<button onClick={props.handleReduce}>減らす</button>
		</div>
	);
};
