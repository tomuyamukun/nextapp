import { Headline } from "../components/Headline";
import { Links } from "../components/Links";
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

export function Main(props: Props) {
	return (
		<main className={styles.main}>
			<Headline
				page={props.page}
				// onClick={() => alert("クリック")}
			>
				<code className={styles.code}>pages/{props.page}.js</code>
			</Headline>
			<Links />
		</main>
	);
}
