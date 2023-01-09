import { Box, HStack } from "@chakra-ui/react";
import React from "react";
import { Main } from "../components/home/Main";
import { MobileNavBar } from "./MobileNavBar";
import { SideBar } from "./SideBar";

export const MainLayout = ({ isMobile, isProject, children }) => {
	return (
		<Box w="100%" height={["100vh", "100vh", "100%", "100%"]} overflow="hidden">
			<Box>
				<MobileNavBar />
			</Box>

			<HStack height="calc(100vh - 12%)">
				<Box
					w={["0", "0", "0", "6%"]}
					borderRight={["none", "none", "none", "2px solid #555"]}
				>
					<SideBar display={["none", "none", "none", "flex"]} />
				</Box>
				<Box
					w={["100%", "100%", "100%", "41%"]}
					zIndex="2"
					className={isMobile ? "isMobile" : ""}
				>
					<Main />
				</Box>
				<Box
					w={["100%", "100%", "100%", "53%"]}
					h="100vh"
					overflowY="scroll"
					zIndex="2"
					className={isProject ? "isProject" : ""}
				>
					{children}
				</Box>
			</HStack>
		</Box>
	);
};
