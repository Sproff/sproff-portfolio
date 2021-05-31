import { Box, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { NavLink } from "react-router-dom";

import { FaFolderOpen, FaHome } from "react-icons/fa";
import { BsFillChatDotsFill } from "react-icons/bs";

export const SideBar = () => {
	return (
		<Box height="100vh">
			<Box>
				<VStack
					justifyContent="space-evenly"
					height="100vh"
					display={["none", "none", "none", "flex"]}
				>
					<NavLink exact to="/" activeClassName="selected">
						<Box cursor="pointer">
							<Box
								className="active_border"
								border="3px solid rgba(255, 255, 255, 0.3)"
								borderRadius="8px"
								p=".4rem"
							>
								<FaHome />
							</Box>
							<Text
								fontSize=".5rem"
								textTransform="uppercase"
								fontWeight="700"
								textAlign="center"
								padding=".3rem 0"
							>
								Home
							</Text>
						</Box>
					</NavLink>

					<NavLink to="/resume" activeClassName="selected">
						<Box cursor="pointer" position="relative">
							<Box
								position="absolute"
								top={["-85px", "-85px", "-130px", "-120px"]}
								left="16px"
								width="3px"
								height={["85px", "85px", "130px", "120px"]}
								backgroundColor="rgba(255, 255, 255, 0.3)"
								className="vertical_line"
							/>
							<Box
								className="active_border"
								border="3px solid rgba(255, 255, 255, 0.3)"
								borderRadius="8px"
								p=".4rem"
							>
								<FaFolderOpen />
							</Box>
							<Text
								fontSize=".5rem"
								textTransform="uppercase"
								fontWeight="700"
								textAlign="center"
								padding=".3rem 0"
							>
								Resume
							</Text>
						</Box>
					</NavLink>

					<NavLink to="/contact" activeClassName="selected">
						<Box cursor="pointer" position="relative">
							<Box
								position="absolute"
								top={["-85px", "-85px", "-130px", "-120px"]}
								left="16px"
								width="3px"
								height={["85px", "85px", "130px", "120px"]}
								backgroundColor="rgba(255, 255, 255, 0.3)"
								className="vertical_line"
							/>
							<Box
								className="active_border"
								border="3px solid rgba(255, 255, 255, 0.3)"
								borderRadius="8px"
								p=".4rem"
							>
								<BsFillChatDotsFill />
							</Box>
							<Text
								fontSize=".5rem"
								textTransform="uppercase"
								fontWeight="700"
								textAlign="center"
								padding=".3rem 0"
							>
								Contact
							</Text>
						</Box>
					</NavLink>
				</VStack>
			</Box>
		</Box>
	);
};
