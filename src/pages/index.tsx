import Head from "next/head";
import { Header } from "src/components/Header";
import styles from "src/styles/Home.module.css";

type props = {
	count: number;
	isShow: boolean;
	handleClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
	handleDisplay: () => void;
	text: string;
	array: any[];
	handleAdd: () => void;
	handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Index = (props: props) => {
	return (
		<div>
			<Head>
				<title>Create Next App</title>
			</Head>
			<Header />
			<h1>Next.jsで学ぶReact講座</h1>
			<p>JSONPlaceholderで色々叩く</p>
		</div>
	);
};
export default Index;
