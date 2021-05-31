import { Box, HStack, Text } from "@chakra-ui/react";
import React from "react";
import { NavLink } from "react-router-dom";

import { FaFolderOpen, FaHome } from "react-icons/fa";
import { BsFillChatDotsFill } from "react-icons/bs";

export const MobileNavBar = () => {
	return (
		<Box>
			<HStack
				justifyContent="space-evenly"
				display={["flex", "flex", "flex", "none"]}
				position="absolute"
				bottom="0"
				height="10%"
				width="100%"
				bgColor="#09090A"
				zIndex="99"
				paddingTop=".2rem"
			>
				<NavLink exact to="/" activeClassName="selected">
					<Box cursor="pointer">
						<Box
							className="active_border"
							border="3px solid rgba(255, 255, 255, 0.3)"
							borderRadius="8px"
							p=".3rem .5rem"
							marginBottom=".2rem"
						>
							<FaHome />
						</Box>
						<Text
							fontSize=".5rem"
							textTransform="uppercase"
							fontWeight="700"
							textAlign="center"
						>
							Home
						</Text>
					</Box>
				</NavLink>

				<NavLink exact to="/projects" activeClassName="selected">
					<Box cursor="pointer">
						<Box
							className="active_border"
							border="3px solid rgba(255, 255, 255, 0.3)"
							borderRadius="8px"
							p=".3rem .5rem"
							marginBottom=".2rem"
						>
							<FaHome />
						</Box>
						<Text
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
							className="active_border"
							border="3px solid rgba(255, 255, 255, 0.3)"
							borderRadius="8px"
							p=".3rem .5rem"
							marginBottom=".2rem"
						>
							<FaFolderOpen />
						</Box>
						<Text
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
							className="active_border"
							border="3px solid rgba(255, 255, 255, 0.3)"
							borderRadius="8px"
							p=".3rem .5rem"
							marginBottom=".2rem"
						>
							<BsFillChatDotsFill />
						</Box>
						<Text
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
