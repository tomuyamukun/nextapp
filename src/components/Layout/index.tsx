import classes from "src/components/Layout/Layout.module.css";

export const Layout = (props: any) => {
	return <div className={classes.container}>{props.children}</div>;
};
