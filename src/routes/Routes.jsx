import React, { useState, useEffect } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect,
} from "react-router-dom";
import { Home } from "../pages/Home";
import { Contact } from "../pages/Contact";
import { Resume } from "../pages/Resume";
import { Projects } from "../pages/Projects";

export function useMediaQuery(query) {
	const [matches, setMatches] = useState(false);

	useEffect(() => {
		const media = window.matchMedia(query);
		if (media.matches !== matches) {
			setMatches(media.matches);
		}
		const listener = () => {
			setMatches(media.matches);
		};
		media.addListener(listener);
		return () => {
			media.removeListener(listener);
		};
	}, [matches, query]);

	return matches;
}

function Routes() {
	const isPageWide = useMediaQuery("(max-width: 1023px)");

	return (
		<Router>
			<ChakraProvider>
				<Switch>
					<Route path="/contact">
						<Contact />
					</Route>
					<Route path="/resume">
						<Resume />
					</Route>

					{isPageWide ? (
						<Route path="/projects">
							<Projects />
							{/* <Redirect from="/projects" to="/" /> */}
						</Route>
					) : (
						<Route path="/">
							<Home />
							<Redirect from="/projects" to="/" />
						</Route>
					)}

					{/* <Route path="/">
						<Home />
						<Redirect from="/projects" to="/" />
					</Route> */}

					<Route exact path="/">
						<Home />
					</Route>
				</Switch>
			</ChakraProvider>
		</Router>
	);
}

export default Routes;
