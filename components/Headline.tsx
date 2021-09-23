import styles from "../styles/Home.module.css";

type Props = {
	page: JSX.Element | string;
};

export default function Headline(props: Props) {
	console.log(props);
	return (
		<div>
			<h1 className={styles.title}>{props.page} Page</h1>

			<p className={styles.description}>
				Get started by editing{" "}
				<code className={styles.code}>pages/{props.page}.js</code>
			</p>
		</div>
	);
}
