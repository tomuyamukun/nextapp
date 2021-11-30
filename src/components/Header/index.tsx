import classes from "src/components/Header/Header.module.css";
import Link from "next/Link";

type LinkObj = {
	href: string;
	label: string;
};

const NAV_ITEMS: LinkObj[] = [
	{ href: "/", label: "Index" },
	{ href: "/posts", label: "Posts" },
];

export const Header = () => {
	return (
		<header className={classes.header}>
			{NAV_ITEMS.map((item) => {
				return (
					<Link key={item.href} href={item.href}>
						<a className={classes.anchor}>{item.label}</a>
					</Link>
				);
			})}
		</header>
	);
};
