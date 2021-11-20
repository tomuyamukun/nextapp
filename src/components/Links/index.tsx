import classes from "src/components/Links/Links.module.css";
interface LinkObj {
	href: string;
	title: string;
	description: string;
}

export function Links(props: LinkObj[]) {
	return (
		<div className={classes.grid}>
			{props.items.map((item: LinkObj) => {
				return (
					<a key={item.href} href={item.href} className={classes.card}>
						<h2 className={classes.title}>{item.title}</h2>
						<p className={classes.description}>{item.description}</p>
					</a>
				);
			})}
		</div>
	);
}
