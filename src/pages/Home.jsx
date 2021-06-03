import { Box } from "@chakra-ui/react";
import React from "react";
import { MainLayout } from "../layouts/MainLayout";
import { Projects } from "../components/home/ProjectHome";

export const Home = () => {
	return (
		<Box>
			<MainLayout isProject={true}>
				<Projects />
			</MainLayout>
		</Box>
	);
};
