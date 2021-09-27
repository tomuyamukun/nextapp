import { Headline } from "../components/Headline";
import { Links } from "../components/Links";
import classes from "./Main.module.css";

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

export function Main(props: Props) {
	return (
		<main className={classes.main}>
			<Headline
				page={props.page}
				// onClick={() => alert("クリック")}
			>
				<code className={classes.code}>pages/{props.page}.js</code>
			</Headline>
			<Links />
		</main>
	);
}
