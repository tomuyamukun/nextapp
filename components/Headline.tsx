import styles from "../styles/Home.module.css";

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

export function Headline(props: Props) {
	console.log(props);
	return (
		<div>
			<h1 className={styles.title}>{props.page} Page</h1>

			<p className={styles.description}>
				Get started by editing
				{props.children}
			</p>

			{/* <button onClick={props.onClick}>ボタン</button> */}
		</div>
	);
}
