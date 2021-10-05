import classes from "./Header.module.css";
import Link from "next/Link";

export function Header() {
	return (
		<header className={classes.header}>
			<Link href="/">
				<a className={classes.anchor}>Index</a>
			</Link>
			<Link href="/about">
				<a className={classes.anchor}>About</a>
			</Link>
		</header>
	);
}
