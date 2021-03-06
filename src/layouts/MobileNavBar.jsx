import { Box, HStack, Text } from "@chakra-ui/react";
import React from "react";
import { NavLink } from "react-router-dom";

import { FaFolderOpen, FaHome } from "react-icons/fa";
import { BsFillChatDotsFill } from "react-icons/bs";
import { GoProject } from "react-icons/go";

export const MobileNavBar = () => {
	return (
		<Box>
			<HStack
				justifyContent="space-evenly"
				display={["flex", "flex", "flex", "none"]}
				position="fixed"
				bottom="0"
				height="12%"
				width="100%"
				bgColor="#1a1919"
				zIndex="999"
				padding="1.5rem 0"
				borderTop="1px solid rgba(255, 255, 255, 0.3)"
			>
				<NavLink exact to="/" activeClassName="selected">
					<Box cursor="pointer">
						<Box
							className="active_mobile_border"
							borderRadius="8px"
							p=".3rem .5rem"
							display="flex"
							justifyContent="center"
							marginBottom=".2rem"
						>
							<FaHome />
						</Box>
						<Text
							fontFamily="Space Grotesk"
							fontSize=".5rem"
							textTransform="uppercase"
							fontWeight="700"
							textAlign="center"
						>
							Home
						</Text>
					</Box>
				</NavLink>

				<NavLink to="/projects" activeClassName="selected">
					<Box cursor="pointer">
						<Box
							className="active_mobile_border"
							borderRadius="8px"
							p=".3rem .5rem"
							display="flex"
							justifyContent="center"
							marginBottom=".2rem"
						>
							<GoProject />
						</Box>
						<Text
							fontFamily="Space Grotesk"
							fontSize=".5rem"
							textTransform="uppercase"
							fontWeight="700"
							textAlign="center"
						>
							Projects
						</Text>
					</Box>
				</NavLink>

				<NavLink to="/resume" activeClassName="selected">
					<Box cursor="pointer" position="relative">
						<Box
							className="active_mobile_border"
							borderRadius="8px"
							p=".3rem .5rem"
							display="flex"
							justifyContent="center"
							marginBottom=".2rem"
						>
							<FaFolderOpen />
						</Box>
						<Text
							fontFamily="Space Grotesk"
							fontSize=".5rem"
							textTransform="uppercase"
							fontWeight="700"
							textAlign="center"
						>
							Resume
						</Text>
					</Box>
				</NavLink>

				<NavLink to="/contact" activeClassName="selected">
					<Box cursor="pointer" position="relative">
						<Box
							className="active_mobile_border"
							borderRadius="8px"
							p=".3rem .5rem"
							display="flex"
							justifyContent="center"
							marginBottom=".2rem"
						>
							<BsFillChatDotsFill />
						</Box>
						<Text
							fontFamily="Space Grotesk"
							fontSize=".5rem"
							textTransform="uppercase"
							fontWeight="700"
							textAlign="center"
						>
							Contact
						</Text>
					</Box>
				</NavLink>
			</HStack>
		</Box>
	);
};
