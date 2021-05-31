import { Box, HStack } from "@chakra-ui/react";
import React from "react";
import { Main } from "../components/home/Main";
import { Projects } from "./Projects";
import { MobileNavBar } from "../layouts/MobileNavBar";
import { SideBar } from "../layouts/SideBar";
import { BackgroundImage } from "../components/common/BackgroundImage";

export const Home = () => {
	return (
		<Box w="100%" h="100vh" bgColor="#000" overflow="hidden">
			<Box w="100%" position="relative">
				<BackgroundImage />
			</Box>

			<Box>
				<MobileNavBar />
			</Box>

			<HStack>
				<Box
					w={["0", "0", "0", "6%"]}
					borderRight={["none", "none", "none", "2px solid #555"]}
				>
					<SideBar display={["none", "none", "none", "flex"]} />
				</Box>
				<Box w={["100%", "100%", "100%", "41%"]}>
					<Main />
				</Box>
				<Box
					w="53%"
					h="100vh"
					overflowY="scroll"
					// zIndex="99999999999999999"
					display={["none", "none", "none", "block"]}
				>
					<Projects />
				</Box>
			</HStack>
		</Box>
	);
};
