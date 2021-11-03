import "src/styles/globals.css";
import { AppProps } from "next/app";
import Head from "next/head";
import { useCounter } from "src/hooks/useCounter";
import { useInputArray } from "src/hooks/useInputArray";
import { useBgColor } from "src/hooks/useBgColor";

const MyApp = ({ Component, pageProps }: AppProps) => {
	const counter = useCounter();
	const inputArray = useInputArray();
	useBgColor();

	return (
		<>
			<Component {...pageProps} {...counter} {...inputArray} />
			<Head>
				<link rel="icon" href="/favicon.ico" />
			</Head>
		</>
	);
};

export default MyApp;
